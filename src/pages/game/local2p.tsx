import type { NextPage } from 'next'
import React, { FC } from 'react';
import Game from '../../components/Game';
import Navbar from '../../components/Navbar'
import boardState, { startingPieces } from '../../constants/boardState/default';
import gameObjects from '../../constants/grids/default';

const CELL_SIZE = 64;

const Local2P: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <div className='grid w-full h-screen place-items-center shadow-xl'>
          <Game
            cellSize={CELL_SIZE}
            boardState={boardState}
            startingPieces={startingPieces}
            gameObjects={gameObjects}
          />
        </div>
      </div>
    </>
  )
}
export default Local2P
