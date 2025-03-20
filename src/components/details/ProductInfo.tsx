"use client";
import { NEW_ARRIVALS_LIST, TOP_SELLING_LIST } from "@/utils/helper";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
const ProductInfo = () => {
    const products = [...NEW_ARRIVALS_LIST, ...TOP_SELLING_LIST];
    const pathname = usePathname();
    const urlTitle = pathname.split("/").pop()?.toLowerCase().replace(/\s+/g, "-");

    const matchedProduct = products.find(item =>
        item.title.toLowerCase().replace(/\s+/g, "-") === urlTitle
    );

    const [selectedImage, setSelectedImage] = useState(matchedProduct?.image || products[0]?.image || "");

    return (
        <div className="flex gap-3.5 max-[1025px]:justify-center max-md:flex-col-reverse ">
            <div className="flex md:flex-col gap-3 md:gap-3.5">
                <div className="cursor-pointer rounded-[20px] overflow-hidden"
                    onClick={() => setSelectedImage(matchedProduct?.image || products[0]?.image || "")}>
                    <Image src={matchedProduct?.image || products[0]?.image || ""} width={152} height={167} alt="T-Shirt with Tape Details" className="md:w-[152px] w-[111px] rounded-[20px] h-[106px] md:h-[167px] object-cover bg-light-blue" />
                </div>
                <div className="cursor-pointer rounded-[20px] overflow-hidden"
                    onClick={() => setSelectedImage("/assets/images/webp/tape-t-shirt.webp")}>
                    <Image src="/assets/images/webp/tape-t-shirt.webp" width={152} height={167} alt="T-Shirt with Tape Details" className="md:w-[152px] w-[111px] rounded-[20px] h-[106px] md:h-[167px] object-cover bg-light-blue" />
                </div>
                <div className="cursor-pointer rounded-[20px] overflow-hidden"
                    onClick={() => setSelectedImage("/assets/images/webp/vertical-striped-shirt.webp")}>
                    <Image src="/assets/images/webp/vertical-striped-shirt.webp" width={152} height={167} alt="Vertical Striped Shirt" className="md:w-[152px] w-[111px] rounded-[20px] h-[106px] md:h-[167px] object-cover bg-light-blue" />
                </div>
            </div>
            <div className="rounded-[20px] bg-light-blue overflow-hidden">
                <Image src={selectedImage} width={444} height={530} alt="Selected Product" className="md:w-[444px] w-full h-[290px] md:h-[530px] object-cover" />
            </div>
        </div>
    );
};

export default ProductInfo;
