import Link from "next/link"
import Image from "next/image"

import { CiShoppingCart } from "react-icons/ci";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import {Taviraj} from "next/font/google"
import Hero2 from "./hero2";
import Hero3 from "./hero3";
import Hero4 from "./hero4";
import Home from "@/app/page";
import H from "./h4Pic";
import H5 from "./hero5";
import Hero5 from "./hero5";
import Hero6 from "./hero6";
import Hero7 from "./hero7";
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Hero() {
  return (
    <>
    <div className='max-w-[1440px]  max-h-full bg-myPink relative mx-auto py-8 mb-20 
    '>
      {/* vector */}
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v.png'}
    className=" absolute ml-[700px] mt-[-70px] animate-pulse"/>
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v2.png'}
    className=" absolute ml-[700px] mt-[-10px]  animate-pulse"/>
       <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v3.png'}
    className=" absolute ml-[700px] mt-[40px] animate-pulse"/>
      {/* img start */}
    <Image 
    width={325} height={467} alt="w1" src={'/images/hero/w1.png'}
    className=" absolute mt-28  transition-all duration-1000 ease-in-out hover:scale-95"/>
    {/* text start */}
    <div className="text-center pt-10">
    <h1 className={`${taviraj.className} text-[60px] text-mygray `}>WAY KAMBAS<br />MINI EBONY</h1>
    </div>
    <span className="w-[20px] ml-[500px]">_____________</span>
    <div className="w-[529px] h-[66px] ml-[500px] mt-5">
    <p className="text-left ">MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.</p>
    <p className={`${taviraj.className} font-semibold underline underline-offset-8 mt-3 text-mygray`}>Discover</p>
    </div>
{/* btn start */}
<div className="flex mt-10">
    <div className="flex mt-10  ml-[500px] w-[208px] h-[62px] bg-btn hover:bg-[#b84329] text-xl text-[#fff]">
      <Link href={'/product'} className="inline-flex">
    <CiShoppingCart className="w-[32px] h-[32px] mt-4 ml-4  "/>
    <span className={`${taviraj.className} mt-5 ml-6 `}> Add to cart  </span>
    </Link> 
    </div>
    <div className="animate-pulse mt-10 flex ml-4 w-[140px] h-[62px] border-2 border-btn text-xl text-[#fff] ">
      <Link href={'/'} className="">
        <Image src={'/images/hero/cicil.png'} width={57} height={33} alt="cicil"
        className="mt-3 ml-10 "/>
        </Link>
    </div>
    </div>
    {/* btn bottom */}
      <div className="flex absolute ml-[1000px]">
        <div className="flex  ml-[180px] w-[60px] h-[62px] border-2 border-btn text-btn">
        <AiOutlineLeft className="text-4xl mt-3 ml-2"/>
        </div>
      <div  className="flex  ml-[20px] w-[60px] h-[62px] bg-btn  text-[#fff]">
      <AiOutlineRight className="text-4xl mt-3 ml-2"/>
      </div>
      </div>

    </div>

<Hero2 />
<Hero3 />
<Hero4 />
<Hero5 />
<Hero6 />
<Hero7 />

</>
  )
} 
  