'use client'

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "./button";

export default function NavigationBar() {
    const { scrollYProgress } = useScroll(); // 0 to 1 progress
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
        setProgress(v);
        });

        return () => {
        unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div className="sticky right-0 top-0 z-50 bg-[#1E1E1E]/50">
            <div className="lg:flex w-full hidden px-30 2xl:px-60 py-4 backdrop-blur-sm drop-shadow-md justify-between items-center">
                
                <div className="text-white font-extrabold">
                    JARJAS
                </div>
                <div className="flex flex-row gap-10 font-bold">
                </div>
                <Button 
                    text={"Konsultasi Gratis!"} 
                    href={"https://wa.me/62811877432?text=Halo%20Jarjas%20saya%20ingin%20konsultasi"}
                    target="_blank"
                />
            </div>
            <motion.div
                className="h-[1px] bg-amber-500 origin-left"
                style={{
                    scaleX: progress,
                    boxShadow: '0 5px 25px 1px rgba(245, 158, 11, 0.8)',
                }}
            />
        </div>
    )
};