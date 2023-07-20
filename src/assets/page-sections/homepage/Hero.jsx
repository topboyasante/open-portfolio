import React from 'react'
import Video from '../../gallery/images/Video.png'
import Circles from '../../gallery/images/Combined Shape.png'
import Image from 'next/image'

function Hero() {
  return (
    <main className='max-w-[1400px] mx-auto p-5 h-full'>
        {/* Header Section */}
        <section className='flex flex-col justify-center items-center'>
            {/* Text */}
            <section className='text-center'>
                <h1 className='text-2xl md:text-3xl lg:text-6xl font-bold'>Landing template for startups</h1>
                <p className='md:text-lg lg:text-xl my-5 text-subtext-1 font-light'>Our landing page template works on all devices, 
                so you only have to 
                <br />
                set it up once, and get beautiful results forever.
                </p>
            </section>
            {/* Buttons */}
            <section className='flex flex-col md:flex-row gap-8 mb-5'>
                <section  className='px-5 py-3 bg-base text-center'>
                <span className="text-white">Start Free Trial</span>
                </section>
                <section  className='px-5 py-3 bg-[#33363a] text-subtext-2 text-center'>
                <span className="text-white">Learn More</span>
                </section>
            </section>
            {/* Video */}
            <section className='relative w-full my-8'>
                <div className='flex justify-center items-center'>
                    <Image src={Video} alt='hero-video'/>
                </div>
                {/* <Image src={Circles} alt='waves' className='absolute left-[150px] top-[100px] z-[-1]'/> */}
            </section>
        </section>
    </main>
  )
}

export default Hero