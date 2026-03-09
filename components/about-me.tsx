"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Target, Rocket } from "lucide-react";
import Image from "next/image";

export function AboutMe() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="sobre" className="relative w-full py-20 md:py-32 bg-black border-t border-white/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full flex flex-col md:flex-row gap-12 md:gap-20 items-center">

                {/* Left Side - Typography & Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full"
                >
                    <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Sobre Mim</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-8 leading-tight">
                        Muito além do <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">código.</span>
                    </h2>

                    <div className="space-y-6 text-zinc-400 font-medium text-lg md:text-xl leading-relaxed">
                        <p>
                            Sou desenvolvedor freelancer desde 2019, focado em entregar projetos com alta qualidade, dentro do prazo e com foco em <span className="text-white">resultado real</span> para o cliente.
                        </p>
                        <p>
                            Meu objetivo não é apenas desenvolver um site ou aplicativo, mas criar soluções que ajudem seu negócio a crescer, seja aumentando vendas, melhorando sua presença online ou criando uma experiência profissional para seus clientes.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl liquid-glass">
                            <Rocket size={24} className="text-accent" />
                            <span className="text-white font-semibold">Foco em Conversão</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl liquid-glass">
                            <Target size={24} className="text-accent" />
                            <span className="text-white font-semibold">Soluções Sob Medida</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side - Experience Highlights visually */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full relative"
                >
                    <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/10 liquid-glass-card shadow-2xl p-8 flex flex-col justify-center gap-6">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center text-center gap-4 mb-4">
                            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_40px_rgba(116,40,245,0.3)] mb-2">
                                <Image
                                    src="/imagens/image.png"
                                    alt="Marcos V. - Desenvolvedor Web e Mobile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-white">Marcos V.</h3>
                                <p className="text-zinc-400 font-medium">Desenvolvedor Web e Mobile</p>
                            </div>
                        </div>

                        <div className="relative z-10 w-full h-[1px] bg-white/10" />

                        <div className="relative z-10 flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">Experiência</span>
                                <span className="text-white font-semibold">2019 - Presente</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">Localização</span>
                                <span className="text-white font-semibold">Curitiba, BR</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">Atuação</span>
                                <span className="text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis pl-4">Global</span>
                            </div>
                            <div className="flex justify-between items-center gap-4">
                                <span className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">E-mail</span>
                                <a href="mailto:marcos.contatoprof@gmail.com" className="text-white font-semibold text-right hover:text-accent transition-colors truncate">marcos.contatoprof@gmail.com</a>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-zinc-500 font-semibold uppercase tracking-widest text-xs">WhatsApp</span>
                                <a href="https://api.whatsapp.com/send?phone=554198364028" target="_blank" className="text-white font-semibold hover:text-accent transition-colors">+55 41 9836-4028</a>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent blur-[100px] pointer-events-none opacity-50" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
