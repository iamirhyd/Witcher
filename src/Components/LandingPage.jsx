import React from 'react'
import PixelBlast from './PixelBlast'
const LandingPage = () => {
  return (
    <>
      <section className='relative w-full h-screen'>

        <div className='absolute inset-0 z-0' >
          <PixelBlast
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
          />
        </div>
        <div className='relative z-50 flex flex-col items-center justify-center h-full gap-4 px-4 text-center'>
          <h1 className='text-white font-bold text-3xl font-cinzel'>
            Gwen Land
          </h1>
          <h3 className=' text-white font-cinzel'>
            One choice. One destiny. One Gwen.
          </h3>

        </div>
      </section >

    </>
  )
}

export default LandingPage