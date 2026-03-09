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
        <div ref={containerRef} className="py-24 md:py-32 flex flex-wrap justify-center gap-x-4 lg:gap-x-6 gap-y-0 max-w-[1200px] mx-auto px-6 text-center cursor-default">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

                return (
                    <motion.span
                        key={i}
                        style={{ opacity }}
                        className="text-4xl md:text-5xl lg:text-[5.5rem] font-azonix font-normal tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600 uppercase leading-[1.2] pt-4 pb-2 -mt-2 hover:text-accent transition-colors duration-500 inline-block"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </div>
    );
}
