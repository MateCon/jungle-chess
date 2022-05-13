import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Game from '../components/Game/Game'
import Navbar from '../components/Navbar'
import * as initialState from '../constants/startingState/default';

const Home: NextPage = () => {
    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen pt-10 place-content-center flex flex-row">
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
             <div className="columns-1 ml-16">
            <button type="button" className="bg-primary-600 hover:bg-primary-500 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">Online</button>
            <div className="mt-10">
            <button type="button" className="bg-error-500 hover:bg-error-700 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">Offline</button>
            </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }
  
  export default Home