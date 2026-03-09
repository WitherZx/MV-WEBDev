"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MonitorPlay, Rocket, ShoppingCart, Smartphone, Search, Palette } from "lucide-react";

const features = [
    {
        title: "Sites & Landing Pages",
        description: "Criar sites profissionais e landing pages de alta conversão.",
        icon: <MonitorPlay size={32} className="text-accent" />,
    },
    {
        title: "Aplicações Web e Mobile",
        description: "Desenvolver aplicações web e mobile com as melhores tecnologias.",
        icon: <Smartphone size={32} className="text-accent" />,
    },
    {
        title: "E-commerces",
        description: "Estruturar ou melhorar seu e-commerce para aumentar suas vendas.",
        icon: <ShoppingCart size={32} className="text-accent" />,
    },
    {
        title: "Presença Digital",
        description: "Posicionar seu negócio do zero na internet e gerar autoridade.",
        icon: <Rocket size={32} className="text-accent" />,
    },
    {
        title: "Performance & SEO",
        description: "Melhorar a performance, a experiência do usuário e o seu SEO.",
        icon: <Search size={32} className="text-accent" />,
    },
    {
        title: "UX/UI Design",
        description: "Prototipagem de interfaces funcionais focadas na experiência.",
        icon: <Palette size={32} className="text-accent" />,
    },
];

const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export function BentoFeatures() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const glowOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
    const titleGlowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="beneficios" className="relative w-full py-20 md:py-32 bg-black border-t border-white/5 overflow-hidden">
            {/* Efeito de luz acendendo e apagando no fundo acompanhando a rolagem */}
            <motion.div
                style={{ opacity: glowOpacity, scale: glowScale }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(116,40,245,0.08),transparent_50%)] pointer-events-none"
            />

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center text-center mb-16 md:mb-24 w-full"
                >
                    <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Especialidades</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-6 relative">
                        Soluções que <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Escalam Negócios</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                        Uma abordagem personalizada para entender suas necessidades e fornecer soluções eficazes que geram autoridade e lucro.
                    </p>
                </motion.div>

                {/* Symmetric Grid with Staggered Reveal Animation */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-20px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            whileTap={{ scale: 0.98 }}
                            className="group p-8 md:p-10 rounded-2xl flex flex-col justify-start liquid-glass-card hover:-translate-y-2 active:-translate-y-2 transition-all duration-500 w-full relative"
                        >
                            {/* Reflexo luminoso interno do card ao entrar na tela */}
                            <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none rounded-t-2xl" />

                            <div className="mb-6 p-4 rounded-xl bg-black/50 border border-white/5 shadow-inner w-fit group-hover:bg-accent/20 group-hover:shadow-[0_0_20px_rgba(116,40,245,0.3)] group-active:bg-accent/20 group-active:shadow-[0_0_20px_rgba(116,40,245,0.3)] transition-all duration-500 relative z-10">
                                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 32 })}
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white tracking-tight relative z-10">{feature.title}</h3>
                            <p className="text-zinc-400 text-base leading-relaxed font-medium group-hover:text-zinc-200 group-active:text-zinc-200 transition-colors relative z-10">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
