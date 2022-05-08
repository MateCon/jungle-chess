import { FC, ReactNode, useState } from "react";
import { diffToDirection, directionToDiff } from "../helpers/game/board";
import { getPossibleMoves, movePiece as movePieceMethod } from '../helpers/game/gameMethods';
import { GameObject, MoveDirection, PieceData, Turn } from "../types/game";
import GamePiece from "./GamePiece";
import GameSquare from "./GameSquare";

interface Props {
  cellSize: number;
  boardState: string[][];
  startingPieces: PieceData[];
  gameObjects: GameObject[][];
  onMove?: (move: string, position: [number, number]) => void;
  createMoveListener?: (move: (move: string, position: [number, number]) => void) => ReactNode;
}

const Game: FC<Props> = ({ cellSize, boardState, startingPieces, gameObjects, onMove, createMoveListener }) => {
  const [state, setState] = useState(boardState);
  const [pieces, setPieces] = useState<PieceData[]>(startingPieces);
  const [active, setActive] = useState<[number, number][]>([]);
  const [possibleMoves, setPossibleMoves] = useState<[number, number][]>([]);
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null);
  const [turn, setTurn] = useState<Turn>("B");

  const toggleTurn = () => setTurn(turn === "B" ? "R" : "B");

  const movePiece = (move: string, position: [number, number]): boolean => {
    if (state[position[1]][position[0]][0] !== turn) return false;
    const data = movePieceMethod(gameObjects, state, pieces, turn, move, position);
    if (!data) return false;
    const { newState, newPieces } = data;
    const diff = directionToDiff(move[1] as MoveDirection);
    setState(newState);
    setPieces(newPieces);
    toggleTurn();
    setActive([
      position,
      [position[0] + diff[0], position[1] + diff[1]],
    ]);
    setPossibleMoves([]);
    if (onMove) onMove(move, position);
    return true;
  }

  return (
    <div className='relative'>
      <div className="grid grid-cols-7 w-fit">
        {gameObjects.map((row, y) => row.map((object, x) =>
          <GameSquare
            key={`${x}-${y}`}
            object={object}
            x={x}
            y={y}
            cellSize={cellSize}
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
              return movePiece(`${name}${direction}`, selectedPiece!);
            }}
          />
        ))}
      </div>
      {pieces.map(({ team, name, position: [x, y] }) =>
        <GamePiece
          key={`${team}${name}`}
          x={x}
          y={y}
          cellSize={cellSize}
          piece={team + name}
          boardSize={[(state[0].length - 1) * 64, (state.length - 1) * 64]}
          turn={turn}
          onClick={() => {
            setPossibleMoves([...getPossibleMoves(state, gameObjects, [x, y])]);
            setSelectedPiece([x, y]);
            setActive([...active, [x, y]])
          }}
          onRelease={(diff: [number, number]) => {
            const direction = diffToDirection(diff);
            if (!direction) return false;
            if (active.length === 3) setActive(active.slice(0, 1));
            else setActive([]);
            return movePiece(`${name}${direction}`, [x, y]);
          }}
        />
      )}
      {createMoveListener && createMoveListener(movePiece)}
    </div>
  )
};

export default Game;
