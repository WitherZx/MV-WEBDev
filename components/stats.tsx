"use client";

import React, { useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

const stats = [
    { label: "Anos de experiência", value: 6, suffix: "+" },
    { label: "Projetos entregues", value: 400, suffix: "+" },
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
        <div className="flex items-baseline font-azonix text-6xl md:text-7xl font-normal text-white tracking-normal mx-auto w-fit tabular-nums leading-none">
            <span ref={ref}>0</span>
            <span className="text-accent">{suffix}</span>
        </div>
    );
}

export function Stats() {
    return (
        <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
            <div className="flex flex-col items-center text-center mb-16 md:mb-20 w-full">
                <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Excelência Comprovada</span>
                <h2 className="text-3xl md:text-5xl font-azonix font-normal text-white">
                    Resultados que <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Geram Valor</span>
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center p-8 text-center rounded-[2rem] bg-white/[0.02] border border-white/5 shadow-xl liquid-glass relative overflow-hidden group hover:border-white/10 active:border-white/10 transition-all duration-500 hover:-translate-y-2 active:-translate-y-2"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500" />

                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="font-azonix text-zinc-500 font-bold uppercase tracking-[0.2em] mt-4 text-xs md:text-sm">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
