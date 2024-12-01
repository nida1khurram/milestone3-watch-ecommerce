import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link'
import {Taviraj} from "next/font/google"
import Image from 'next/image'

import AddToCartBtn from '../components/cart/addToCartBtn';
import ProductDetail from '../components/productData/productDetail';
import ProductDetail2 from '../components/productData/productDetail2';
const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
export default function Page() {
  return (
    <>


    <div className='max-w-[1440px] max-h-full relative mx-auto py-8 mb-20 grid grid-cols-2
    '>
        <div className='w-[600px] h-[548px] bg-myPink'>
 {/* img start */}
 
        
        <Image
            src="/images/cart/p1.png"
            width={70}
            height={101}
            alt="hero1"
            className="ml-40 absolute mt-8 hover:animate-ping "
          /> 
           <Image
            src="/images/cart/p2.png"
            width={70}
            height={101}
            alt="hero1"
            className="ml-40 absolute mt-40 hover:animate-ping"
          /> 
           <Image
            src="/images/cart/p3.png"
            width={70}
            height={101}
            alt="hero1"
            className="ml-40 absolute mt-72 hover:animate-ping"
          /> 
           <Image
            src="/images/cart/p4.png"
            width={70}
            height={101}
            alt="hero1"
            className="ml-40 absolute mt-96 hover:animate-ping"
          /> 
  
 <Image 
    width={325} height={467} alt="w1" src={'/images/hero/w1.png'}
    className=" absolute mt-[30px] ml-[350px] transition-all duration-1000 ease-in-out hover:scale-105"/>
        </div>
        <div className='ml-20'>
{/* text start */}
<div className=" pt-10 ">
    <h1 className={`${taviraj.className} text-[60px] text-mygray `}>WAY KAMBAS<br />MINI EBONY</h1>
    </div>
    <p className={`${taviraj.className} text-[20px] text-myLightGray relative inline-block`}>
                <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>
                Rp 1.280.000</p>
                <h3 className={`${taviraj.className} text-2xl text-mygray`}>Rp 1.024.000</h3>
               <p className={`${taviraj.className} text-mygray font-semibold mt-5`}> Choose Model</p>
               <span className='flex mt-3'>
               <Image width={55} height={55} alt="w1" src={'/images/cart/p5.png'}
                 className=" "/>
                 <Image width={55} height={55} alt="w1" src={'/images/cart/p6.png'}
                 className="ml-5 "/>
               </span>
    
{/* btn start */}
<div className="flex mt-10 ">
        <div className='flex mt-10'>
          {/* add to cart btn */}
        <AddToCartBtn />
           </div>

    <div className="flex mt-10  w-[208px] h-[62px] bg-btn hover:bg-[#b84329] text-xl text-[#fff] ml-6">
      <Link href={'/'} className="inline-flex">
    <CiShoppingCart className="w-[32px] h-[32px] mt-4 ml-4"/>
    <span className={`${taviraj.className} mt-5`}> Add to cart  </span>
    </Link> 
    </div>

    <div className="mt-10 flex ml-4 w-[140px] h-[62px] border-2 border-btn text-xl text-[#fff] ">
      <Link href={'/'} className="">
        <Image src={'/images/hero/cicil.png'} width={57} height={33} alt="cicil"
        className="mt-3 ml-10"/>
        </Link>
    </div>
    </div>
   
        </div>
    </div>

    <ProductDetail />
    <ProductDetail2 />

    </>
  )
}

// import React from 'react'
// import Link from 'next/link'
// import {Taviraj} from "next/font/google"
// import Image from 'next/image'
// import { productsData } from '../productData/productData'
// const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
// export default function Page() {
//   return (
//     <>
// {productsData.map((product) => (
//     <div key={product.id}>

//           <Image
//             className="object-cover object-center rounded mx-auto w-[300px] h-[270px] mt-11"
//             alt="hero"
//             width={500}
//             height={500}
//             src={product.image}
//           />
//             <h2 className="text-white text-2xl text-left font-bold ">
//               {product.title}
//             </h2>
//             <p
//               className="text-neutral-200 text-left 
//            mt-1"
//             >
//               {product.description} <br />
//               <Link href={product.url || "#"} target="_blank">
//                 {product.url ? "View Project" : "No URL Provided"}
//               </Link>
//             </p>
//     </div>
//   ))};
//    </>
// )};