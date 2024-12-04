// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// export default function Footer1() {
//   return (
//     <div className='max-w[1440px] max-h-[273px] bg-myfooter grid  md:grid-cols-5 mx-auto pl-32 sm:pb-40 md:py-4'>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f1.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110 "/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f2.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f3.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f4.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f5.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f6.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f7.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f8.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f9.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
//         <div className=''>
//         <Link href={'/'} className="">
//         <Image src={'/images/footer/f10.png'} width={100} height={100} alt="footer"
//         className="transition-all duration-1000 ease-in-out hover:scale-110"/>
//         </Link>
//         </div>
            


//     </div>
//   )
// }







import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer1() {
  return (
    <div className="w-full md:w-[1440px] md:h-[273px] bg-myfooter grid sm:grid-cols-2 md:grid-cols-5  py-8 md:pr-52 md:pl-28">
      {[
        '/images/footer/f1.png',
        '/images/footer/f2.png',
        '/images/footer/f3.png',
        '/images/footer/f4.png',
        '/images/footer/f5.png',
        '/images/footer/f6.png',
        '/images/footer/f7.png',
        '/images/footer/f8.png',
        '/images/footer/f9.png',
        '/images/footer/f10.png',
      ].map((src, index) => (
        <div key={index} className="flex justify-center items-center">
          <Link href={'/'}>
            <Image
              src={src}
              width={100}
              height={100}
              alt={`footer-icon-${index}`}
              className="transition-all duration-500 ease-in-out hover:scale-110"
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
