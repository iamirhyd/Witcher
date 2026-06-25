import React from 'react'
import PixelBlast from './PixelBlast'
const LandingPage = () => {
  return (



    <>
      <section className='relative w-full h-screen '>

        <div className='absolute inset-0 z-0 pointer-events-none blur-xs' >
          <img src={`${import.meta.env.BASE_URL}./background.jpg`} alt="" className='w-full h-screen ' />
          {/* <PixelBlast
            variant="triangle"
            pixelSize={4}
            color="#262626"
            patternScale={2}
            patternDensity={1.25}
            pixelSizeJitter={0.75}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.35}
            edgeFade={0.15}
            transparent
          /> */}
        </div>
        <span className='flex-1'> </span>

        <div className='relative z-20 flex flex-col items-center justify-center h-screen gap-4 text-center '>


          <div className='pb-20 p'>
            <div className=''>
              <img src={`${import.meta.env.BASE_URL}./WitcherIv.png`} className='h-40 ointer-events-none' alt="" />
            </div>
            <div>
              <h3 className='text-cyan-200 font-bold text-3xl font ointer-events-none '>
                A NEW SAGA BEGINS
              </h3>
            </div>
          </div>
          <div className=''>
            <a href="https://www.youtube.com/watch?v=54dabgZJ5YA" target='_blank'>

              <button className='text-white bg-gray-900 px-7 py-3 rounded-md cursor-pointer border border-cyan-200 hover:border-cyan-400 hover:bg-gray-950 tra'>

                Watch the Trailer
              </button>
            </a>
          </div>
        </div>






      </section >

    </>
  )
}

export default LandingPage