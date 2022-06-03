import type { NextPage } from 'next'
import Head from 'next/head';
import React, { FC } from 'react';
import Game from '../../components/Game';
import Navbar from '../../components/Navbar'
import * as initialState from '../../constants/startingState/default';

const CELL_SIZE = 74;

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
      <div className='w-screen  bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <div className='grid w-full h-screen place-items-center shadow-xl'>
          <Game
            showSideBar={true}
            cellSize={CELL_SIZE}
            {...initialState}
            users={[
              {
                turn: 'B',
                username: 'Blue',
                picture: 'https://lh3.googleusercontent.com/Li91lqWSznLST9xN9ZPeGUDe8I_x7iy6vZo1LQD8PsdT9n-PbGmRrc0lyQr_KyGfQSVnuCanlQnAcGgiESxXHqlwBxw',
              },
              {
                turn: 'R',
                username: 'Red',
                picture: 'https://lh3.googleusercontent.com/Yofn-MtjvR46t7YbjS49dtb2Bae8m_QSyeZKM8g3VcthP4XXOHQQ8A-2lw4OCIzjsFsB2pQcBsH42z8CaKSNhmgfPhU',
              }
            ]}
          />
        </div>
      </div>
    </>
  )
}
export default Local2P
