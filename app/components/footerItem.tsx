'use client';

import { motion } from 'framer-motion';
import { FooterWavyText } from './footerWavyText';

type FooterItemProps = {
    text: string;
    href: string;
};

export default function FooterItem({ text, href }: FooterItemProps) {
    return (
        <motion.a
        href={href}
        className="cursor-pointer "
        whileTap={{
            y: '1px',
            scale: 0.95,
        }}
        target="_blank"
        >
        <FooterWavyText text={text} />
        </motion.a>
    );
}
