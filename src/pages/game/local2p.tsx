import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react';
import GamePiece from '../../components/GamePiece';
import GameSquare from '../../components/GameSquare';
import Navbar from '../../components/Navbar'
import boardState, { startingPieces } from '../../constants/boardState/default';
import grid from '../../constants/grids/default';
import { possibleMoves } from '../../helpers/gameMethods';
import { Piece } from '../../types/game';

const Home: NextPage = () => {
  const [state, setState] = useState(boardState);
  const [pieces, setPieces] = useState(startingPieces);
  const [active, setActive] = useState<[number, number][]>([]);

  return (
    <>
      <Navbar />
      <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <div className='grid w-full h-screen place-items-center shadow-xl'>
          <div className='relative'>
            <div className="grid grid-cols-7 w-fit">
              {grid.map((row, y) => row.map((object, x) =>
                <GameSquare
                  key={`${x}-${y}`}
                  object={object}
                  x={x}
                  y={y}
                  isActive={active.filter((el) => el[0] === x && el[1] === y).length > 0}
                  onClick={(isActive: boolean) => {
                    if (isActive) { }
                    else {
                      setActive([]);
                    }
                  }}
                />
              ))}
            </div>
            {pieces.map(({ color, piece, position: [x, y] }, index) =>
              <GamePiece
                key={`${color}${piece}`}
                x={x}
                y={y}
                piece={color + piece}
                onClick={() => {
                  setActive([...possibleMoves(state, grid, [x, y])]);
                }}
                onRelease={(diff: [number, number]) => {
                  const newPosition = [x + diff[0], y + diff[1]];
                  if (possibleMoves(state, grid, [x, y])
                    .filter(el => el[0] === newPosition[0] && el[1] === newPosition[1])
                    .length !== 1) return false;
                  let piecesCopy = [...pieces];
                  piecesCopy[index].position = [
                    newPosition[0],
                    newPosition[1]
                  ];
                  for (let i = 0; i < pieces.length; i++) {
                    if (i === index) continue;
                    const pos = pieces[i].position;
                    if (pos[0] === newPosition[0] && pos[1] === newPosition[1]) {
                      piecesCopy = [...piecesCopy.slice(0, i), ...piecesCopy.slice(i + 1)];
                    }
                  }
                  setPieces(piecesCopy);

                  const gridCopy = [...state.map(v => [...v])];
                  gridCopy[y + diff[1]][x + diff[0]] = gridCopy[y][x];
                  gridCopy[y][x] = Piece.Empty;
                  setState(gridCopy);

                  setActive([[x, y], [x + diff[0], y + diff[1]]]);
                  return true;
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
