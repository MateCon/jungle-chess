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
             <div className="ml-16">
             <h1
                className="text-4xl font-semibold text-center mb-10"
              >
                <span className="text-white mr-2">About</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess</span>
              </h1>
              <div className="flex flex-col">
              <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[600px]">
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white mr-2">What's</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
            <div
              className="text-xl font-normal text-left mb-10"
              >
                <span className="text-primary-600 font-semibold">Jungle</span>
                <span className="text-white font-semibold mr-2">Chess</span> 
                <span className="text-white mr-2">is a website based on a board game called</span>
                <span className="text-white font-semibold mr-2">"Dou Shou Qi"</span>
                <span className="text-white mr-2">which was created a long time ago in China.</span>
                <span className="text-white mr-2">This game is also known as</span>
                <span className="text-white font-semibold">Animal Chess</span>
                <span className="text-white mr-2">,</span>
                <span className="text-white mr-2">but we prefer to call it as another of its names,</span>
                <span className="text-primary-600 font-semibold mr-2">Jungle</span>
                <span className="text-white font-semibold">Chess</span>
                <span className="text-white mr-2">.</span><br/>
            </div>    
            </div>
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[600px]">
            
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-2"
              >
                <span className="text-white mr-2">How to play</span>
                <span className="text-primary-600 mr-2">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white">Squares</span>
            </h2>
            <div
              className="text-xl font-normal text-center mb-10"
              >           
      
                
                <span className="text-white">There are four types of squares.</span><br/>

            <div
              className="text-xl font-normal text-left mb-10"
              >   
            
            <h2
              className="mt-4 mb-4">
                
                <span className="text-white font-semibold">Lair</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">This is the most important square because it means if the game is over. There is one for each player and their location is in 
                the middle of the first row on each side. Once a piece has entered the opponent's lair the game is over and the winner is the invader of that lair.</span><br/>

            </h2>
            <h2
              className="mt-4 mb-4">

                <span className="text-white font-semibold">Trap</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">There are three for each player and they are located on the sides of the lair. Its function is to weaken all the pieces which get into there 
                so any piece can eat it.</span><br/>
            </h2>

            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Water</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">There are two lakes in the middle of the board which serve, for some pieces as a shortcut and for others impossible to pass.</span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Land</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">This is the most common square of the game. It is the starting position of all the pieces.</span><br/>
            </h2>
            </div>




            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white">Pieces</span>
            </h2>
                <span className="text-white mr-2">There are eight pieces for each player which have different features. They are going to be listed 
                from least valuable to most ones. </span><br/>


            <div
              className="text-xl font-normal text-left mb-10"
              > 
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Rat</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">This is the weakest piece of the game. Although all others can eat it, the rat is the only one which can eat the strongest piece which is the elephant. 
                None has this particular feature. The rat can move into the water as if it were land</span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                
                <span className="text-white font-semibold">Cat</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">

                <span className="text-white font-semibold">Wolf</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Dog</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Cheetah</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">

                <span className="text-white font-semibold">Lion</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Tiger</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
            </h2>
            <h2
              className="mt-4 mb-4">
                <span className="text-white font-semibold">Elephant</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">As mentioned earlier, the elephant is the strongest piece of the game. It can eat all the pieces. However, the rat, which is
                the weakest one, can eat it. Neither the elephant moves into water nor jumps over it.</span><br/>
            </h2>      
            </div>        
        
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white">Objective</span>
            </h2>

                <span className="text-white">The main goal is getting into the opponent's lair, 
                but you can also eat all the pieces of the another player.</span>
            </div>
            </div>
            </div>
            <div className="flex flex-col">
            <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[600px]">
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white mr-2">Contact</span>
                <span className="text-white">us!</span>
            </h2>
             
            </div>
            
            
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[600px]">
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white mr-2">What's</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
             
            </div>


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
