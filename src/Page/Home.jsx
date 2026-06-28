import React from 'react'
import Navbar from '../Components/Navbar'
import LandingPage from '../Components/LandingPage'
import SecondPage from '../Components/SecondPage'

const Home = () => {
  return (
    <div className='bg-black '>
      <Navbar />
      <LandingPage />
      <SecondPage />
    </div>
  )
}

export default Home