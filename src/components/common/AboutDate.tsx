"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Heading from './Heading'
import CustomButton from './CustomButton'
import { MailIcon } from '@/utils/icons'

const AboutDate = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm(
                    "service_225sbpv",
                    "template_mfgmjof",
                    form.current,
                    "yMfLmnJOVdFosmZqu"
                )
                .then(
                    () => {
                        console.log("send mail");
                    },
                    (error) => {
                        console.log("Failed to send email. Please try again.");
                        console.error("FAILED...", error.text);
                    }
                );
        }
    };
    return (
        <div className='about-bg'>
            <div className="container mx-auto max-w-[1240px] py-9 px-16 bg-black rounded-[20px] flex items-center justify-between">
                <Heading headingClassName='text-white text-start !text-[40px] max-w-[591px] leading-112' text='STAY UPTO DATE ABOUT OUR LATEST OFFERS' />
                <div className="flex flex-col gap-3.5">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="w-[349px] bg-white py-3 px-4 rounded-full flex items-center gap-3 max-xl:w-[320px] ">
                            <label htmlFor="mail" className="cursor-pointer max-md:hidden"><MailIcon /> </label>
                            <input id="mail" type="email" placeholder="Enter your email address" className="placeholder:text-black/40 outline-none text-black/40 w-full" />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AboutDate
