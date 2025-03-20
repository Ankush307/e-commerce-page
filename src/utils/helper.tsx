import { CalvinKleinLogo, FiveStarIcon, FourHalfStarIcon, FourStarIcon, GucciLogo, PradaLogo, ThreeHalfStarIcon, ThreeStarIcon, VersaceLogo, ZaraLogo } from "./icons";

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
export interface SellItemsType {
    product: string;
    productImageTwo?: string;
    productImageThree?: string;
    productTitle: string;
    productRatingStart: any;
    productRating: number;
    productPrice: number;
    discount?: number;
    price?: number;
    productDescription: string;
}

export const NEW_ARRIVALS_LIST: SellItemsType[] = [
    {
        product: "/assets/images/webp/tape-t-shirt.webp",
        productTitle: "T-shirt with Tape Details",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 120,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/skinny-jeans.webp",
        productTitle: "Skinny Fit Jeans",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 240,
        discount: -20,
        price: 260,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/checkered-shirt.webp",
        productTitle: "Checkered Shirt",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 180,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/sleeve-t-shirt.webp",
        productTitle: "Sleeve Striped T-shirt",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 130,
        discount: -30,
        price: 160,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
];
export const TOP_SELLING_LIST: SellItemsType[] = [
    {
        product: "/assets/images/webp/vertical-striped-shirt.webp",
        productTitle: "Vertical Striped Shirt",
        productRatingStart: <FiveStarIcon />,
        productRating: 5,
        productPrice: 212,
        discount: -20,
        price: 232,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/graphic-t-shirt.webp",
        productTitle: "Courage Graphic T-shirt",
        productRatingStart: <FourStarIcon />,
        productRating: 4,
        productPrice: 145,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/loose-fit-short.webp",
        productTitle: "Loose Fit Bermuda Shorts",
        productRatingStart: <ThreeStarIcon />,
        productRating: 3,
        productPrice: 80,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/faded-skinny-jeans.webp",
        productTitle: "Faded Skinng Jeans",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 210,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
];

export const ALSO_LIST_LIST: SellItemsType[] = [
    {
        product: "/assets/images/webp/polo-with-contrast-trims.webp",
        productTitle: "Polo with Contrast Trims",
        productRatingStart: <FourStarIcon />,
        productRating: 4,
        productPrice: 212,
        discount: -20,
        price: 222,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/gradient-graphic-t-shirt.webp",
        productTitle: "Gradient Graphic T-shirt",
        productRatingStart: <ThreeHalfStarIcon />,
        productRating: 3,
        productPrice: 145,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/polo-with-tipping-details.webp",
        productTitle: "Polo with Tipping Details",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 180,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
    {
        product: "/assets/images/webp/black-striped-t-shirt.webp",
        productTitle: "Black Striped T-shirt",
        productRatingStart: <FourHalfStarIcon />,
        productRating: 4.5,
        productPrice: 120,
        discount: -30,
        price: 150,
        productDescription:
            "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    },
];


export const FOOTER_LIST = [
    {
        title: "Company",
        list: [
            { title: "About", link: "/about" },
            { title: "Features", link: "/features" },
            { title: "Works", link: "/works" },
            { title: "Career", link: "/career" },
        ],
    },
    {
        title: "Help",
        list: [
            { title: "Customer Support", link: "/customer-support" },
            { title: "Delivery-details", link: "/delivery-details" },
            { title: "Terms & Conditions", link: "/terms-conditions" },
            { title: "Privacy Policy", link: "/privacy-policy" },
        ],
    },
    {
        title: "FAQ",
        list: [
            { title: "Account", link: "/about" },
            { title: "Manage Deliveries", link: "/manage-deliveries" },
            { title: "Orders", link: "/orders" },
            { title: "Payments", link: "/payments" },
        ],
    },
    {
        title: "Resources",
        list: [
            { title: "Free eBooks", link: "/free-ebooks" },
            { title: "Development Tutorial", link: "/development-tutorial" },
            { title: "How to - Blog", link: "/how-to-blog" },
            { title: "Youtube Playlist", link: "/youtube-playlist" },
        ],
    },
];

export const PAYMENTS_COMPANY_LIST = [
    {
        image: "/assets/images/svg/visa.svg",
    },
    {
        image: "/assets/images/svg/mastercard.svg",
    },
    {
        image: "/assets/images/svg/paypal.svg",
    },
    {
        image: "/assets/images/svg/apple-pay.svg",
    },
    {
        image: "/assets/images/svg/g-pay.svg",
    },
];
export const DETAILS_TABS_LIST = ["Product Details", "Rating & Reviews", "FAQs"];

export const USER_REVIEWS_LIST = [
    {

        userName: "Samantha D.",
        description: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
        uploadDate: "Posted on August 14, 2023",
    },
    {

        userName: "Alex M.",
        description: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        uploadDate: "Posted on August 15, 2023",
    },
    {

        userName: "Ethan R.",
        description: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
        uploadDate: "Posted on August 16, 2023",
    },
    {

        userName: "Olivia P.",
        description: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
        uploadDate: "Posted on August 17, 2023",
    },
    {

        userName: "Liam K.",
        description: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
        uploadDate: "Posted on August 18, 2023",
    },
    {

        userName: "Ava H.",
        description: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        uploadDate: "Posted on August 19, 2023",
    },
];

export const DETAILS_DEFAULT_LIST = [
    {
        image: "/assets/images/png/detail-product-first.png"
    },
    {
        image: "/assets/images/png/detail-product-second.png"
    },
    {
        image: "/assets/images/png/detail-product-third.png"
    },
]

export const SELECT_COLOR = ["bg-dark-brown", "bg-dark-green", "bg-dark-blue"];

export const SELECT_SIZE = ["Small", "Medium", "Large", "X-Large"];