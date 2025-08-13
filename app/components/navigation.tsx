'use client'

import { motion, useScroll } from "framer-motion";
import NavItem from "./navItem";
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
            <div className="flex w-full px-60 py-4 backdrop-blur-sm drop-shadow-md justify-between items-center">
                
                <div className="text-white font-extrabold">
                    Jarjas
                </div>
                <div className="flex flex-row gap-10 font-bold">
                    <NavItem text="Services" href="#services" />
                    <NavItem text="Our Works" href="#ourworks" />
                    <NavItem text="How We Roll" href="#howweroll" />
                    <NavItem text="Career" href="#career" />
                    <NavItem text="About Us" href="#aboutus" />
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