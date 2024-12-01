import React from 'react'

import Link from 'next/link'
import {Taviraj} from "next/font/google"
import H4Pic from './h4Pic'
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Hero4() {
  return (
    <div  className='my-30'>
 <h1 className={`${taviraj.className} mb-28 text-[36px] text-mygray ml-8 `}> <span className='underline underline-offset-8'> Recent</span> News</h1>
 
 <div className='flex md:flex-row'>
  {/* text */}
    <div className='ml-8 mt-20'>
      <p className={`${taviraj.className}  text-[20px] text-mygray `}>Where To Travel</p>
      <h2 className={`${taviraj.className} w-[350px] h-[96px] mt-3 text-[36px] text-mygray `}>Matoa Where To Travel? Yogyakarta</h2>
      <div className="mt-12 flex w-[160px] h-[58px] border-2 border-btn text-xl text-btn ">
      <Link href={'/'} className="mx-auto mt-3 animate-pulse">
       Discover
        </Link>
    </div>
    </div>
{/* pic */}
<H4Pic />
  
    
    </div> 
    </div>
  )
}
