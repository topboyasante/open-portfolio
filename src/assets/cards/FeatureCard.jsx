import React from 'react'

function FeatureCard({icon,heading,subtext}) {
  return (
    <main className='flex flex-col justify-center items-center'>
        <section className='bg-base text-white rounded-full w-[60px] h-[60px] flex justify-center items-center'>
            {icon}
        </section>
        <section className='text-center my-5'>
            <h1 className='text-2xl font-semibold'>{heading}</h1>
            <p className='text-subtext-2 w-[70%] mx-auto'>{subtext}</p>
        </section>
    </main>
  )
}

export default FeatureCard