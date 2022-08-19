import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next'
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { FC, useContext, useEffect, useRef } from 'react';
import Game from '../../components/Game';
import Navbar from '../../components/Navbar'
import * as initialState from '../../constants/startingState/default';
import { socketContext } from '../_app';

// createMoveHandler example
const moveListener = (move: (move: string, position: [number, number]) => void) => {
  const socket = useContext(socketContext);
  useEffect(() => {
    socket.on("move", (moveData: [string, [number, number]]) => {
      move(...moveData);
    });
  }, []);

  return <></>
}

const Online: NextPage = () => {
  const socket = useContext(socketContext);
  const ref = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const router = useRouter();
  const { id: roomId } = router.query;

  let cellSize = 60;
  if (ref.current) cellSize = (ref.current.clientHeight - 80) / 9;

  return (
    <>
      <Head>
        <title>Jungle Chess</title>
      </Head>
      <Navbar />
      <div ref={ref} className='w-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <div className='grid w-full min-h-screen place-items-center shadow-xl pt-10'>
          <Game
            showSideBar={true}
            cellSize={cellSize}
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
            onMove={(move, moveData) => {
                socket.emit("move", { id: user?.email, name: user?.name }, roomId, [move, moveData]);
            }}
            createMoveListener={moveListener}
          />
        </div>
      </div>
    </>
  )
}

export default Online
