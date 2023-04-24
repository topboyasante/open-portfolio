import React from 'react'
import { Inter } from 'next/font/google'
import Homepage from '@/assets/page-components/Homepage'

const inter = Inter({ subsets: ['latin'] })

function index() {
  return (
    <>
      <main className={`${inter.className}`}>
        <Homepage/>
      </main>
    </>
  )
}

export default index