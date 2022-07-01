import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(user)

    return (
      <>
        <Navbar />
        <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
          <main className="w-full min-h-screen flex flex-row">
            
            <div className="columns-1 ml-12">

                <div className="flex flex-col md:flex-row place-content-center pt-10">

                <div className="flex flex-col md:flex-col">                
                
                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[305px] w-[900px] mr-10 mb-10">
                    <h2
                    className="text-4xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">{user?.name}</span>
                    </h2>
                    <h2
                    className="text-xl font-normal ml-4 mt-4"
                    >
                    <span className="text-white">Here goes the status of the user...</span>
                    </h2>
                    <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold text-2xl h-12 w-48 ml-4 mt-32">Add friend</button>
                </div>

                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[305px] w-[900px] mr-10">
                    <h2
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Statistics</span>
                    </h2>
                    <div className="flex flex-row">
                    <div className="columns-1 ml-16">
                    <h2
                    className="text-2xl font-normal ml-10 mt-10"
                    >
                    <span className="text-white font-semibold">1028</span><br/>
                    <span className="text-white">Total Games</span>
                    </h2>
                    <h2
                    className="text-2xl font-normal ml-10 mt-10"
                    >
                    <span className="text-white font-semibold">1634</span><br/>
                    <span className="text-white">Highest ELO</span>
                    </h2>
                    </div>
                    <div className="columns-1 ml-16">
                    <h2
                    className="text-2xl font-normal ml-10 mt-10"
                    >
                    <span className="text-white font-semibold">16 hours</span><br/>
                    <span className="text-white">Total Playtime</span>
                    </h2>
                    <h2
                    className="text-2xl font-normal ml-10 mt-10"
                    >
                    <span className="text-white font-semibold">7</span><br/>
                    <span className="text-white">Best Streak</span>
                    </h2>
                    </div>
                    </div>
                    
                </div>

                </div>

                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[640px] w-[300px]">
                    <h2
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Rank</span>
                    </h2>
                </div>
                
                </div>

                <div className="flex flex-col md:flex-row place-content-center pt-10 pb-10">

                <div className="flex flex-col md:flex-col">                
                
                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[305px] w-[900px] mr-10 mb-10">
                    <h2
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">History</span>
                    </h2>
                </div>

                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[305px] w-[900px] mr-10">
                </div>

                </div>

                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[640px] w-[300px]">
                    <h2
                    className="text-2xl font-semibold ml-4 mt-4"
                    >
                    <span className="text-white">Friends</span>
                    </h2>
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