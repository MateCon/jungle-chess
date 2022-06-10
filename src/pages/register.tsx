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
            <div className="">
              <h1 className="text-4xl font-semibold text-center mb-10">
                <span className="text-primary-600">Jungle</span>
                <span className="text-white">Chess</span>
              </h1>

              <div className="flex flex-col justify-center items-center rounded-md shadow-sm mx-8 px-8 box-content bg-background-700 h-[800px] w-[400px] mb-10">
                <h2 className="text-2xl font-semibold text-center mb-10">
                  <span className="text-white">Sign up</span>
                </h2>
                
                <input type="text" placeholder="Username" className="text-center text-white bg-background-700 border-b-4 border-white" required></input><br/>
                <input type="email" placeholder="Email" className="text-center text-white bg-background-700 border-b-4 border-white" required></input><br/>
                <input type="password" placeholder="Password" className="text-center text-white bg-background-700 border-b-4 border-white" required></input><br/>
                <input type="password" placeholder="Repeat Password" className="text-center text-white bg-background-700 border-b-4 border-white" required></input><br/>
                <input type="number" placeholder="Age" className="text-center text-white bg-background-700 border-b-4 border-white" required></input><br/>

                <h2 className="text-xl font-normal text-center mb-4">
                  <span className="text-white">Skill Level?</span>
                </h2>

                <p className="pb-8">
                  <label htmlFor="hola"></label>
                  <select name="hola" id="hola">
                    <option value="basic">Basic</option>
                    <option value="basic">Advanced</option>
                    <option value="basic">Professional</option>
                  </select>
                </p>

                <button type="button" className="bg-primary-500 hover:bg-primary-400 transition text-background-900 font-bold rounded-full text-2xl h-12 w-48 mb-8">Submit</button>
                <h2 className="text-xl font-normal text-center mt-10 mb-10">
                  <span className="text-white mr-2">Already have an account?</span>
                  <Link href={"/login"}>
                  <span className="text-link-100 underline text-secondary-600 hover:text-secondary-500">Log in</span>
                  </Link>
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