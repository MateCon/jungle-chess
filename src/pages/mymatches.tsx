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
                
                <div className="flex flex-col box-content rounded-md shadow-sm bg-background-700 h-[600px] w-[1200px]">

  <div className="table w-full">
  
  <div className="table-header-group text-white text-2xl font-semibold bg-background-800">
    
    <div className="table-row">
      <div className="table-cell text-center">Mode</div>
      <div className="table-cell text-center">Players</div>
      <div className="table-cell text-center">Accuracy</div>
      <div className="table-cell text-center">Turns</div>
      <div className="table-cell text-center">Rating</div>
    </div>
  
  </div>
  
  <div className="table-row-group text-white xl font-normal mb-10 mt-10">
    
    <div className="table-row">
      
      <div className="table-cell text-center font-semibold border-b-4 border-background-800">Ranked</div>
      <div className="flex flex-row">
      <div className="flex flex-col border-b-4 border-background-800">
      <div className="table-cell text-center">TochuGV</div>
      <div className="table-cell text-center">MateCon</div>
      </div>
      <div className="flex flex-col border-b-4 border-background-800">
      <div className="table-cell text-center">85%</div>
      <div className="table-cell text-center">85%</div>
      </div>
      <div className="table-cell text-center border-b-4 border-background-800">46</div>
      <div className="flex flex-col border-b-4 border-background-800">
      <div className="table-cell text-center">1500</div>
      <div className="table-cell text-center">1500</div>
      </div>
      </div>
    </div>

    <div className="table-row">
      <div className="table-cell text-center font-semibold border-b-4 border-background-800">Unranked</div>
      <div className="table-cell text-center border-b-4 border-background-800">TochuGV</div>
      <div className="table-cell text-center border-b-4 border-background-800">85%</div>
      <div className="table-cell text-center border-b-4 border-background-800">46</div>
      <div className="table-cell text-center border-b-4 border-background-800">1500</div>
    </div>

    <div className="table-row">
      <div className="table-cell text-center font-semibold border-b-4 border-background-800">Friendly</div>
      <div className="table-cell text-center border-b-4 border-background-800">TochuGV</div>
      <div className="table-cell text-center border-b-4 border-background-800">85%</div>
      <div className="table-cell text-center border-b-4 border-background-800">46</div>
      <div className="table-cell text-center border-b-4 border-background-800">1500</div>
    </div>
  </div>
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