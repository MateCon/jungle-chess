import { FC, ReactNode, useCallback, useEffect, useState } from "react";
import { diffToDirection, directionToDiff } from "../../helpers/game/board";
import { getPossibleMoves, movePiece as movePieceMethod } from '../../helpers/game/gameMethods';
import { GameObject, GameUser, MoveDirection, PieceData, Turn } from "../../types/game";
import Modal from "../Modal";
import GamePiece from "./GamePiece";
import GameSquare from "./GameSquare";
import MoveList from "./MoveList";
import UserDisplay from "./UserDisplay";
import useTimers from "../../hooks/useTimers";

interface Props {
  cellSize: number;
  boardState: string[][];
  startingPieces: PieceData[];
  gameObjects: GameObject[][];
  endSquares: { [key: string]: [number, number] },
  users: GameUser[];
  showSideBar: boolean;
  onMove?: (move: string, position: [number, number]) => void;
  createMoveListener?: (move: (move: string, position: [number, number]) => void) => ReactNode;
}

const Game: FC<Props> = ({
  cellSize,
  boardState,
  startingPieces,
  gameObjects,
  onMove,
  createMoveListener,
  users,
  endSquares,
  showSideBar
}) => {
  const [state, setState] = useState(boardState);
  const [pieces, setPieces] = useState<PieceData[]>(startingPieces);
  const [active, setActive] = useState<[number, number][]>([]);
  const [possibleMoves, setPossibleMoves] = useState<[number, number][]>([]);
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null);
  const [turn, setTurn] = useState<Turn>("B");
  const [moveList, setMoveList] = useState<string[][]>([]);
  const timers = useTimers(2, false, 1000 * 60 * 10);
  const [showEndModal, setShowEndModal] = useState<boolean>(false);
  const [winner, setWinner] = useState<string | undefined>(undefined);

  const toggleTurn = () => {
    setTurn(turn === "B" ? "R" : "B");
    updateTimer(turn);
  };

  const updateTimer = useCallback((t?: Turn) => {
    timers.resumeAndStopOthers(t === "B" ? 1 : 0);
  }, [timers]);

  const movePieceWithListener = (...params: [string, [number, number]]) => {
    return movePiece(...params, true);
  }

  const movePieceWithoutListener = (...params: [string, [number, number]]) => {
    const result = movePiece(...params, false);
    return result;
  }

  const movePiece = (move: string, position: [number, number], hasListener: boolean): boolean => {
    if (state[position[1]][position[0]][0] !== turn) return false;
    const data = movePieceMethod(gameObjects, state, pieces, turn, move, position, endSquares[turn]);
    if (!data) return false;
    const { newState, newPieces } = data;
    const direction = directionToDiff(move[1] as MoveDirection);
    let diff = [direction[0], direction[1]];
    while (
      gameObjects[0].length > position[0] + diff[0] &&
      gameObjects.length > position[1] + diff[1] &&
      gameObjects[position[1] + diff[1]][position[0] + diff[0]] === GameObject.Water
    ) {
      diff[0] += direction[0];
      diff[1] += direction[1];
    }

    const otherEndSquares = Object
      .keys(endSquares)
      .map(key => endSquares[key]);

    for (let endSquare of otherEndSquares)
      if (position[0] + diff[0] === endSquare[0] && position[1] + diff[1] === endSquare[1]) {
        setShowEndModal(true);
        setWinner(users.filter(user => user.turn === turn)[0]?.username);
      }

    setState(newState);
    setPieces(newPieces);
    toggleTurn();
    setActive([
      position,
      [position[0] + diff[0], position[1] + diff[1]],
    ]);
    setPossibleMoves([]);
    if (moveList.length > 0 && moveList[moveList.length - 1].length === 1) {
      const copy = [...moveList];
      copy[copy.length - 1] = [copy[copy.length - 1][0], move];
      setMoveList(copy);
    } else {
      setMoveList([...moveList, [move]]);
    }
    if (onMove && hasListener) onMove(move, position);
    return true;
  }

  useEffect(() => {
    updateTimer();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className='relative'>
        <div className="grid grid-cols-7 w-fit">
          {gameObjects.map((row, y) => row.map((object, x) => {
            const tl = x === 0 ? (y + 1).toString() : undefined;
            const br = y === gameObjects.length - 1 ? String.fromCharCode(x + 65) : undefined;
            return <GameSquare
              key={`${x}-${y}`}
              {...{ object, x, y, cellSize, tl, br }}
              isActive={active.filter((el) => el[0] === x && el[1] === y).length > 0}
              isPossibleMove={possibleMoves.filter((el) => el[0] === x && el[1] === y).length > 0}
              onClick={(canMove: boolean) => {
                if (!canMove) {
                  setPossibleMoves([]);
                  return;
                }
                const name = state[selectedPiece![1]][selectedPiece![0]][1];
                const diff: [number, number] = [-(selectedPiece![0] - x), -(selectedPiece![1] - y)];
                const direction = diffToDirection(diff);
                if (!direction) return false;
                return movePieceWithListener(`${name}${direction}`, selectedPiece!);
              }}
            />
            }
          ))}
        </div>
        {pieces.map(({ team, name, position: [x, y] }) =>
          <GamePiece
            key={`${team}${name}`}
            x={x}
            y={y}
            cellSize={cellSize}
            piece={team + name}
            boardSize={[(state[0].length - 1) * cellSize, (state.length - 1) * cellSize]}
            turn={turn}
            onClick={() => {
              setPossibleMoves([...getPossibleMoves(state, gameObjects, [x, y], endSquares[turn])]);
              setSelectedPiece([x, y]);
              setActive([...active, [x, y]])
            }}
            onRelease={(diff: [number, number]) => {
              const direction = diffToDirection(diff);
              if (!direction) return false;
              if (active.length === 3) setActive(active.slice(0, 1));
              else setActive([]);
              return movePieceWithListener(`${name}${direction}`, [x, y]);
            }}
          />
        )}
        {createMoveListener && createMoveListener(movePieceWithoutListener)}
      </div>
      {showSideBar && <><div className={`flex flex-col ml-8`} style={{ height: cellSize * gameObjects.length }}>
        <UserDisplay
          user={users[1]}
          turn={turn}
          time={timers.getTimeFormatted(1, 2)} />
        <div className={`flex-1 bg-neutral-700 text-white w-96 my-6 overflow-hidden shadow-md overflow-y-scroll`}>
          <MoveList {...{ moveList, users }} />
        </div>
        <UserDisplay
          user={users[0]}
          turn={turn}
          time={timers.getTimeFormatted(0, 2)} />
      </div><Modal show={showEndModal} hide={() => setShowEndModal(false)}>
          <p>{winner} won!</p>
        </Modal></>
    }</div>
  )
};

export default Game;
