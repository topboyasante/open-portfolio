import React from 'react'
import  Logo from '../gallery/images/Logo.png'
import Image from 'next/image'

import {HiOutlineMenuAlt3} from 'react-icons/hi'

function Navbar() {
  return (
    <nav className='max-w-[1600px] mx-auto p-5 flex justify-between items-center'>
        <section>
            <Image src={Logo} alt='Open-Logo'/>
        </section>
        <section className='hidden md:flex items-center gap-5'>
            <section  className='px-4 py-2'>
              <span className="text-base">Sign In</span>
            </section>
            <section  className='px-4 py-2 bg-base rounded-sm'>
              <span className="text-white">Sign Up</span>
            </section>
        </section>
        <HiOutlineMenuAlt3  size={30} className='md:hidden text-base'/>
    </nav>
  )
}

export default Navbar