'use client'

import Lenis from "lenis";
import { Footer, Hero, LearnMore, NavigationBar } from "./components";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Optional: clean up
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col w-full h-full bg-[#1E1E1E]">
      <NavigationBar />
      <div className="flex flex-col px-60 py-10 gap-20">
        <Hero />
        <LearnMore />

      </div>
      <Footer />
    </div>
  );
}
