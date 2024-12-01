import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer1() {
  return (
    <div className='max-w[1440px] max-h-[273px] bg-myfooter grid sm:grid-cols-2 md:grid-cols-5 mx-auto pl-32 py-4'>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f1.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110 "/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f2.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f3.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f4.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f5.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f6.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f7.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f8.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f9.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
        <div className=''>
        <Link href={'/'} className="">
        <Image src={'/images/footer/f10.png'} width={100} height={100} alt="footer"
        className="transition-all duration-1000 ease-in-out hover:scale-110"/>
        </Link>
        </div>
            


    </div>
  )
}
