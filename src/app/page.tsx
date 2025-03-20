import DressStyle from "@/components/home/DressStyle";
import Hero from "@/components/home/Hero";
import NewArrivals from "@/components/home/NewArrivals";
import OurBrands from "@/components/home/OurBrands";
import TopSelling from "@/components/home/TopSelling";

export default function Home() {
  return (
    <>
      <Hero />
      <OurBrands />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
    </>
  );
}
