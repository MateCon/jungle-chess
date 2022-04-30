import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-fit min-h-screen bg-background-900 pt-20 md:pt-0 md:pl-20'>
        <main className="w-full min-h-screen">
          <h2
            className="text-5xl text-center text-white pt-24 pb-6"
          >Discover</h2>
          <h1
            className="text-8xl font-semibold text-center"
          >
            <span className="text-primary-600">Jungle</span>
            <span className="text-white">Chess</span>
          </h1>
          <p className="text-white text-center pt-10 text-3xl font-light">
            The best way to play<br />
            Jungle Chess online
          </p>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Home
