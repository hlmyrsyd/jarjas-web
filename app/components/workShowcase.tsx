'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        href: 'https://nlhplaw.com/_id/',
        image: '/image/project1.jpg',
        title: 'NLHP Law Firm',
        description: 'Website Development',
    },
    {
        href: 'https://www.instagram.com/kebuliarabi/',
        image: '/image/project2.jpg',
        title: 'Kebuli Arabi',
        description: 'Brand Strategy, Visual Identity',
    },
    {
        href: 'https://www.instagram.com/dailywell.id/',
        image: '/image/project3.jpg',
        title: 'Dailywell',
        description: 'Social Media Management, Packaging, Branding',
    },
    {
        href: 'https://www.instagram.com/jo.ko.pi',
        image: '/image/project4.jpg',
        title: 'JOKOPI GO',
        description: 'Digital Advertising',
    },
];

export default function WorkShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-6 w-full h-full">
            {projects.map((project, index) => (
                <Link href={project.href} key={index} className="group" target="_blank">
                    <motion.div
                        className={`flex flex-col gap-2 w-full h-96 transition-all duration-300 overflow-hidden justify-center ${
                        hoveredIndex !== null && hoveredIndex !== index ? 'grayscale opacity-60' : ''
                        }`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='flex h-full w-full overflow-hidden items-center justify-center rounded-2xl'>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="relative w-full h-[40vh]"
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover scale-110 "
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-white">{project.title}</h1>
                            <p className="text-white">{project.description}</p>
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}
