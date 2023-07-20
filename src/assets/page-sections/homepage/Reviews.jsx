import ReviewCard from '@/assets/cards/ReviewCard'
import React from 'react'

import Wavy from '../../gallery/images/Fill 1.png'
import Image from 'next/image'

function Reviews() {
    const reviews=[
        {
            id:0,
            img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            review:`— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. 
            I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
            name:"Anastasia Dan",
            company:"UX Board"
        },
        {
            id:0,
            img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            review:`— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. 
            I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
            name:"Roman Level",
            company:"AppName"
        },
        {
            id:0,
            img:"https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            review:`— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. 
            I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.`,
            name:"Akex Sackett",
            company:"Reform Layouts"
        },
    ]
  return (
    <main className='max-w-[1400px] mx-auto p-5 h-full'>
        <section className='flex flex-col justify-center items-center'>

            {/* Header Text */}
            <section className='text-center'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Don't take our word for it</h1>
                <p className='md:text-lg lg:text-xl my-5 text-subtext-1 font-light'>
                Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus
                <br />
                nulla at volutpat diam ut venenatis tellus—in ornare.
                </p>
            </section>

            {/* Content */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    reviews.map((item)=>{
                        return(
                            <ReviewCard
                            key={item.id}
                            img={item.img}
                            review={item.review}
                            company={item.company}
                            name={item.name}
                            />
                        )
                    })
                }
            </section>

            <br />

            {/* Form */}
            <section className='bg-base relative overflow-hidden w-full p-5'>
                <Image src={Wavy} alt='wavy' className='absolute top-0 right-0'/>
                <section className='flex flex-col md:flex-row justify-around items-center lg:h-[200px]'>
                    <section className='lg:w-[45%]'>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Stay in the loop</h1>
                        <p  className='text-[#e2e1ff] font-extralight my-2'>Join our newsletter to get top news before anyone else.</p>
                    </section>
                    <section className='flex flex-col justify-end md:flex-row gap-1  w-full lg:w-[45%]'>
                        <form action="#">
                            <input type="email" placeholder='Your best email...' className='border border-[#ababff] text-[#ababff] bg-[#4b4acf] p-3 w-full placeholder:text-[#ababff]'/>
                        </form>
                        <section  className='px-8 py-2 bg-white flex justify-center items-center'>
                            <span className="text-base">Subscribe</span>
                        </section>
                    </section>
                </section>
            </section>

        </section>

    </main>
  )
}

export default Reviews