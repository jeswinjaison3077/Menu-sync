import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <section className="bg-card"><Problem /></section>
      <section className="bg-background"><Features /></section>
      <HowItWorks />
      <section className="bg-background"><Pricing /></section>
      <FinalCTA />
    </main>
    <Footer />
  </div>
);

export default Index;
