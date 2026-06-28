import React from 'react'

const SecondPage = () => {
  return (
    <>
      <section className='relative w-full h-screen '>
        <div className='absolute inset-0 opacity-30'>
          <img src="./SecondPage.png" alt="" className='h-screen w-full bg-black' />
        </div>
        <div className='relative z-20 flex flex-col items-center justify-center h-screen gap-4 text-center'>
          <p className='text-5xl font-thin text-[#a0ffed] max-w-5xl'>
            The Witcher 4 is a single-player, open-world RPG from CD PROJEKT RED. At the start of a new saga, players take on the role of Ciri, a professional monster slayer, and embark on a journey through a brutal dark-fantasy world. Powered by Unreal Engine 5, it aims to be the most immersive and ambitious open-world Witcher game to date.
          </p>
        </div>
      </section>
    </>
  )
}

export default SecondPage