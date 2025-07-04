'use client'

import { motion } from "framer-motion";
import NavItem from "./navItem";

export default function NavigationBar() {
    return (
        <div className="sticky right-0 top-0 flex w-full px-60 py-4 backdrop-blur-sm bg-white/1 drop-shadow-xl justify-between items-center">
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
            <motion.div 
                className="font-bold py-2 px-6 rounded-full cursor-pointer"
                whileHover={{
                    y: '-4px',
                    backgroundColor: '#f57a4a',
                    transition: {
                        ease: "easeInOut"
                    }
                }}
                style={{ backgroundColor: '#f59e0b' }}
                whileTap={{
                    y: '1px',
                    scale: 0.95,
                    backgroundColor: '#cacaca',
                }}
            >
                Get Started
            </motion.div>
        </div>
    )
};