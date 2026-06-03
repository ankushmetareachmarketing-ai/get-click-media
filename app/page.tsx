import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import IndustriesSection from "./components/IndustriesSection";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Cards from "./components/Cards";
import Scroll from "./components/Scroll";
import Testimonial from "./components/Testimonial";
import Featured from "./components/Featured";
import FAQ from "./components/FAQ";

const page = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturesSection />
      <IndustriesSection />
      <Cards />
      <Scroll />
      <FAQ />
      <Testimonial />
      <Featured />
    </div>
  );
};

export default page;
