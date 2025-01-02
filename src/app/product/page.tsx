// import React from 'react'
// import { CiShoppingCart } from "react-icons/ci";
// import Link from 'next/link'
// import {Taviraj} from "next/font/google"
// import Image from 'next/image'

// import Hero from "@/components/hero/hero";
// import Hero3 from "@/components/hero/hero3/hero3";

// import AddToCartBtn from '@/components/cart/addToCartBtn';
// import ProductDetail from '@/components/productData/productDetail';
// import ProductDetail2 from '@/components/productData/productDetail2';
// const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
// export default function Page() {
//   return (
//     <>


//     <div className='w-full md:w-[1440px] h-full relative mx-auto py-3 md:py-8 mb-20 grid md:grid-cols-2
//     '>
//         <div className='w-full h-[460px] md:w-[600px] md:h-[548px] bg-myPink'>
//  {/* img start */}
//           <Image
//             src="/images/cart/p1.png"
//             width={70}
//             height={101}
//             alt="hero1"
//             className="ml-3 md:ml-40 absolute mt-8 hover:animate-ping "
//           /> 
//            <Image
//             src="/images/cart/p2.png"
//             width={70}
//             height={101}
//             alt="hero1"
//             className="ml-3 md:ml-40 absolute mt-40 hover:animate-ping"
//           /> 
//            <Image
//             src="/images/cart/p3.png"
//             width={70}
//             height={101}
//             alt="hero1"
//             className="ml-3 md:ml-40 absolute mt-72 hover:animate-ping"
//           /> 
//            <Image
//             src="/images/cart/p4.png"
//             width={70}
//             height={101}
//             alt="hero1"
//             className="ml-3 md:ml-40 absolute mt-96 hover:animate-ping"
//           /> 
  
//  <Image 
//     width={325} height={467} alt="w1" src={'/images/hero/w1.png'}
//     className="w-[220px] h-[300px] md:w-[325px] md:h-[467px] absolute mt-24 md:mt-[30px] ml-24 md:ml-[350px] transition-all duration-1000 ease-in-out hover:scale-105"/>
//         </div>


//  {/* Right Section */}
//    <div className="ml-4 md:ml-20 ">
//           {/* Product Title */}
//           <div className="pt-10">
//             <h1 className={`${taviraj.className} text-[36px] md:text-[60px] text-mygray`}>
//               WAY KAMBAS <br /> MINI EBONY
//             </h1>
//           </div>
//           {/* Price Section */}
//           <p
//             className={`${taviraj.className} text-[16px] md:text-[20px] text-myLightGray relative inline-block`}>
//             <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>
//             Rp 1.280.000
//           </p>
//           <h3 className={`${taviraj.className} text-xl md:text-2xl text-mygray`}>Rp 1.024.000</h3>
//           {/* Model Selection */}
//           <p className={`${taviraj.className} text-mygray font-semibold mt-5`}>Choose Model</p>
//           <div className="flex mt-3 space-x-5">
//             <Image
//               width={55}
//               height={55}
//               alt="model1"
//               src={'/images/cart/p5.png'}
//             />
//             <Image
//               width={55}
//               height={55}
//               alt="model2"
//               src={'/images/cart/p6.png'}
//             />
//           </div>
//           {/* Buttons */}
//           <div className="flex mt-10 flex-wrap gap-4">
//             {/* Add to Cart Button */}
//             <AddToCartBtn />

//             <div className="flex md:w-[208px] md:h-[62px] bg-btn hover:bg-[#b84329] text-xl text-white">
//               <Link href={'/'} className="inline-flex items-center mx-auto">
//                 <CiShoppingCart className="w-[32px] h-[32px] " />
//                 <span className={`${taviraj.className} mr-2 md:mr-0`}>Add to cart</span>
//               </Link>
//             </div>

//             <div className="flex w-[140px] h-[62px] border-2 border-btn text-xl">
//               <Link href={'/'} className="mx-auto">
//                 <Image
//                   src={'/images/hero/cicil.png'}
//                   width={57}
//                   height={33}
//                   alt="cicil"
//                   className="mt-3"
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//     </div>

//     <ProductDetail />
//     <ProductDetail2 />

//     </>
//   )
// }
// "use client"
// import React from 'react'

// import Hero3 from "@/components/hero/hero3/hero3";
// export default function ProductPage() {
//   return (
//     <div>
// <Hero3 />
      
//     </div>
//   )
// }

"use client"
    import React from 'react'
    import Image from 'next/image'
    import Link from 'next/link'
    import { CiHeart } from "react-icons/ci";
    import {Taviraj} from "next/font/google"
    import { products } from '../../components/hero/hero3/data';
    const taviraj = Taviraj({subsets:['latin'],weight: ['400', '700'],})
    export default function ProductPage() {
      return (
<>
<div className='my-20 mx-auto'>
        <h1 className={`${taviraj.className} mb-28 text-[36px] text-mygray ml-5 `}> <span className='underline underline-offset-8'> Monthl</span>y Deals</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    {products.map((product) => (
      <div key={product.id} className="bg-white max-w-[250px]">
        <Link href={`/product/${product.id}`}>
          <Image
            width={207}
            height={221}
            alt={product.title}
            src={product.image}
            className="mx-auto mt-[-40px] transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(50,90,30)]"
          />
        </Link>
        <div className="ml-5 mt-4">
          <h3 className={`${taviraj.className} text-2xl text-mygray`}>
            {product.title}
          </h3>
          <p className={`${taviraj.className} my-2 text-myLightGray`}>
            {product.discount}
          </p>
          <p
            className={`${taviraj.className} text-myLightGray relative inline-block`}
          >
            <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>{" "}
            Rp  {product.oldprice}
          </p>
          <h3 className={`${taviraj.className} text-2xl text-mygray`}>
            Rp {product.price}
          </h3>
        </div>
      </div>
    ))}
  </div>
  </div>
  </>
  )
}
