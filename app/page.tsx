'use client'

import Lenis from "lenis";
import { Hero, NavigationBar } from "./components";

export default function Home() {
  const lenis = new Lenis({
    autoRaf: true,
  });

  function raf(time:number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <div className="flex flex-col w-full h-[300vh] bg-[#1E1E1E]">
      <NavigationBar />
      <div className="flex flex-col px-60 py-10">
        <Hero />
        
      </div>
    </div>
  );
}
