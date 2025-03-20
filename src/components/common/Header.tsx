"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HEADER_LIST } from "@/utils/helper";
import { DropDownArrow, SearchIcon, ShopCartIcon } from "@/utils/icons";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      setCartLength(cart.length);
    }
  }, []);


  return (
    <div className="max-w-[1240px] mx-auto py-6 flex items-center max-xl:px-4">
      <div className="flex items-center gap-10 max-xl:justify-center max-xl:gap-8 max-lg:justify-between w-full">
        <div className="flex items-center gap-4">
          <div onClick={() => setOpen(!open)} className="lg:hidden flex flex-col w-full gap-1 pt-0.5 relative z-20">
            <span className={`w-6 h-0.5 rounded duration-300 ease-linear ${open ? "rotate-45 translate-y-2 bg-white" : "bg-black"}`}></span>
            <span className={`w-6 h-0.5 rounded duration-300 ease-linear ${open ? "translate-x-5 opacity-0 bg-white" : "bg-black"}`}></span>
            <span className={`w-6 h-0.5 rounded duration-300 ease-linear ${open ? "-rotate-45 -translate-y-1 bg-white" : "bg-black"}`}></span>
          </div>
          <Link href="/" className="font-integral-cf font-bold text-[32px] leading-[100%]">SHOP.CO</Link>
        </div>
        <div className={`flex gap-6 items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full duration-300 ease-linear max-lg:justify-center max-lg:flex-col max-lg:bg-black z-10 ${open ? "max-lg:left-0" : "max-lg:-left-full"}`}>
          {HEADER_LIST.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.link}
                className="leading-[100%] whitespace-nowrap flex gap-1 items-center"
              >
                {item.title} {item.submenu && <DropDownArrow />}
              </Link>
              {item.submenu && (
                <div className="absolute hidden group-hover:block bg-white shadow-md z-10">
                  <ul className="p-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-1 px-4 hover:bg-gray-100"
                      >
                        <Link
                          className=" whitespace-nowrap"
                          href={subItem.link}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-10 items-center max-lg:gap-6 max-md:gap-3">
          <button onClick={() => setValue(!value)} className="search-icon md:hidden"> <SearchIcon fill="fill-black"/></button>
          <div className={`w-[557px] bg-light-gray py-3 px-4 rounded-full flex gap-3 max-xl:w-[320px] max-md:flex-col max-md:fixed max-md:right-0 max-md:w-10/12  max-md:top-28 max-sm:top-[124px] max-md:mx-3 ${value ? "max-md:block" : "max-md:hidden"}`}>
            <label onClick={() => setValue(!value)} htmlFor="search-inp" className="cursor-pointer max-md:hidden"> <SearchIcon fill="fill-black/40"/></label>
            <input id="search-inp" type="text" placeholder="Search for products..." className={`placeholder:text-black placeholder:opacity-40 outline-none bg-transparent text-black opacity-40`} />
          </div>
          <div>
            <Link href={"/cart"} className="relative">
              <ShopCartIcon />
              <span className=" absolute -top-5 -right-2.5 bg-red rounded-full size-6 items-center justify-center flex text-sm text-white">{cartLength}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
