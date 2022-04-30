import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-fit min-h-screen bg-background-900 pl-20'>
        <div className="w-full">
          <p
            className="text-4xl text-center text-white"
          >Discover</p>
          <h1
            className="text-6xl font-semibold text-center"
          >
            <span className="text-primary-600">Jungle</span>{" "}
            <span className="text-white">Chess</span>
          </h1>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
