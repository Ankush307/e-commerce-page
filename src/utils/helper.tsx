import { CalvinKleinLogo, FacebookIcon, FiveStarIcon, FourHalfStarIcon, FourStarIcon, GithubIcon, GreenCheckedIcon, GucciLogo, InstagramIcon, PradaLogo, ThreeHalfStarIcon, ThreeStarIcon, TwitterIcon, VersaceLogo, ZaraLogo } from "./icons";

interface HeaderListType {
    title: string;
    link: string;
    submenu?: { title: string; link: string }[];
}
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
export const HEADER_LIST: HeaderListType[] = [
    {
        title: "Shop",
        link: "#shop",
        submenu: [
            { title: "item 1", link: "#item-1" },
            { title: "item 2", link: "#item-2" },
            { title: "item 3", link: "#item-3" },
        ],
    },
    {
        title: "On Sale",
        link: "#on-sale",
    },
    {
        title: "New Arrivals",
        link: "#new-arrivals",
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
export const FOOTER_SOCAL_MEDIA_LIST = [
    {
        icon: <TwitterIcon />,
        link: "https://x.com/?lang=en",
    },
    {
        icon: <FacebookIcon />,
        link: "https://x.com/?lang=en",
    },
    {
        icon: <InstagramIcon />,
        link: "https://x.com/?lang=en",
    },
    {
        icon: <GithubIcon />,
        link: "https://x.com/?lang=en",
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
export const HAPPY_CUSTOMERS_LIST = [
    {
        rating: <FiveStarIcon />,
        name: "Sarah M.",
        icon: <GreenCheckedIcon />,
        description:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
        rating: <FiveStarIcon />,
        name: "Alex K.",
        icon: <GreenCheckedIcon />,
        description:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    },
    {
        rating: <FiveStarIcon />,
        name: "James L.",
        icon: <GreenCheckedIcon />,
        description:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
    {
        rating: <FiveStarIcon />,
        name: "Sarah M.",
        icon: <GreenCheckedIcon />,
        description:
            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
    },
    {
        rating: <FiveStarIcon />,
        name: "Alex K.",
        icon: <GreenCheckedIcon />,
        description:
            "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
    },
    {
        rating: <FiveStarIcon />,
        name: "James L.",
        icon: <GreenCheckedIcon />,
        description:
            "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
    },
];
export const DETAILS_TABS_LIST = ["Product Details", "Rating & Reviews", "FAQs"];
export const SELECT_COLOR = ["bg-dark-brown", "bg-dark-green", "bg-dark-blue"];
export const SELECT_SIZE = ["Small", "Medium", "Large", "X-Large"];