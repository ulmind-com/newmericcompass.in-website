import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { Pillars } from "@/components/sections/pillars";
import { GetTheApp } from "@/components/sections/get-the-app";
import { Philosophy } from "@/components/sections/philosophy";
import { FeaturedServices } from "@/components/sections/featured-services";
import { Seva } from "@/components/sections/seva";
import { FeaturedProducts } from "@/components/sections/featured-products";
import { TestimonialsPreview } from "@/components/sections/testimonials-preview";
import { FaqPreview } from "@/components/sections/faq-preview";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Videos } from "@/components/sections/videos";
import { YoutubeChannel } from "@/components/sections/youtube-channel";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Pillars />
      <GetTheApp />
      <Philosophy />
      <FeaturedServices />
      <Seva />
      <FeaturedProducts />
      <TestimonialsPreview />
      <FaqPreview />
      <CtaBanner />
      <Videos />
      <YoutubeChannel />
    </>
  );
}
