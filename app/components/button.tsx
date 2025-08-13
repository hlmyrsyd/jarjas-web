'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
    text: string;
    href: string;
    target?: string;
}

export default function Button({ text, href, target }: ButtonProps) {
    return (
        <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className="w-fit font-bold py-2 px-6 rounded-full cursor-pointer text-white"
        whileHover={{
            y: '-4px',
            backgroundColor: '#f17a1d',
            transition: { ease: 'easeInOut' },
        }}
        style={{ backgroundColor: '#f59e0b' }}
        whileTap={{
            y: '1px',
            scale: 0.95,
            backgroundColor: '#cacaca',
        }}
        >
        {text}
        </motion.a>
    );
}
