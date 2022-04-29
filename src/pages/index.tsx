import type { NextPage } from 'next'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className='w-screen h-screen flex flex-row'>
      <Navbar />
      <div className="w-full bg-background-900">
        <p
          className="text-lg text-center text-white"
        >Discover</p>
        <h1
          className="text-3xl font-bold text-center text-primary-600"
        >Jungle Chess</h1>
      </div>
    </div>
  )
}

export default Home
