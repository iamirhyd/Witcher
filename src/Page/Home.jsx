import React from 'react'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import SecondPage from '../Components/SecondPage'
import News from '../Components/News'

const Home = () => {
  return (
    <div className='bg-black '>
      <Navbar />
      <LandingPage />
      <SecondPage />
      <News />
    </div>
  )
}

export default Home