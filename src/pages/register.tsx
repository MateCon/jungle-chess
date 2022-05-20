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
                className="text-4xl font-semibold text-center"
              >
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess</span>
              </h1>
            <div className="flex flex-col justify-center items-center ml-16 box-content bg-background-700 h-[800px] w-[500px]">
            <h1
              className="text-2xl font-semibold text-center mt-10 mb-10"
              >
                <span className="text-white">Sign up</span>
            </h1>
            <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full mr-4 text-2xl h-12 w-48 mb-10">Submit</button>
            <h1
              className="text-xl font-normal text-center mt-10 mb-10"
              >
                <span className="text-white mr-2">Already have an account?</span>
                <Link href={"/login"}>
                <span className="text-link-100">Log in</span>
                </Link>
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