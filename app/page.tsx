import Hero from "@/components/Hero";
import HeroBorder from "@/components/HeroBorder";
import LearnMore from "@/components/LearnMore";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Hero />
      <HeroBorder />
      <LearnMore />
    </main>
  );
}
