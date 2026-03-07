"use client";

import React, { useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

const stats = [
    { label: "Anos de experiência", value: 6, suffix: "+" },
    { label: "Sites entregues", value: 300, suffix: "+" },
    { label: "De satisfação", value: 99, suffix: "%" },
];

function Counter({
    value,
    suffix = "",
}: {
    value: number;
    suffix?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 50,
        stiffness: 100,
        duration: 3000,
    });

    React.useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, motionValue, value]);

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Intl.NumberFormat("pt-BR").format(
                    Math.floor(latest)
                );
            }
        });
    }, [springValue]);

    return (
        <div className="flex items-baseline font-neon text-6xl md:text-7xl font-black text-white tracking-wide mx-auto w-fit tabular-nums leading-none">
            <span ref={ref}>0</span>
            <span className="text-accent">{suffix}</span>
        </div>
    );
}

export function Stats() {
    return (
        <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center p-8 text-center rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-xl liquid-glass relative overflow-hidden group hover:border-white/10 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="font-neon text-zinc-500 font-bold uppercase tracking-[0.2em] mt-4 text-xs md:text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
