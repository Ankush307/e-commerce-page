import type { Metadata } from "next";
import "./globals.css";
import SignUp from "@/components/common/SignUp";
import Header from "@/components/common/Header";
import AboutDate from "@/components/common/AboutDate";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Shop Co",
  description: "Generated by create next app",
  openGraph: {
    title: "Data Skate",
    description: "Read & process your files online",
    images: ["/metatag-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SignUp />
        <Header />
        {children}
        <AboutDate />
        <Footer />
      </body>
    </html>
  );
}
