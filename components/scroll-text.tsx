"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollText({ text }: { text: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.2"],
    });

    const words = text.split(" ");

    return (
        <div ref={containerRef} className="py-40 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:gap-8 max-w-[1400px] mx-auto px-6 text-center cursor-default">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                return (
                    <motion.span
                        key={i}
                        style={{ opacity }}
                        className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600 uppercase leading-[0.9] hover:text-accent transition-colors duration-500"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </div>
    );
}
