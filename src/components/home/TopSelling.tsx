"use client";
import {  TOP_SELLING_LIST } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from '../common/CustomButton'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopSelling = () => {
    return (
        <div className='pt-[72px] md:pb-20 pb-[50px]'>
            <div className="container mx-auto max-w-[1240px]  max-xl:pl-4">
                <h3 className='md:text-5xl sm:text-4xl text-custom-3xl font-integral-cf font-bold leading-100 pb-[55px] text-center uppercase'>top selling</h3>
                <Swiper className=' items-center justify-center gap-5'
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    breakpoints={{
                        320: { slidesPerView: 1.7, spaceBetween: 16 },
                        450: { slidesPerView: 2 },
                        700: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}>
                    {TOP_SELLING_LIST.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-[#F0EEED] rounded-[20px] overflow-hidden w-full">
                                <Link className='' href={'/'}><Image className='rounded-[20px] hover:scale-110 duration-300 w-[198px] h-[200px] sm:h-[298px] sm:w-[295px]' height={298} width={295} src={item.product} alt="nmb" /></Link>
                            </div>
                            <p className='md:text-xl font-bold font-satoshi-bold leading-100 pt-4 pb-2'>{item.title}</p>
                            <div className="flex gap-[13px] items-center pb-2">
                                <span>{item.stars}</span>
                                <p className='md:text-sm text-xs leading-100'>{item.reviews} <span className='text-black/60'>5</span> </p>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <p className='md:text-2xl text-xl font-bold font-satoshi-bold leading-100'>{item.price} </p>
                                <p className='md:text-2xl text-xl font-bold font-satoshi-bold leading-100 text-black/40'>{item.prevPrice}</p>
                                <button className={`py-1.5 px-[13.5px] sm:text-xs text-[10px] font-medium font-satoshi-medium leading-100 bg-[#FFEAEA] text-[#FF3333] rounded-full ${index === 0 ? ""  : "hidden"} `}>{item.discount}</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="w-full flex justify-center pt-9 items-center max-xl:pr-4">
                    <CustomButton buttonClass='py-[15px] px-20 max-sm:w-full hover:bg-black hover:text-white' buttonText='View All' />
                </div>
            </div>
        </div>
    )
}

export default TopSelling
