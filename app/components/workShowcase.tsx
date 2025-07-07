'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        href: '/projects/astra-honda',
        image: '/image/project1.jpg',
        title: 'Astra Honda',
        description: 'Brand Strategy, Visual Identity Creation',
    },
    {
        href: '/projects/rolex-indonesia',
        image: '/image/project2.jpg',
        title: 'Rolex Indonesia',
        description: 'UI/UX, Design System',
    },
    {
        href: '/projects/le-banana-bites',
        image: '/image/project3.jpg',
        title: 'Le Banana Bites',
        description: 'Brand Strategy,Packaging & Branding',
    },
    {
        href: '/projects/walking-drums',
        image: '/image/project4.jpg',
        title: 'Walking Drums',
        description: 'Creative Direction, Photography',
    },
];

export default function WorkShowcase() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-full">
            {projects.map((project, index) => (
                <Link href={project.href} key={index} className="group">
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
