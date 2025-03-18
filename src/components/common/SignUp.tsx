"use client";
import { CrossIcon } from "@/utils/icons";
import Link from "next/link";
import React, { useState } from "react";

const SignUp = () => {
    const [show, setShow] = useState(false);
    return (
        <div className={`bg-black pt-[9px] pb-2.5 w-full max-lg:px-4 ${show ? "hidden" : ""}`}>
            <div className="flex w-full items-center container mx-auto max-w-[1240px]">
                <div className="flex gap-1 justify-center items-center  max-w-[351px] mx-auto">
                    <p className="text-white text-sm max-md:text-xs"> Sign up and get 20% off to your first order.</p>
                    <Link href="#" className="text-white text-sm font-medium relative sign-up-link max-md:text-xs">Sign Up Now</Link>
                </div>
                <button onClick={() => setShow(!show)} className="cursor-pointer max-sm:hidden"><CrossIcon /></button>
            </div>
        </div>
    );
};

export default SignUp;
