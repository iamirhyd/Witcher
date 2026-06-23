import React from 'react'
import { Dices } from 'lucide-react'
const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-evenly items-center py-2 px-6 z-20 top-2 '>
      <div>
        <ul>
          <li>
            <Dices />
            Games
          </li>
          <li>
            shop
          </li>
        </ul>
      </div>
      <div className='shrink-0'>
        <img src="/Logo.png" alt="" className='h-15' />

      </div>
      <div>

      </div>
    </nav>
  )
}

export default Navbar