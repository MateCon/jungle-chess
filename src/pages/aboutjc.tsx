import type { NextPage } from 'next'
import Link from 'next/link';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from "next/image"

const Home: NextPage = () => {
    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen pt-10 place-content-center flex flex-row">
             <div className="ml-16">
              <h1 className="text-4xl font-semibold text-center mb-10">
                <span className="text-white mr-2">About</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess</span>
              </h1>


              <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">
              <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
                <span className="text-white">Index</span>
              </h2>
              <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-xl h-12 w-64">¿What&apos;s Jungle Chess?</button>
              <div className="mt-10"></div>
              <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-xl h-12 w-64">Rules</button>
              <div className="mt-10"></div>
              <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-xl h-12 w-64">Terms and conditions</button>
              <div className="mt-10"></div>
              <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-xl h-12 w-64">About us</button>
              <div className="mt-10"></div>
              <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-xl h-12 w-64">¡Contact us!</button>
              </div>



              
  

            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">
            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white mr-2">What&apos;s</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
            <div
              className="text-xl font-normal text-left mb-10"
              >
                <span className="text-primary-600 font-semibold">Jungle</span>
                <span className="text-white font-semibold mr-2">Chess</span> 
                <span className="text-white mr-2">is a website based on a board game called</span>
                <span className="text-white font-semibold mr-2">&quot;Dou Shou Qi&quot;</span>
                <span className="text-white mr-2">which was created a long time ago in China.</span>
                <span className="text-white mr-2">This game is also known as</span>
                <span className="text-white font-semibold">Animal Chess</span>
                <span className="text-white mr-2">,</span>
                <span className="text-white mr-2">but we prefer to call it as another of its names,</span>
                <span className="text-primary-600 font-semibold mr-2">Jungle</span>
                <span className="text-white font-semibold">Chess</span>
                <span className="text-white mr-2">.</span><br/>
            </div>    




            <h2
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white">Quienes somos?</span>
            </h2>
            <div
              className="text-xl font-normal text-left mb-10"
              >
                <span className="text-primary-600 font-semibold">Jungle</span>
                <span className="text-white font-semibold mr-2">Chess</span> 
                <span className="text-white">es un sitio web creado por un grupo de estudiantes de la secundaria ORT Almagro en Buenos Aires, Argentina. Hasta el día de la fecha, año 2022,
                somos alumnos de 5to año de la orientación Informática. Como materia de este último año antes de la graduación, se nos propuso crear un proyecto el cual englobe todo lo visto
                hasta ese momento en las distintas materias de los años anteriores incluyendo cosas nuevas si lo requería para llevarlo a cabo. Por nuestra parte, se nos ocurrió la fantastica
                idea de crear este sitio web. ¿¿¿¿fotos nuestras con nuestros roles y linkedin????</span> 
          
            </div>    




            </div>

            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">
            
            <h2 className="text-2xl font-semibold text-center mt-10 mb-2">
                <span className="text-white mr-2">How to play</span>
                <span className="text-primary-600 mr-2">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
            <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
                <span className="text-white">Squares</span>
            </h2>
            <div className="text-xl font-normal text-center mb-10">           
                <span className="text-white">There are four types of squares.</span><br/>
            <div className="text-xl font-normal text-left mb-10">   
            
            <h2
              className="mt-4 mb-4">
                
                <span className="text-white font-semibold">Lair</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">This is the most important square because it means if the game is over. There is one for each player and their location is in 
                the middle of the first row on each side. Once a piece has entered the opponent&apos;s lair the game is over and the winner is the invader of that lair.</span><br/>

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



            <div className="text-xl font-normal text-left mb-10"> 
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BR.png" width={100} height={100} alt="Rat" />
                <span className="text-white font-semibold">Rat</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">This is the weakest piece of the game. In spite of being eaten by everyone, the rat is the only one which can eat the strongest piece, the elephant. 
                None has this particular feature. The rat can move into the water as if it were land, but it can&apos;t be used to eat the another rat or elephant. It is mandatory for it to be on 
                land.</span><br/>
                </div>
            </h2>
            <h2 className="mt-4 mb-4">
              <div className="flex flex-row">
              <Image src="/static/assets/pieces/BC.png" width={100} height={100} alt="Cat" />
                <span className="text-white font-semibold ml-2">Cat</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">Unlike the first animal mentioned, the cat can&apos;t move into the water.</span><br/>
                </div>
            </h2>
             
            </div>        
        
            </div>
            </div>
            
            
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">

            <div className="text-xl font-normal text-left mb-10"> 
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BD.png" width={100} height={100} alt="Dog" />
                <span className="text-white font-semibold">Dog</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
                </div>
            </h2>
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BW.png" width={100} height={100} alt="Wolf" />
                <span className="text-white font-semibold">Wolf</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
                </div>
            </h2>
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BH.png" width={100} height={100} alt="Cheetah" />
                <span className="text-white font-semibold">Cheetah</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white"></span><br/>
                </div>
            </h2>
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BT.png" width={100} height={100} alt="Tiger" />
                <span className="text-white font-semibold">Tiger</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">Unlike all the pieces which were named, the tiger has the ability to jump across both lakes. Using this mechanic, not only is it useful to shorten
                distances, but also it is capable of eating opponent&apos;s pieces while being far from them.</span><br/>
            </div>
            </h2>
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BL.png" width={100} height={100} alt="Lion" />
                <span className="text-white font-semibold">Lion</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">The lion, as well as the tiger, is able to jump across the water, they are practically the same. Nonetheless, this animal is stronger than the
                tiger.</span><br/>
                </div>
            </h2>
            <h2 className="mt-4 mb-4">
            <div className="flex flex-row">
            <Image src="/static/assets/pieces/BE.png" width={100} height={100} alt="Elephant" />
                <span className="text-white font-semibold">Elephant</span>
                <span className="text-white mr-2">:</span>
                <span className="text-white">As mentioned earlier, the elephant is the strongest piece of the game which means that this animal is capable of eating all the pieces. However, 
                it is edible for the rat which is the weakest one. Legend says that the rat gets into the elephant&apos;s ears and, once there, it completely damages its brain. This is due to the
                size difference of both animals. It is widely known that the rat is much smaller than the elephant. Neither the elephant moves into water nor jumps over it.</span><br/>
            </div>
            </h2>   


            <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
                <span className="text-white">Objective</span>
            </h2>
                <span className="text-white">The main goal is getting into the opponent&apos;s lair, 
                but you can also eat all the pieces of the another player.</span>
              </div>
              </div>



            
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">
            <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
                <span className="text-white mr-2">Contact</span>
                <span className="text-white">us!</span>
            </h2>
            <div
              className="text-xl font-normal text-left mb-10"
              >
                <span className="text-white">We are open to receiving any suggestions or comments about what we have created in order to make improvements whenever we have enough availability. 
                There are many ways to get in touch with us. Here below we left you all of them. </span><br/>
                <span className="text-white">aca abajo se supone que va el logo de discord, el de gmail y el de twitter</span> 
          
            </div>   
             
            </div>
            
            
            <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 mt-10 mb-10 box-content bg-background-700 h-[1200px] w-[800px]">
            <h2 className="text-2xl font-semibold text-center mt-10 mb-10">
                <span className="text-white mr-2">What&apos;s</span>
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess?</span>
            </h2>
            </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    )
  }
  
  export default Home
