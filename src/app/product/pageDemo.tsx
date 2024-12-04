
import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import Link from 'next/link';
import { Taviraj } from "next/font/google";
import Image from 'next/image';

import AddToCartBtn from '../components/cart/addToCartBtn';
import ProductDetail from '../components/productData/productDetail';
import ProductDetail2 from '../components/productData/productDetail2';

const taviraj = Taviraj({ subsets: ['latin'], weight: ['400', '700'] });

export default function PageDemo() {
  return (
    <>
      <div className="sm:w-[100%] md:w-[1440px] mx-auto py-8 mb-20 grid md:grid-cols-2 gap-8 px-4 md:px-0">
        {/* Left Section */}
        <div className="relative w-full h-auto md:w-[600px] md:h-[548px] bg-myPink">
          {/* Side Images */}
          <Image
            src="/images/cart/p1.png"
            width={50}
            height={75}
            alt="hero1"
            className="absolute left-10 md:left-40 top-8 hover:animate-ping"
          />
          <Image
            src="/images/cart/p2.png"
            width={50}
            height={75}
            alt="hero2"
            className="absolute left-10 md:left-40 top-28 hover:animate-ping"
          />
          <Image
            src="/images/cart/p3.png"
            width={50}
            height={75}
            alt="hero3"
            className="absolute left-10 md:left-40 top-52 hover:animate-ping"
          />
          <Image
            src="/images/cart/p4.png"
            width={50}
            height={75}
            alt="hero4"
            className="absolute left-10 md:left-40 top-80 hover:animate-ping"
          />
          {/* Main Image */}
          <Image
            src="/images/hero/w1.png"
            width={300}
            height={400}
            alt="main-product"
            className="absolute top-[30px] left-[120px] md:top-[30px] md:left-[350px] transition-all duration-1000 ease-in-out hover:scale-105"
          />
        </div>

        {/* Right Section */}
        <div className="md:ml-20 ">
          {/* Product Title */}
          <div className="pt-10">
            <h1 className={`${taviraj.className} text-[36px] md:text-[60px] text-mygray`}>
              WAY KAMBAS <br /> MINI EBONY
            </h1>
          </div>
          {/* Price Section */}
          <p
            className={`${taviraj.className} text-[16px] md:text-[20px] text-myLightGray relative inline-block`}>
            <span className="absolute inset-0 border-b-2 border-red-600 transform -translate-y-1/2"></span>
            Rp 1.280.000
          </p>
          <h3 className={`${taviraj.className} text-xl md:text-2xl text-mygray`}>Rp 1.024.000</h3>
          {/* Model Selection */}
          <p className={`${taviraj.className} text-mygray font-semibold mt-5`}>Choose Model</p>
          <div className="flex mt-3 space-x-5">
            <Image
              width={55}
              height={55}
              alt="model1"
              src={'/images/cart/p5.png'}
            />
            <Image
              width={55}
              height={55}
              alt="model2"
              src={'/images/cart/p6.png'}
            />
          </div>
          {/* Buttons */}
          <div className="flex mt-10 flex-wrap gap-4">
            {/* Add to Cart Button */}
            <AddToCartBtn />

            <div className="flex w-[208px] h-[62px] bg-btn hover:bg-[#b84329] text-xl text-white">
              <Link href={'/'} className="inline-flex items-center mx-auto">
                <CiShoppingCart className="w-[32px] h-[32px] mr-4" />
                <span className={`${taviraj.className}`}>Add to cart</span>
              </Link>
            </div>

            <div className="flex w-[140px] h-[62px] border-2 border-btn text-xl">
              <Link href={'/'} className="mx-auto">
                <Image
                  src={'/images/hero/cicil.png'}
                  width={57}
                  height={33}
                  alt="cicil"
                  className="mt-3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <ProductDetail />
      <ProductDetail2 />
    </>
  );
}
