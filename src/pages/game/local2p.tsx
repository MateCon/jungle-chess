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
        <div className="grid grid-cols-7 w-fit">
          {grid.map((row) => row.map((object) => <GameSquare object={object} />))}
          {inititialState.map((row) => row.map((piece) => 
            piece === Piece.Empty ? null : <GamePiece piece={piece} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
