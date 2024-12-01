import React from 'react';
import Image from 'next/image';

const H4Pic = () => {
  return (
    <div className="relative flex ">
        
      <div className="absolute ">
      <div className='w-[640px] h-[458px]  bg-myPink mt-[-100px] ml-[300px]'>
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v.png'}
    className="ml-20 mt-[-20px]  absolute animate-pulse"/>
      <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v2.png'}
    className="ml-20 mt-[20px] absolute animate-pulse"/>
       <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v3.png'}
    className=" ml-20 mt-[50px] absolute animate-pulse"/>

<Image 
    width={736} height={264} alt="w1" src={'/images/hero/v3.png'}
    className=" ml-20 mt-[390px] absolute animate-pulse"/>
        <Image 
    width={736} height={264} alt="w1" src={'/images/hero/v.png'}
    className="ml-20 mt-[350px]  absolute animate-pulse"/>
    </div>
      </div>
      <div className="relative z-10 mt-[-30px]">
        <Image
          src="/images/hero/h4-1.png"
          width={610}
          height={484}
          alt="hero1"
          className="ml-10 transition-all duration-1000 ease-in-out hover:scale-95 hover:shadow-[0_0_8px_6px_rgb(216,71,39)]"
        />
       
      </div>
    </div>
  );
};

export default H4Pic;
