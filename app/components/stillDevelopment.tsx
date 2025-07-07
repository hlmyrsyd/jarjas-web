'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function StillDevelopment() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isInside, setIsInside] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 15 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const bounds = containerRef.current.getBoundingClientRect();
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999]">
            <motion.div
                ref={containerRef}
                className="transition-all duration-500 hover:backdrop-blur-none w-[40vw] h-fit flex items-center justify-between py-5 px-20 rounded-2xl gap-4 text-6xl font-black backdrop-blur-xs text-white border-1 border-white relative overflow-hidden bg-neutral-700/40"
                onMouseEnter={() => setIsInside(true)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsInside(false)}
                whileHover={{
                    opacity:0
                }}
            >
                
            {/* Custom Cursor Elements (relative to container) */}
            <AnimatePresence>
                {isInside && (
                    <>
                        {/* Center dot */}
                        <motion.div
                            className="absolute z-[9998] pointer-events-none"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.5,
                                ease: 'circInOut'
                            }}
                            style={{
                                left: smoothX,
                                top: smoothY,
                                translateX: '-50%',
                                translateY: '-50%',
                                width: 100,
                                height: 100,
                            }}
                            >
                            <motion.div
                                className="absolute inset-0"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                            >
                                {[...Array(20)].map((_, i) => {
                                const angle = (360 / 18) * i;
                                const radius = 30;
                                const x = radius * Math.cos((angle * Math.PI) / 180);
                                const y = radius * Math.sin((angle * Math.PI) / 180);
                                const letter = 'STILL DEVELOPING •'[i % 'STILL DEVELOPING •'.length];

                                return (
                                    <div
                                    key={i}
                                    className="absolute text-[10px] text-white"
                                    style={{
                                        left: 50 + x,
                                        top: 50 + y,
                                        transform: `translate(-50%, -50%) rotate(${angle - 270}deg)`,
                                        transformOrigin: 'center',
                                    }}
                                    >
                                    {letter}
                                    </div>
                                );
                                })}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Your main content */}
            <Image height={250} width={250} src="/image/giphy.gif" alt="" />
            <code>Still in development</code>
            </motion.div>
        </div>
    );
}
