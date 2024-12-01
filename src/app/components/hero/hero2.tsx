import React from 'react'
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
import Image from 'next/image'
import {Nunito} from "next/font/google"
const nunito = Nunito({subsets:['latin']})
export default function Hero2() {
  return (
    <div className='max-w-[1440px] grid md:grid-cols-2 gap-28 bg-'>
        <div className='max-w[540px] max-h[270px] py-8 px-24  bg-white'>
            <h1 className={`${taviraj.className} text-[28px] text-mygray`} >Luxurious <span className='font-bold'>Eyewear</span></h1>
            <p className={`${nunito.className} w-[345px] h-[50px]text-[28px] text-myLightGray `}>
            See the beauty of exotic world with the luxurious glasses
            </p>
            <p className={`${taviraj.className} font-semibold underline underline-offset-8 mt-3 text-mygray`}>Discover Now</p>
            <Image 
            width={330} height={143} alt="w1" src={'/images/hero/hero2-1.png'}
            className="ml-56 mt-[-40px] transition-all duration-1000 ease-in-out hover:scale-95"/>
        </div>
        <div className='max-w[540px] max-h[270px] py-8 px-14  bg-white'>
            <h1 className={`${taviraj.className} text-[28px] text-mygray`} >Comfortable <span className='font-bold'>Watches</span></h1>
            <p className={`${nunito.className} w-[345px] h-[50px]text-[28px] text-myLightGray `}>
            Feels the balancing function and beauty in our wooden watches
            </p>
            <p className={`${taviraj.className} font-semibold underline underline-offset-8 mt-3 text-mygray`}>Discover Now</p>
            <Image 
            width={155} height={152} alt="w1" src={'/images/hero/hero2-2.png'}
            className="mt-[-60px] ml-96 transition-all duration-1000 ease-in-out hover:scale-105"/>
        </div>
       

    </div>
  )
}
 