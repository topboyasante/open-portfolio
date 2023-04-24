import React from 'react'
import Navbar from '../nav-components/Navbar'
import Waves from '../gallery/images/Shape.png'
import Image from 'next/image'
import Hero from '../page-sections/homepage/Hero'
import Features from '../page-sections/homepage/Features'
import Solutions from '../page-sections/homepage/Solutions'
import Reviews from '../page-sections/homepage/Reviews'
import Footer from '../nav-components/Footer'

function Homepage() {
  return (
    <main className='relative w-screen h-full overflow-hidden'>
        <Image src={Waves} alt='waves' className='absolute right-0 top-0 z-[-1]'/>
        <Navbar/>
        <Hero/>
        <Features/>
        <Solutions/>
        <Reviews/>
        <Footer/>
    </main>
  )
}

export default Homepage