'use client'

import Lenis from "lenis";
import { Footer, Hero, LearnMore, LoopingProject, NavigationBar, ServiceShowcase, WorkShowcase } from "./components";
import { useEffect } from "react";
import StillDevelopment from "./components/stillDevelopment";

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
      <div className="flex flex-col px-10 xl:px-30 2xl:px-60 py-10 gap-20">
        <Hero />
        <LearnMore />
        <LoopingProject />
        <WorkShowcase />
      </div>
      <div className="flex flex-col px-10 xl:px-30 2xl:px-60 py-10 gap-20 bg-white">
        <ServiceShowcase />

      </div>
      <div className="flex flex-col px-10 xl:px-30 2xl:px-60 py-10 gap-20">
      </div>
      <Footer />
      <div className="opacity-0">
        <StillDevelopment />
      </div>
    </div>
  );
}
