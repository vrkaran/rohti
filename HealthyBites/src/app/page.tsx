// import Image from "next/image";
import Herosection from "@/components/Herosection";
import FeaturedCourses from "@/components/FeaturedCourses";
import { CardStackDemo } from "@/components/CardStackDemo"; // Import CardStackDemo
import { CardHoverEffectDemo } from "@/components/CardHoverEffectDemo"
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo"
import { AnimatedTooltipPreview } from "@/components/AnimatedTooltipPreview";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.95] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <Herosection />
      <FeaturedCourses />
      <CardHoverEffectDemo/>
      <AppleCardsCarouselDemo/>
      {/* Adding the CardStackDemo Component */}
      <section className="py-10 pr-36">
        <CardStackDemo />
      </section>
      <AnimatedTooltipPreview/>      
    </main>
  );
}