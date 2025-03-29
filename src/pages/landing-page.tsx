import { CTA } from "@/components/landing/CTA";
import { Feature } from "@/components/landing/Feature";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Overview } from "@/components/landing/Overview";
import { Process } from "@/components/landing/Process";
import { Review } from "@/components/landing/Review";
import { ReactLenis } from "lenis/react";
export default function LandingPage() {
  return (
    <ReactLenis root>
      <div className="relative isolate overflow-hidden">
        <Header />
        <main>
          <Hero />
          <Feature />
          <Process />
          <Overview />
          <Review />
          <CTA />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
