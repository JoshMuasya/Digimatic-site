import Contact from "@/components/Contact";
import Grow from "@/components/Grow";
import Hero from "@/components/Hero";
import HeroBorder from "@/components/HeroBorder";
import LearnMore from "@/components/LearnMore";
import OurNumbers from "@/components/OurNumbers";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <HeroBorder />
      <LearnMore />
      <OurNumbers />
      <Grow />
      <Contact />
    </main>
  );
}
