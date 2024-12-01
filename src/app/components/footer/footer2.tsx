import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

import { FaYoutube } from "react-icons/fa";
import {Taviraj} from "next/font/google"
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Footer2() {
  return (
    <div className='max-w-[1440px] max-h-[700px] px-20 text-white bg-btn grid grid-cols-4 '>
        {/* <div className='mt-10 '> */}
        {/* 1 */}
        <div className='mt-10 mb-20 mx-auto'>
        <Image
              alt="logo"
              width={178}
              height={22}
              src={("/images/footer/f-logo.png")}
              className="mb-6 transition-all duration-1000 ease-in-out hover:scale-110"
            />
            <p className={`${taviraj.className} text-[20px] leading-loose`}>Address</p>
            <p className={`${taviraj.className} w-[255px] h-[110px] leading-relaxed`}>Store & Office<br/>
            Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung, Jawa Barat, Indonesia 40152</p>
            <p className={`${taviraj.className} text-[20px] leading-loose`}>Office Hour</p>
            <p className={`${taviraj.className} w-[139px] h-[54px] leading-relaxed`}>Monday - Sunday
            10.00 - 18.00</p>
        </div>
        {/* 2 */}
        <div className='mt-10 mx-auto'>
        <h2 className={`${taviraj.className} text-[24px] mb-6`} ><span className=' underline underline-offset-8 '>Get i</span>n touch</h2>
        <div className='grid grid-cols-2'>
            <div className='w-[97px]'>
                <p  className={`${taviraj.className} text-[20px] leading-relaxed`}> Phone</p>
                <p  className={`${taviraj.className} text-[20px] leading-relaxed`}> Service Center</p>
                <p  className={`${taviraj.className} text-[20px] leading-relaxed`}> Customer Service</p>
            </div>
             <div className='w-[122px]'>
             <p  className={`${taviraj.className} text-[16px] leading-loose`}> <Link href={"/"}>022-20277564</Link></p>
             <p  className={`${taviraj.className} text-[16px] leading-loose`}><Link href={"/"}>0811-233-8899</Link></p><br />
             <p  className={`${taviraj.className} text-[16px] leading-loose`}><Link href={"/"}>0811-235-9988</Link> </p>
             
                </div>
        </div>
          {/* icon */}
          <div className="flex gap-5 mt-2 ">
            <div className="w-[32px] h-[32px] flex bg-white p-1   rounded-full">
              <Link href={"/"}>
                <FaFacebookF className="text-btn  w-[27.17] h-[27.17] rounded-full gap-1 hover:animate-spin mt-1 ml-1" />
              </Link>
            </div>
            <div className="  p-1 w-[32px] h-[32px] flex bg-white  rounded-full">
              <Link
                href={"/"}
                className="text-btn w-[13.99] h-[13.99] rounded-full hover:animate-spin mt-1 ml-1"
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="  p-1 w-[32px] h-[32px] flex bg-white  rounded-full">
              <Link
                href={"/"}
                className="text-btn w-[15.49] h-[27.8] rounded-full hover:animate-spin mt-1 ml-1"
              >
               <FaTwitter />
              </Link>
            </div>
            <div className=" p-1 w-[32px] h-[32px] flex bg-white  rounded-full">
              <Link
                href={"/"}
                className="text-btn w-[17.07] h-[12.27] rounded-full hover:animate-spin mt-1 ml-1"
              >
               
                <FaYoutube />
              </Link>
            </div>
          </div>
          {/* icon end */}
                
        </div>
        {/* 3 */}
        <div className='mt-10 mx-auto'>
        <h2 className={`${taviraj.className} text-[24px] mb-6`} ><span className=' underline underline-offset-8 '>Usef</span>ul Link</h2>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}> Warranty & Complaints</p></Link>
       <Link href={"/"}> <p  className={`${taviraj.className} text-[16px] leading-loose`}>Order & Shipping</p></Link>
       <Link href={"/"}> <p  className={`${taviraj.className} text-[16px] leading-loose`}>Tracking Order</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>About Us</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Repair</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Terms</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>FAQ</p></Link>
        </div>
        {/* 4 */}
        <div className='mt-10 mx-auto'>
        <h2 className={`${taviraj.className} text-[24px] mb-6`} ><span className='underline underline-offset-8 '>Camp</span> aign</h2>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Mengenal Arti Cukup</p></Link>
       <Link href={"/"}> <p  className={`${taviraj.className} text-[16px] leading-loose`}>Tell Your Difference</p></Link>
       <Link href={"/"}> <p  className={`${taviraj.className} text-[16px] leading-loose`}>Waykambas</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Rebrand</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Gallery</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Singo</p></Link>
        <Link href={"/"}><p  className={`${taviraj.className} text-[16px] leading-loose`}>Rakai</p></Link>
        </div>
        </div>


    // </div>
  )
}
