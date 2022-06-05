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
                <h1
                className="text-4xl font-semibold mb-10"
                >
                <span className="text-white">My Matches</span>
                </h1>               
                
                <div className="container">
                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[600px] w-[1200px] mr-10 mb-10">
                <table className="table-auto">
                <thead className="text-white text-2xl font-semibold bg-background-800">
                <tr>
                <th></th>
                <th>Players</th>
                <th>Accuracy</th>
                <th>Turns</th>
                <th>Rating</th>
                </tr>
                </thead>
                <tbody className="text-white xl font-normal">
                <tr className="border-b-4 border-background-800">
                <td className="font-semibold">Ranked</td>
                <div className="flex flex-row">
                <div className="flex flex-col">
                <td>TochuGV</td>
                <td>MateCon</td>
                </div>
                <div className="flex flex-col">
                <td>89.5%</td>
                <td>90.6%</td>
                </div>
                <td>46</td>
                <div className="flex flex-col">
                <td>1380</td>
                <td>1501</td>
                </div>
                </div>
                </tr>
                <tr className="border-b-4 border-background-800">
                <td className="font-semibold">Unranked</td>
                <td>MateCon</td>
                <td>90%</td>
                <td>52</td>
                <td>1414</td>
                </tr>
                <tr className="border-b-4 border-background-800">
                <td className="font-semibold">Friendly</td>
                <td>Faustito</td>
                <td>84.5%</td>
                <td>46</td>
                <td>1389</td>
                </tr>
                </tbody>
                </table>
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