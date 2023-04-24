import FeatureCard from '@/assets/cards/FeatureCard'
import React from 'react'

import {AiOutlineStar} from 'react-icons/ai'
import {CgNotes} from 'react-icons/cg'
import {BsGlobe,BsChat} from 'react-icons/bs'
import {GiBrain} from 'react-icons/gi'
import {FiThumbsUp} from 'react-icons/fi'

function Features() {

  const features=[
    {
        id:0,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<AiOutlineStar size={30}/>
    },
    {
        id:1,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<CgNotes size={30}/>
    },
    {
        id:2,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<BsGlobe size={30}/>
    },
    {
        id:3,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<GiBrain size={30}/>
    },
    {
        id:4,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<FiThumbsUp size={30}/>
    },
    {
        id:5,
        header:"Instant Features",
        subtext:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
        icon:<BsChat size={30}/>
    },
  ]

  return (
    <main className='max-w-[1600px] mx-auto p-5 h-full'>
        <section className='flex flex-col justify-center items-center'>

            {/* Header Text */}
            <section className='text-center'>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>The majority of our customers do not 
                <br />
                understand their workflows.
                </h1>
                <p className='md:text-lg lg:text-xl my-8 text-subtext-1 font-light'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                <br /> 
                mollit anim id est laborum.
                </p>
            </section>

            {/* Grid of features */}
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    features.map((item)=>{
                        return(
                            <FeatureCard
                            key={item.id}
                            heading={item.header}
                            subtext={item.subtext}
                            icon={item.icon}
                            />
                        )
                    })
                }
            </section>
        </section>

        <hr className='my-5 border-[#33363a]'/>
    </main>
  )
}

export default Features