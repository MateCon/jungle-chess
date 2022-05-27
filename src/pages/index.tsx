import type { NextPage } from 'next';
import Link from 'next/link';
import Footer from '../components/Footer';
import Game from '../components/Game/Game';
import Navbar from '../components/Navbar';
import * as initialState from '../constants/startingState/default';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen">
            <div className='flex flex-col md:flex-row justify-center items-center pt-10 pl-10'>
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
                <div>
                  <h2
                    className="text-5xl text-center text-white pt-24 pb-6 font-semibold"
                  >Discover</h2>
                  <h1
                    className="text-8xl font-semibold text-center"
                  >
                    <span className="text-primary-600">Jungle</span>
                    <span className="text-white">Chess</span>
                  </h1>
                </div>
                <p className="text-white text-center pt-10 text-3xl font-light">
                  The best way to play<br />
                  Jungle Chess online
                </p>
                <div className="text-center mt-10">
                  <Link href={"/play"}>
                    <button type="button" className="bg-primary-600 hover:bg-primary-500 transition text-background-900 font-bold rounded-sm mr-4 text-2xl h-16 w-48">Play now</button>
                  </Link>
                  <Link href="/aboutjc">
                    <button type="button" className="bg-background-900 text-primary-600 hover:text-primary-500 transition font-bold text-2xl h-16 w-48">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row place-content-center pt-20 pl-10">
              <div className="columns-1 mr-16">
                <h2
                  className="text-5xl text-center text-white pt-24 pb-6 font-bold"
                >Play</h2>
                <h1
                  className="text-8xl font-bold text-center"
                >
                  <span className="text-white mr-4">With</span>
                  <span className="text-primary-600">Friends</span>
                </h1>
                <p className="text-white text-center pt-10 text-3xl font-light">
                  Create an account and<br />
            challenge anybody
          </p>
                <div className="text-center mt-10">
                  <Link href={"/register"}>
                    <button type="button" className="bg-primary-600 hover:bg-primary-500 transition text-background-900 font-bold text-2xl h-16 w-48">Register</button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center pt-20">
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
              </div>
            </div>

            <div className="flex flex-col md:flex-row place-content-center pt-20 pl-10">
        
              <div className="hidden md:block">
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
              </div>
              <div className="columns-1 ml-16">
                <h2
                  className="text-5xl text-center text-white pt-24 pb-6 font-bold"
                >Analize</h2>
                <h1
                  className="text-8xl font-bold text-center"
                >
                  <span className="text-white mr-4">Your</span>
                  <span className="text-primary-600">Matches</span>
                </h1>
                <p className="text-white text-center pt-10 text-3xl font-light">
                  and improve your skills!
                </p>
                <div className="text-center mt-10">
                  <Link href={"/mymatches"}>
                    <button type="button" className="bg-primary-600 hover:bg-primary-500 transition text-background-900 font-bold text-2xl h-16 w-48">My Matches</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pb-8">
              <h1
                className="text-5xl text-center text-white pt-24 pb-6 font-bold"
              >And</h1>
              <h1
                className="text-5xl font-bold text-center"
              >
                <span className="text-white mr-4">Much</span>
                <span className="text-primary-600 ">More...</span>
              </h1>
            </div>
          </main>
          <Footer />
        </div>
    </>
  )
}

export default Home
