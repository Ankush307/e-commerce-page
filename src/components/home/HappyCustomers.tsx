"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/helper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { GreenCheckedIcon, NextArrowIcon, PreviousArrowIcon, } from "@/utils/icons";
import Heading from "../common/Heading";

const HappyCustomers = () => {
    return (
        <div className="py-[80px] max-lg:py-[50px] max-sm:px-4">
            <div className="max-w-[1240px] mx-auto max-[1240px]:px-4 max-sm:px-0 w-full">
                <div className="w-full flex items-center justify-between pb-10 max-lg:pb-6">
                    <Heading headingClassName="!text-start" text="OUR HAPPY CUSTOMERS" />
                    <div className="flex gap-4 items-center pt-6 max-lg:pt-5 max-sm:pt-11">
                        <button className="custom-prev" ><PreviousArrowIcon /></button>
                        <button className="custom-next"><NextArrowIcon /></button>
                    </div>
                </div>
            </div>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                centeredSlides={true}
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev", }}
                autoplay={{ delay: 3000, disableOnInteraction: false, }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 10,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 2.8,
                        spaceBetween: 15,
                        centeredSlides: true,
                    },
                    1115: {
                        slidesPerView: 3.4,
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                }}
                className="mySwiper happy-swiper">
                {HAPPY_CUSTOMERS_LIST.map((item, index) => (
                    <SwiperSlide key={index} className="max-md:!justify-center max-md:!flex">
                        <div className="max-w-[400px] rounded-[20px] min-h-[240px] max-[907px]:min-h-[278px] max-[812px]:min-h-[300px] max-md:min-h-[unset] h-full w-full py-7 max-sm:p-6 border border-solid border-black/10 px-8 flex flex-col">
                            <span>{item.rating}</span>
                            <p className="font-bold text-xl max-sm:text-base flex gap-1 mt-[15px] mb-3 leading-[100%]">{item.name}
                                <span className="max-sm:size-[15.5px]"><GreenCheckedIcon /></span>
                            </p>
                            <p className="text-black/60">{item.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HappyCustomers;
