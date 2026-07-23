import React from "react";
import Hero from "./components/Hero";
import ClientMarquee from "./components/ClientMarquee";
import IndustrySolutions from "./components/IndustrySolutions";
import FeaturesSection from "./components/FeaturesSection";
import IndustriesSection from "./components/IndustriesSection";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Cards from "./components/Cards";
import Scroll from "./components/Scroll";
import Testimonial from "./components/Testimonial";
import Featured from "./components/Featured";
import BookConsultation from "./components/BookConsultation";
import FAQ from "./components/FAQ";
import BulkSmsBrandsStrip from "./components/bulk-sms/BulkSmsBrandsStrip";
import CTABanner from "./components/CTABanner";
import VideoScrollSection from "./components/VideoScrollSection";
const page = () => {
  return (
    <div>
      <Hero />
      <ClientMarquee />
      <FeaturesSection />
      <IndustrySolutions />
      <BookConsultation />
      <CTABanner />
      <FAQ />
      <Testimonial />
      <Featured />
    </div>
  );
};

export default page;
