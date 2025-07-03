'use client';

import { motion } from 'framer-motion';
import { WavyText } from './wavyText';

type NavItemProps = {
    text: string;
    href: string;
};

export default function NavItem({ text, href }: NavItemProps) {
    return (
        <motion.a
        href={href}
        className="cursor-pointer "
        whileTap={{
            y: '1px',
            scale: 0.95,
        }}
        >
        <WavyText text={text} />
        </motion.a>
    );
}
