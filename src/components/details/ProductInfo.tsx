"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ProductInfo = ({ product }: { product: any }) => {
    const [selectedImage, setSelectedImage] = useState(
        product?.product || "/assets/images/webp/tape-t-shirt.webp");

    const smallImages = [
        product?.product,
        "/assets/images/webp/black-striped-t-shirt.webp",
        "/assets/images/webp/graphic-t-shirt.webp",
    ].filter(Boolean);
    useEffect(() => {
        localStorage.setItem("selectedImage", selectedImage);
    }, [selectedImage]);

    return (
        <div className="flex gap-3.5 max-[1025px]:justify-center max-md:flex-col-reverse">
            <div className="flex md:flex-col gap-3 md:gap-3.5">
                {smallImages.map((img, index) => (
                    <div key={index} className={`cursor-pointer rounded-[20px] overflow-hidden border ${selectedImage === img ? "border-black" : "border-transparent"}`} onClick={() => setSelectedImage(img)}>
                        <Image src={img} width={152} height={167} alt={product?.productTitle || "Product Image"} className={`md:w-[152px] w-[111px] rounded-[20px] h-[106px] md:h-[167px] object-cover bg-light-gray`} />
                    </div>
                ))}
            </div>
            <div className="rounded-[20px] bg-light-gray overflow-hidden">
                <Image src={selectedImage} width={444} height={530} alt="Selected Product" className="md:w-[444px] w-full h-[290px] md:h-[530px] object-cover rounded-[20px]" />
            </div>
        </div>
    );
};

export default ProductInfo;
