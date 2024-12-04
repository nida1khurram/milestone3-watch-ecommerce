import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiHeart } from "react-icons/ci";
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Hero3() {
  return (
    <div className='my-20 mx-auto'>
        <h1 className={`${taviraj.className} mb-28 text-[36px] text-mygray ml-5 `}> <span className='underline underline-offset-8'> Monthl</span>y Deals</h1>
        <div className='grid  md:grid-cols-4 ml-10 gap-10 md:gap-3 mx-auto'>
            {/* 1 */}
            <div className='bg-white max-w-[250px]'>
            <Image 
            width={207} height={221} alt="w1" src={'/images/hero/h3-1.png'}
            className="mx-auto mt-[-40px] transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
                <div className='ml-5 mt-4 '>
                <h3  className={`${taviraj.className} text-2xl text-mygray`}>Singo Maple</h3>
                <p className={`${taviraj.className} my-2 text-myLightGray`}>20% Off</p>
                <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
                <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span> Rp 1.500.000</p>
                <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.264.000</h3>
                </div>

            </div>
            {/* 2 */}
            <div className='bg-white max-w-[250px]'>
            <Image 
            width={207} height={221} alt="w1"  src={'/images/hero/h3-2.png'}
            className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
               <div className='ml-5 mt-4 '>
                <h3  className={`${taviraj.className} text-2xl text-mygray`}>Singo Ebony</h3>
                <p className={`${taviraj.className} my-2 text-myLightGray`}>20% Off</p>
                <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
                <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span> Rp 1.500.000</p>
                <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.264.000</h3>
              {/* cart */}
              <div className="flex my-5">
              <div className="animate-pulse flex w-[39px] h-[39px] border-2 border-btn text-xl text-[#fff] ">
      <CiHeart  className="w-[24px] h-[24px] mt-2 mx-auto text-btn "/>
    </div>
    <div className="flex ml-4  w-[138px] h-[39px] bg-btn hover:bg-[#b84329] text-xl text-[#fff]">
      <Link href={'/product'} className="inline-flex">
    <span className={`${taviraj.className} ml-4 mt-2`}> Add to cart  </span>
    </Link> 
    </div>
   
    </div>
                {/* cart */}
                </div> 
            </div>
            {/* 3 */}
            <div className='bg-white max-w-[250px]'>
            <Image 
            width={207} height={221} alt="w1" src={'/images/hero/h3-3.png'}
            className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
               <div className='ml-5 mt-4 '>
                <h3  className={`${taviraj.className} text-2xl text-mygray`}>Rakai Ebony</h3>
                <p className={`${taviraj.className} my-2 text-myLightGray`}>15% Off</p>
                <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
                <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>Rp 1.280.000</p>
                <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.118.000</h3>
                </div>
            </div>
            {/* 4 */}
            <div className='bg-white max-w-[250px]'>
            <Image 
            width={207} height={221} alt="w1" src={'/images/hero/h3-4.png'}
            className="transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"/>
             <div className='ml-5 mt-4 '>
                <h3  className={`${taviraj.className} text-2xl text-mygray`}>Way Kambas Mini Maple</h3>
                <p className={`${taviraj.className} my-2 text-myLightGray`}>10% Off</p>
                <p className={`${taviraj.className} text-myLightGray relative inline-block`}>
                <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span> Rp 1.500.000</p>
                <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.024.000</h3>
                </div>
            </div>
        </div>



    </div>
  )
}
