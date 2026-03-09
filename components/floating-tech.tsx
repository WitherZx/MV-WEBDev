"use client";

import React from "react";
import { motion } from "framer-motion";

const ICONS = [
    {
        name: 'React',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        top: '15%', left: '15%', size: 60, delay: 0, duration: 8
    },
    {
        name: 'Next.js',
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        top: '75%', left: '10%', size: 45, delay: 1.5, duration: 6
    },
    {
        name: "WordPress",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
        top: '25%', left: '80%', size: 55, delay: 0.7, duration: 7
    },
    {
        name: "JavaScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        top: '65%', left: '85%', size: 45, delay: 2.1, duration: 9
    },
    {
        name: "Figma",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
        top: '40%', left: '92%', size: 35, delay: 1.1, duration: 8.5
    },
    {
        name: "TypeScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        top: '12%', left: '55%', size: 45, delay: 0.5, duration: 6.5
    },
    {
        name: "Tailwind CSS",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
        top: '85%', left: '30%', size: 55, delay: 1.2, duration: 7.5
    },
    {
        name: "Node.js",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
        top: '50%', left: '5%', size: 45, delay: 2.5, duration: 8
    },
    {
        name: "Git",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
        top: '85%', left: '65%', size: 45, delay: 1.8, duration: 6.8
    },
    {
        name: "HTML5",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        top: '30%', left: '35%', size: 40, delay: 0.3, duration: 7.2
    },
    {
        name: "CSS3",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        top: '50%', left: '75%', size: 40, delay: 0.8, duration: 6.2
    }
];

export function FloatingTech() {
    return (
        <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden hidden md:block">
            {ICONS.map((icon, ind) => (
                <motion.div
                    key={ind}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                        opacity: [0.15, 0.4, 0.15],
                        y: [0, -30, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        duration: icon.duration,
                        repeat: Infinity,
                        delay: icon.delay,
                        ease: "easeInOut"
                    }}
                    className="absolute flex items-center justify-center opacity-30 grayscale-[80%] hover:grayscale-0 transition-all duration-700 pointer-events-auto cursor-default drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:drop-shadow-[0_0_30px_rgba(116,40,245,0.5)]"
                    style={{
                        top: icon.top,
                        left: icon.left,
                        width: icon.size,
                        height: icon.size
                    }}
                    title={icon.name}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={icon.url} alt={icon.name} className="w-full h-full object-contain" />
                </motion.div>
            ))}
        </div>
    );
}
