'use client';

import { motion, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface InfiniteLogoProps {
    logos: React.ReactNode[];
    speed?: number; // pixels per second
}

export default function InfiniteLogo({ logos }: InfiniteLogoProps) {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const totalWidth = useRef(0);

    // Move frame-by-frame
    useAnimationFrame((t, delta) => {
        const moveBy = (delta / 1000) * 100; 
        const currentX = x.get();
        const nextX = currentX - moveBy;

        // Reset once we pass the first full set
        if (Math.abs(nextX) >= totalWidth.current) {
            x.set(0);
        } else {
            x.set(nextX);
        }
    });

    // Measure the width of one full loop (not total!)
    useEffect(() => {
        const measure = () => {
            if (!containerRef.current) return;
            const children = containerRef.current.children;
            const firstLoopCount = children.length / 3;

            let total = 0;
            for (let i = 0; i < firstLoopCount; i++) {
                const el = children[i] as HTMLElement;
                total += el.offsetWidth;
            }

            totalWidth.current = total;
        };

        const timeout = setTimeout(measure, 50);
        return () => clearTimeout(timeout);
    }, [logos]);

    return (
        <div className="relative flex w-full min-h-[120px] h-full overflow-x-hidden items-center justify-center">
            {/* Gradient edges */}
            <div className="pointer-events-none absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r from-[#1E1E1E] to-transparent" />
            <div className="pointer-events-none absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l from-[#1E1E1E] to-transparent" />

            <motion.div
                ref={containerRef}
                style={{ x }}
                className="flex h-full w-full items-center"
            >
                {/* Tripling logos prevents seam from showing */}
                {[...logos, ...logos, ...logos].map((logo, i) => (
                    <motion.div 
                        key={i} 
                        className="px-6 flex-shrink-0 "
                        whileHover={{
                            scale: 1.1
                        }}
                    >
                        {logo}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
