import React from 'react'

const News = () => {
  return (
    <section className='relative w-full h-sc'>


      <div className='absolute bg-black inset-0 opacity-40 blur-xs'>
        <img src="./News.jpeg" alt="" className='w-full h-screen ' />
      </div>
      <div className=' relative z-25 flex flex-col items-center justify-center h-screen gap-4 text-center text-[#a0ffed] font-thin'>
        <h4 className='text-5xl   max-w-5xl'>
          Get the news!
        </h4>
        <p className='max-w-100'>
          Keep track of every update and announcement — sign up to The Witcher newsletter and get all the latest information as soon as it's revealed.
        </p>

        <form className="flex gap-4 mt-4">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="px-4 py-2 rounded-md bg-transparent border border-[#a0ffed] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a0ffed]"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#a0ffed] text-black font-semibold rounded-md hover:bg-[#8ae6d6] transition-colors"
          >
            SUBSCRIBE
          </button>
        </form>

      </div>

    </section >
  )
}

export default News