"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Header from '../common/Header'
import { NUMBERING_LIST } from "@/utils/helper";
import Image from "next/image";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <>
      <Header />
      <div className="bg-[#F2F0F1] lg:pt-[103px] md:pt-16 pt-10 relative overflow-hidden">
        <div className="container max-lg:flex-col flex mx-auto max-w-[1240px]">
          <div className="relative max-xl:px-5 max-md:px-4">
            <h1 className='lg:text-custom-6xl md:text-5xl text-4xl font-bold font-integral-cf leading-100 max-w-[577px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-black/60 max-w-[545px] py-8 max-sm:text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <div className="max-w-[358px md:max-w-[210px] max-md:mx-auto ">
              <button className='py-[15px] md:px-[65.5px] sm:px-[141px] w-full font-satoshi-medium font-medium leading-100 bg-black text-white rounded-full'>Shop Now</button>
            </div>
            <div ref={ref} className="pt-12 flex gap-[52px] items-center w-full max-md:flex-wrap max-md:gap-x-[55px] gap-y-4 max-md:justify-center">
              {NUMBERING_LIST.map((item, i) => (
                <div key={i} className="flex flex-col max-lg:items-center" >
                  <p className="md:text-[40px] text-2xl leading-100 font-satoshi-bold font-bold">
                    <CountUp start={0} end={count ? [200, 2000, 30000][i] || 0 : 0} duration={3} />+
                  </p>
                  <p className="text-black/60 max-md:text-xs whitespace-nowrap">{item.description} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center xl:translate-x-[50px]">
            <Image className=" max-sm:translate-x-[10px] min-w-[460px]" height={633} width={700} src='/assets/images/webp/hero-side-img.webp' alt='hero image' />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero
