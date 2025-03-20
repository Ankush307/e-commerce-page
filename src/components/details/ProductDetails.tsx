
"use client";
import Image from "next/image";
import { FourHalfStarIcon, PlusIcon, SelectIcon, SubtractIcon } from "@/utils/icons";
import { SELECT_COLOR, SELECT_SIZE } from "@/utils/helper";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import CustomButton from "../common/CustomButton";

const ProductOverview = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        const selectedProduct = {
            id: "1",
            title: "One Life Graphic T-shirt",
            price: 260,
            image: "/assets/images/webp/tape-t-shirt.webp",
            selectedColor: SELECT_COLOR[activeIndex],
            selectedSize: SELECT_SIZE[activeButton],
            quantity,
        };
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existingCart.findIndex(item =>
            item.id === selectedProduct.id &&
            item.selectedColor === selectedProduct.selectedColor &&
            item.selectedSize === selectedProduct.selectedSize
        );

        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += quantity;
        } else {
            existingCart.push(selectedProduct);
        }
        localStorage.setItem("cart", JSON.stringify(existingCart));
        localStorage.setItem("isTrue", JSON.stringify(true));
    };

    return (
        <div className="max-w-[1240px] mx-auto container pt-[60px] md:pt-20 max-xl:px-4">
            <div className="flex gap-10 max-[1025px]:flex-col max-lg:items-stretch max-xl:items-center">
                <ProductInfo />
                <div className="max-w-[600px] w-full flex flex-col">
                    <p className="font-integral-cf font-bold text-2xl max-md:max-w-[267px] md:text-custom-4xl mb-3.5 max-sm:mb-3 leading-[100%]">One Life Graphic T-shirt</p>
                    <div className="flex gap-4">
                        <FourHalfStarIcon />
                        <p className="text-sm">4.5/<span className="text-gray">5</span></p>
                    </div>
                    <div className="flex items-center mt-3 md:mt-3.5 gap-3">
                        <p className="font-bold text-2xl leading-[100%]">$260</p>
                        <span className="w-max relative">
                            <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
                            <p className="relative text-bold-gray text-2xl font-bold"> $300</p>
                        </span>
                        <span className="py-1.5 px-[13px] bg-red/10 text-red rounded-[62px] font-xs font-medium">-40%</span>
                    </div>
                    <p className="text-black/60 mt-5 max-md:text-sm">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."</p>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <p className="text-black/60">Select Colors</p>
                    <div className="flex gap-4 mt-4">
                        {SELECT_COLOR.map((item, index) => (
                            <button key={index} className={`size-[38px] cursor-pointer flex justify-center items-center rounded-full ${item}`} onClick={() => setActiveIndex(index)}>
                                {index === activeIndex && <SelectIcon />}
                            </button>
                        ))}
                    </div>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <p className="text-black/60">Choose Size</p>
                    <div className="flex max-[390px]:gap-[9px] gap-1 md:gap-3 mt-4">
                        {SELECT_SIZE.map((item, index) => (
                            <button onClick={() => setActiveButton(index)} key={index} className={`cursor-pointer leading-[100%] max-[390px]:!text-[13px] bg-light-gray max-md:text-sm py-3 px-5 md:py-[11px] md:px-6 rounded-[62px] ${index === activeButton && "!bg-black text-white"}`}> {item}</button>
                        ))}
                    </div>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <div className="flex items-center justify-center gap-5">
                        <div className="flex items-center justify-between bg-light-gray rounded-[62px] py-3.5 md:py-[15px] px-[18px] md:px-[22px] w-full max-w-[110px] md:max-w-[170px] ">
                            <button onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)} className="cursor-pointer"><SubtractIcon /> </button>
                            <p className="font-satoshi-medium font-medium leading-[100%] ">{quantity} </p>
                            <button onClick={() => setQuantity(quantity + 1)} className="cursor-pointer"><PlusIcon /> </button>
                        </div>
                        <button onClick={handleAddToCart} className="md:py-[15px] md:px-[140.5px] py-3.5 w-full hover:text-black hover:bg-transparent border  border-transparent hover:border-black duration-300 font-satoshi-medium font-medium max-md:text-sm bg-black text-white rounded-full cursor-pointer">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;

