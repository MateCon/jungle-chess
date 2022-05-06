import type { NextPage } from 'next'
import React, { useState } from 'react';
import GamePiece from '../../components/GamePiece';
import GameSquare from '../../components/GameSquare';
import Navbar from '../../components/Navbar'
import boardState from '../../constants/boardState/default';
import grid from '../../constants/grids/default';
import { Piece } from '../../types/game';

const Home: NextPage = () => {
  const [inititialState, setInitialState] = useState(boardState);

  return (
    <>
      <Navbar />
      <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <div className='relative'>
          <div className="absolute grid grid-cols-7 w-fit">
            {grid.map((row, y) => row.map((object, x) =>
              <GameSquare key={`${x}-${y}`} object={object} />
            ))}
          </div>
          {inititialState.map((row, y) => row.map((piece, x) =>
            piece === Piece.Empty ? null : <GamePiece
              key={piece}
              x={x}
              y={y}
              piece={piece}
            />
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
