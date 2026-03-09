"use client";

import React from "react";
import { motion } from "framer-motion";

const items = [
    "Next.js", "Expo", "React", "React Native", "TypeScript",
    "Tailwind CSS", "JavaScript", "HTML", "CSS", "WordPress",
    "Elementor", "WooCommerce", "Tray Commerce", "UX/UI", "SEO",
    "Search Console", "Photoshop", "Illustrator", "Canva"
];

export function TechMarquee() {
    return (
        <section className="relative w-full py-16 md:py-24 bg-zinc-950 overflow-hidden border-y border-white/5 bg-gradient-to-r from-black via-zinc-950 to-black">
            <div className="flex select-none overflow-hidden w-full">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16 md:gap-24 items-center min-w-full"
                >
                    {Array(2).fill(0).map((_, i) => (
                        <React.Fragment key={i}>
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="text-4xl md:text-6xl font-azonix font-normal text-white/5 hover:text-accent transition-all duration-700 cursor-default uppercase tracking-wide"
                                >
                                    {item}
                                </span>
                            ))}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

            {/* Side gradient Fades */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        </section>
    );
}
