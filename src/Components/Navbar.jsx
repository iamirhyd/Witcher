import React from 'react'
import { Dices, ShoppingCart, Bell, Book } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='bg-transparent text-white flex justify-between items-center py-2 px-6 z-50 top-2 w-full fixed '>
      <div className='flex items-center gap-6'>
        <ul className='flex cursor-pointer hover:text-cyan-200 transform-3d'>
          <Dices className='h-5' />
          <li className='text-base'>Games</li>
        </ul>
        <ul className='flex cursor-pointer hover:text-cyan-200 transform-3d'>
          <ShoppingCart className='h-5' />
          <li className='text-base'>Shop</li>
        </ul>
        <ul className='flex cursor-pointer hover:text-cyan-200 transform-3d'>
          <Book className='h-5' />
          <li className='text-base'>Wiki</li>
        </ul>
      </div>
      <div className='shrink-0'>
        <img src={`${import.meta.env.BASE_URL}./Logo.png`} alt="" className='h-15' />
      </div>
      <div>
        <div className='flex items-center gap-10'>

          <Bell />
          <ul className='flex items-center gap-4  px-8 py-2 rounded-md'>
            <a className='cursor-pointer'>Login / SignUp</a>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar