import { FC, useState } from "react";
import { diffToDirection } from "../helpers/game/board";
import { getPossibleMoves, movePiece as movePieceMethod } from '../helpers/game/gameMethods';
import { GameObject, PieceData, Turn } from "../types/game";
import GamePiece from "./GamePiece";
import GameSquare from "./GameSquare";

interface Props {
  cellSize: number;
  boardState: string[][];
  startingPieces: PieceData[];
  gameObjects: GameObject[][];
}

const Game: FC<Props> = ({ cellSize, boardState, startingPieces, gameObjects }) => {
  const [state, setState] = useState(boardState);
  const [pieces, setPieces] = useState<PieceData[]>(startingPieces);
  const [active, setActive] = useState<[number, number][]>([]);
  const [possibleMoves, setPossibleMoves] = useState<[number, number][]>([]);
  const [selectedPiece, setSelectedPiece] = useState<[number, number] | null>(null);
  const [turn, setTurn] = useState<Turn>("B");

  const toggleTurn = () => setTurn(turn === "B" ? "R" : "B");

  const movePiece = (move: string, diff: [number, number], position: [number, number]): boolean => {
    const data = movePieceMethod(gameObjects, state, pieces, turn, move, position);
    if (!data) return false;
    const { newState, newPieces } = data;
    setState(newState);
    setPieces(newPieces);
    toggleTurn();
    setActive([
      position,
      [position[0] + diff[0], position[1] + diff[1]],
    ]);
    setPossibleMoves([]);
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
              return movePiece(`${name}${direction}`, diff, selectedPiece!);
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
            return movePiece(`${name}${direction}`, diff, [x, y]);
          }}
        />
      )}
    </div>
  )
}

export default Game;
