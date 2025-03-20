"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { NUMBERING_LIST } from "@/utils/helper";
import Image from "next/image";
import CustomButton from "../common/CustomButton";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <>
      <div className="bg-off-white lg:pt-[103px] md:pt-16 pt-10 relative overflow-hidden">
        <div className="container max-lg:flex-col flex mx-auto max-w-[1240px]">
          <div className="relative max-xl:px-5 max-md:px-4 lg:pb-[80px]">
            <h1 className='lg:text-custom-6xl md:text-5xl text-4xl font-bold font-integral-cf leading-[100%] max-w-[577px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p className='text-black/60 max-w-[545px] py-8 max-sm:text-sm'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <CustomButton buttonClass="py-[13px] max-sm:w-full font-medium hover:bg-transparent hover:text-black border-black text-white bg-black px-[67.5px]" buttonText="Shop Now" />
            <div ref={ref} className="pt-12 flex gap-[52px] items-center w-full max-md:flex-wrap max-md:gap-x-[55px] gap-y-4 max-md:justify-center">
              {NUMBERING_LIST.map((item, i) => (
                <div key={i} className="flex flex-col max-lg:items-center" >
                  <p className="md:text-custom-4xl text-2xl leading-[100%] font-satoshi-bold font-bold">
                    <CountUp start={0} end={count ? [200, 2000, 30000][i] || 0 : 0} duration={3} />+
                  </p>
                  <p className="text-black/60 max-md:text-xs whitespace-nowrap">{item.description} </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center lg:items-end justify-center xl:translate-x-[50px]">
            <Image className=" max-sm:translate-x-[10px] min-w-[460px]" height={633} width={700} src='/assets/images/webp/hero-side-img.webp' alt='hero image' />
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero
