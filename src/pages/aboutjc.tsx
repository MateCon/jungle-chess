import type { NextPage } from 'next'
import Link from 'next/link';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen pt-10 place-content-center flex flex-row">
             <div className="columns-1 ml-16">
             <h1
                className="text-4xl font-semibold text-center mb-10"
              >
                <span className="text-white mr-2">About</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess</span>
              </h1>
            <div className="flex flex-col justify-center items-center ml-16 box-content bg-background-700 h-[600px] w-[600px]">
            <h1
              className="text-2xl font-semibold text-center mt-10 mb-2"
              >
                <span className="text-white mr-2">What's</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h1>
            <h1
              className="text-xl font-normal text-center mb-10"
              >
                <span className="text-primary-600 font-semibold">Jungle</span>
                <span className="text-white font-semibold mr-2">Chess</span> 
                <span className="text-white mr-2">is a website based on a board game called</span>
                <span className="text-white font-semibold mr-2">"Dou Shou Qi"</span>
                <span className="text-white">which was created a long time ago in China.</span><br/>
                <span className="text-white mr-2">This game is also known as</span>
                <span className="text-white font-semibold">Animal Chess</span>
                <span className="text-white mr-2">,</span>
                <span className="text-white mr-2">but we prefer to call it as another of its name,</span>
                <span className="text-primary-600 font-semibold mr-2">Jungle</span>
                <span className="text-white font-semibold">Chess</span>
                <span className="text-white mr-2">.</span><br/>
            </h1>    
            <h1
              className="text-2xl font-semibold text-center mt-10 mb-2"
              >
                <span className="text-white mr-2">How to play</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h1>
            <h1
              className="text-xl font-normal text-center mb-10"
              >           
                <span className="text-white">There are 8 pieces for each player which have different features.</span><br/>
                <span className="text-white">The main goal is getting into the opponent's lair, 
                but you can also eat all the pieces of the another player.</span>
            </h1>
            </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }
  
  export default Home