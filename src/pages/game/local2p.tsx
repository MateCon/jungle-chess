import type { NextPage } from 'next'
import Head from 'next/head';
import React, { FC } from 'react';
import Game from '../../components/Game';
import Navbar from '../../components/Navbar'
import boardState, { startingPieces } from '../../constants/boardState/default';
import gameObjects from '../../constants/grids/default';

const CELL_SIZE = 64;

// createMoveHandler example
// const createMoveHandler = (move: (move: string, position: [number, number]) => void) => {
//   return (
//     <button onClick={() => { move('LR', [0, 0]) }}>
//       Hi
//     </button>
//   )
// }

const Local2P: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jungle Chess</title>
      </Head>
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
