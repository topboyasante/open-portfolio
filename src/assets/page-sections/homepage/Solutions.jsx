import React from 'react'
import Illustration1 from '../../gallery/images/Illustration1.png'
import Illustration2 from '../../gallery/images/Illustration2.png'
import Illustration3 from '../../gallery/images/Illustration3.png'
import Image from 'next/image'

import { Architects_Daughter } from 'next/font/google'
const architectsDF = Architects_Daughter({ subsets: ['latin'], weight:"400" })


function Solutions() {
  return (
    <main className='max-w-[1400px] mx-auto p-5 h-full'>
        <section className='flex flex-col justify-center items-center'>

            {/* Header Text */}
            <section className='text-center'>
                <section className='bg-[#c6f6d5] rounded-2xl md:w-[70%] lg:w-[40%] mx-auto my-5 '>
                    <p className='text-[#36a269] font-bold'>Reach goals that matter</p>
                </section>
                <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>One product, unlimited solutions</h1>
                <p className='md:text-lg lg:text-xl my-5 text-subtext-1 font-light'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                <br /> 
                mollit anim id est laborum.
                </p>
            </section>


            {/* Content */}
            <section className='w-full'>
                <br />
                {/* 1 */}
                <section className="flex flex-col lg:flex-row justify-around items-center w-full">
                    <section className='text-center lg:text-left'>
                        <p className={`text-base ${architectsDF.className}`}>More speed. less spend</p>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Keep projects on schedule</h1>
                        <p className='md:text-lg lg:text-xl my-2 text-subtext-1 font-extralight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        <br />
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        <br />
                        dolore magna aliqua.
                        </p>
                    </section>
                    <section>
                        <Image src={Illustration1} alt='illustartion'/>
                    </section>
                </section>
                <br />

                {/* 2 */}
                <section className="flex flex-col lg:flex-row-reverse justify-around items-center w-full">
                    <section className='text-center lg:text-left'>
                        <p className={`text-base ${architectsDF.className}`}>More speed. less spend</p>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Keep projects on schedule</h1>
                        <p className='md:text-lg lg:text-xl my-2 text-subtext-1 font-extralight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        <br />
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        <br />
                        dolore magna aliqua.
                        </p>
                    </section>
                    <section>
                        <Image src={Illustration2} alt='illustartion'/>
                    </section>
                </section>
                <br />

                {/* 3 */}
                <section className="flex flex-col lg:flex-row justify-around items-center w-full">
                    <section className='text-center lg:text-left'>
                        <p className={`text-base ${architectsDF.className}`}>More speed. less spend</p>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Keep projects on schedule</h1>
                        <p className='md:text-lg lg:text-xl my-2 text-subtext-1 font-extralight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        <br />
                        elit, sed do eiusmod tempor incididunt ut labore et 
                        <br />
                        dolore magna aliqua.
                        </p>
                    </section>
                    <section>
                        <Image src={Illustration3} alt='illustartion'/>
                    </section>
                </section>
                <br />
            </section>
        </section>
        <hr className='my-5 border-[#33363a]'/>
    </main>
  )
}

export default Solutions