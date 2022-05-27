import type { NextPage } from 'next'
import Link from 'next/link';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen flex flex-row">
            
            <div className="columns-1 ml-12">

                <div className="flex flex-col md:flex-row place-content-center pt-10">

                <div className="flex flex-col md:flex-col">                
                
                <div className="flex flex-col box-content bg-background-700 h-[300px] w-[900px] mr-10 mb-10">
                    <h1
                    className="text-4xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">MateCon</span>
                    </h1>
                    <h1
                    className="text-xl font-normal ml-4 mt-4"
                    >
                    <span className="text-white">Here goes the status of the user...</span>
                    </h1>
                    <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold text-2xl h-12 w-48 ml-4 mt-32">Add friend</button>
                </div>

                <div className="flex flex-col box-content bg-background-700 h-[300px] w-[900px] mr-10">
                    <h1
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Statistics</span>
                    </h1>
                </div>

                </div>

                <div className="flex flex-col box-content bg-background-700 h-[640px] w-[300px]">
                    <h1
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Rank</span>
                    </h1>
                </div>
                
                </div>

                <div className="flex flex-col md:flex-row place-content-center pt-10 pb-10">

                <div className="flex flex-col md:flex-col">                
                
                <div className="flex flex-col box-content bg-background-700 h-[300px] w-[900px] mr-10 mb-10">
                    <h1
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">History</span>
                    </h1>
                </div>

                <div className="flex flex-col box-content bg-background-700 h-[300px] w-[900px] mr-10">
                </div>

                </div>

                <div className="flex flex-col box-content bg-background-700 h-[640px] w-[300px]">
                    <h1
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Friends</span>
                    </h1>
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