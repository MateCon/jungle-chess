import type { NextPage } from 'next'
import Link from 'next/link';
import Footer from '../components/Footer'
import Game from '../components/Game/Game'
import Navbar from '../components/Navbar'
import * as initialState from '../constants/startingState/default';

const Home: NextPage = () => {
    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen flex flex-row place-content-center pt-10 mb-10">
          <Game
              showSideBar={false}
              cellSize={74}
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
            <div className="flex flex-col justify-center items-center ml-16 box-content bg-background-700 w-[400px]">
            <button type="button" className="bg-background-300 hover:bg-background-100 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">1v1 Multiplayer</button>
            <div className="mt-16">
            <button type="button" className="bg-background-300 hover:bg-background-100 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">1v1 Bot</button>
            <div className="mt-16">
            <button type="button" className="bg-background-300 hover:bg-background-100 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">Tutorial</button>
            <div className="mt-16">
            <button type="button" className="bg-primary-600 hover:bg-primary-500 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">Play</button>
            </div>
            </div>
            </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }
  
  export default Home