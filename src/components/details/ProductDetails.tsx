"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { NextMoveIcon, PlusIcon, SelectIcon, SubtractIcon } from "@/utils/icons";
import { ALSO_LIST_LIST, SELECT_COLOR, SELECT_SIZE } from "@/utils/helper";
import ProductInfo from "./ProductInfo";
import { NEW_ARRIVALS_LIST, TOP_SELLING_LIST } from "@/utils/helper";
import { usePathname } from "next/navigation";
import Link from "next/link";
// Define an interface for the cart product
interface CartProduct {
    title: string;
    price: number;
    image: string;
    selectedColor: string;
    selectedSize: string;
    quantity: number;
}

const ProductOverview = () => {
    // Define the states
    const [buttonText, setButtonText] = useState("Add to Cart");
    const [activeColor, setActiveColor] = useState(0);
    const [activeSize, setActiveSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState<CartProduct[]>([]);
    const pathname = usePathname();
    // Extract the product title from the URL
    const urlTitle = pathname.split("/").pop()?.toLowerCase().replace(/\s+/g, "-");
    const products = [...NEW_ARRIVALS_LIST, ...TOP_SELLING_LIST, ...ALSO_LIST_LIST];
    const product = products.find((item) => item.productTitle.toLowerCase().replace(/\s+/g, "-") === urlTitle);
    // get the cart from local storage
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);
    // update the button text
    useEffect(() => {
        setButtonText("Add to Cart");
    }, [activeColor, activeSize, quantity, product]);
    // handle add to cart
    const handleAddToCart = () => {
        if (!product) return;
        if (buttonText === "Go to Cart") return;
        const selectedProduct: CartProduct = {
            title: product.productTitle,
            price: product.productPrice,
            image: product.product,
            selectedColor: SELECT_COLOR[activeColor],
            selectedSize: SELECT_SIZE[activeSize],
            quantity,
        };
        // The code check if a product match with title, color, size exists in the cart
        const existingCart = [...cart];
        const existingProductIndex = existingCart.findIndex(
            (item) =>
                item.title === selectedProduct.title &&
                item.selectedColor === selectedProduct.selectedColor &&
                item.selectedSize === selectedProduct.selectedSize
        );
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += quantity;
        } else {
            existingCart.push(selectedProduct);
        }
        localStorage.setItem("cart", JSON.stringify(existingCart));
        setCart(existingCart);
        Swal.fire({
            title: "Added to Cart!",
            text: "Your item has been successfully added to the cart.",
            icon: "success",
            confirmButtonText: "OK",
            timer: 2000,
        });

        setButtonText("Go to Cart");
    };

    if (!product) {
        return <p className="text-center mt-10">Product not found!</p>;
    }

    return (
        <div className="max-w-[1240px] mx-auto container pt-5 md:pt-6 max-xl:px-4 border-t border-light-gray">
            <div className="flex items-center gap-2.5 max-w-[1240px] w-full mx-auto md:mb-[36px] mb-5">
                <Link href="/" className="text-[#00000099] text-base font-medium leading-[100%]">Home</Link>
                <NextMoveIcon pathClass="fill-black/60" />
                <p className="text-[#00000099] text-base font-medium leading-[100%]">Shop</p>
                <NextMoveIcon  pathClass="fill-black/60"/>
                <p className="text-[#00000099] text-base font-medium leading-[100%]">Men</p>
                <NextMoveIcon  pathClass="fill-black/60"/>
                <p className="text-[#000000] text-base font-medium leading-[100%]">T-Shirts</p>
            </div>
            <div className="flex gap-10 max-[1025px]:flex-col max-lg:items-stretch max-xl:items-center">
                <ProductInfo product={product} />
                <div className="max-w-[600px] w-full flex flex-col">
                    <p className="font-integral-cf font-bold text-2xl md:text-custom-4xl mb-3.5 leading-[100%]">{product.productTitle}</p>
                    <div className="flex gap-4"><span>{product.productRatingStart}</span>
                        <p className="text-sm">{product.productRating}/<span className="text-gray">5</span></p>
                    </div>
                    <div className="flex items-center mt-3 md:mt-3.5 gap-3">
                        <p className="font-bold text-2xl leading-[100%]">${product.productPrice}</p>
                        <span className="w-max relative">
                            <span className="absolute top-[56%] w-full h-[1px] bg-bold-gray"></span>
                            <p className="relative text-bold-gray text-2xl font-bold">{product.price ? `$${product.price}` : product.price}</p>
                        </span>
                        {product.discount && (
                            <span className="py-1.5 px-[13px] bg-red/10 text-red rounded-[62px] font-xs font-medium">{product.discount}%</span>
                        )}
                    </div>
                    <p className="text-black/60 mt-5 max-md:text-sm">{product.productDescription}</p>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <p className="text-black/60">Select Colors</p>
                    <div className="flex gap-4 mt-4">
                        {SELECT_COLOR.map((color, index) => (
                            <button key={index} className={`size-[38px] cursor-pointer flex justify-center items-center rounded-full ${color}`} onClick={() => setActiveColor(index)}> {index === activeColor && <SelectIcon />}</button>
                        ))}
                    </div>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <p className="text-black/60">Choose Size</p>
                    <div className="flex gap-3 mt-4">
                        {SELECT_SIZE.map((size, index) => (
                            <button key={index} className={`cursor-pointer bg-light-gray max-sm:text-xs py-3 px-5 rounded-[62px] ${index === activeSize && "!bg-black text-white"}`} onClick={() => setActiveSize(index)}> {size} </button>
                        ))}
                    </div>
                    <div className="max-w-[590px] w-full bg-black/10 h-[1px] my-6"></div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center bg-light-gray justify-between rounded-[62px] py-3.5 px-5 w-full max-w-[110px] md:max-w-[170px] ">
                            <button className="h-6" onClick={() => setQuantity(Math.max(1, quantity - 1))}><SubtractIcon /></button>
                            <p className="font-medium">{quantity}</p>
                            <button onClick={() => setQuantity(quantity + 1)}><PlusIcon /></button>
                        </div>
                        <Link href={buttonText === "Go to Cart" ? "/cart" : "#"} className="w-full">
                            <button onClick={handleAddToCart} className="py-3.5 w-full bg-black text-white rounded-full hover:bg-transparent hover:text-black duration-300 border hover:border-black"> {buttonText}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOverview;
