import React from 'react'
import Quote from '../gallery/images/quote.png'
import Image from 'next/image'

function ReviewCard({img,review,name,company}) {
  return (
    <main className='bg-[#25282c] p-5 flex flex-col'>
        <section className='relative w-[60px] h-[40%]'>
            <img src={img} alt={name} className='w-[50px] h-[50px] object-cover rounded-full absolute'/>
            <Image src={Quote} alt="quote" className='absolute z-[1] right-0'/>
        </section>
        <br />
        <br />
        <br />
        <section className='h-[100%]'>
            <section>
                <p className='font-extralight text-subtext-2 text-xl'>{review}</p>
            </section>
            <hr className='my-5 border-[#33363a]'/>
            <p>{name} <span className='font-extralight text-[#33363a]'>/</span> <span className='text-base'>{company}</span></p>
        </section>

    </main>
  )
}

export default ReviewCard