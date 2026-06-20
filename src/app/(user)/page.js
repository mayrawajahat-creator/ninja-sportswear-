'use client';

import Hero from "@/Components/Hero";
import StatsSection from "@/Components/StatsSection";
import FeaturedProducts from "@/Components/FeaturedProducts";
import WhyChooseUs from "@/Components/WhyChooseUs";
import ProcessSection from "@/Components/ProcessSection";
import BoldParallaxBanner from "@/Components/BoldParallaxBanner";
import GallerySection from "@/Components/GallerySection";
import PerformanceLookbook from "@/Components/PerformanceLookbook";
import CTABanner from "@/Components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <BoldParallaxBanner />
      <GallerySection />
      <FeaturedProducts />
      <ProcessSection />
      <WhyChooseUs />
      <PerformanceLookbook />
      <CTABanner />
    </>
  );
}
