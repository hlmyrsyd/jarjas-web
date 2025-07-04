'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: ButtonProps) {
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(href)}
            className="w-fit font-bold py-2 px-6 rounded-full cursor-pointer text-white"
            whileHover={{
                y: '-4px',
                backgroundColor: '#f17a1d',
                transition: {
                ease: 'easeInOut',
                },
            }}
            style={{ backgroundColor: '#f59e0b' }}
            whileTap={{
                y: '1px',
                scale: 0.95,
                backgroundColor: '#cacaca',
            }}
            >
            {text}
        </motion.div>
    );
}
