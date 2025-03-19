import { title } from "process";
import { CalvinKleinLogo, FourHalfStars, GucciLogo, PradaLogo, VersaceLogo, ZaraLogo } from "./icons";

export const HEADER_LIST = [
    {
        title: "Shop",
        link: "#shop",
    },
    {
        title: "On Sale",
        link: "#sale",
    },
    {
        title: "New Arrivals",
        link: "#arrivals",
    },
    {
        title: "Brands",
        link: "#brands",
    },
];
export const NUMBERING_LIST = [
    {
        description: "International Brands",
    },
    {
        description: "High-Quality Products",
    },
    {
        description: "Happy Customers",
    }
];
export const BRAND_LIST = [
    <VersaceLogo logoClassName="max-sm:w-[116px]" />,
    <ZaraLogo logoClassName="max-sm:w-[64px]" />,
    <GucciLogo logoClassName="max-sm:w-[109px]" />,
    <PradaLogo logoClassName="max-sm:w-[127px]" />,
    <CalvinKleinLogo logoClassName="max-sm:w-[134px]" />,
];
export const NEW_ARRIVALS_LIST = [
    {
        product: "/assets/images/webp/tape-t-shirt.webp",
        title: "T-SHIRT WITH TAPE DETAILS",
        stars: <FourHalfStars />,
        reviews: "4.5/",
        price: "$120"
    },
    {
        product: "/assets/images/webp/skinny-jeans.webp",
        title: "SKINNY FIT JEANS",
        stars: <FourHalfStars />,
        reviews: "3.5/",
        price: "$240",
        prevPrice: "$260",
        discount: "-20%"
    },
    {
        product: "/assets/images/webp/checkered-shirt.webp",
        title: "CHECKERED SHIRT",
        stars: <FourHalfStars />,
        reviews: "4.5/",
        price: "$180"
    },
    {
        product: "/assets/images/webp/sleeve-t-shirt.webp",
        title: "SLEEVE STRIPED T-SHIRT",
        stars: <FourHalfStars />,
        reviews: "4.5/",
        price: "$130",
        prevPrice: "$160",
        discount: "-30%"
    }
];
export const TOP_SELLING_LIST = [
    { 
        product: "/assets/images/webp/vertical-striped-shirt.webp",
        title: "VERTICAL STRIPED SHIRT",
        stars: <FourHalfStars />,
        reviews: "4.0/",
        price: "$212",
        prevPrice: "$232",
        discount: "-20%"
    },
    {
        product: "/assets/images/webp/graphic-t-shirt.webp",
        title: "COURAGE GRAPHIC T-SHIRT",
        stars: <FourHalfStars />,
        reviews: "4.0/",
        price: "$145"
    },
    {
        product: "/assets/images/webp/loose-fit-short.webp",
        title: "LOOSE FIT BERMUDA SHORTS",
        stars: <FourHalfStars />,
        reviews: "3.0/",
        price: "$80"
    },
    {
        product: "/assets/images/webp/faded-skinny-jeans.webp",
        title: "FADED SKINNY JEANS",
        stars: <FourHalfStars />,
        reviews: "4.5/",
        price: "$210"
    }
];