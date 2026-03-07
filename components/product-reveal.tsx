"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ProductReveal() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // O brilho surge quando a seção entra em tela (0 a 0.3) e apaga quando ela sai (0.7 a 1)
    const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    // Efeito sutil de tamanho acompanhando o scroll
    const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    return (
        <section ref={containerRef} className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-20 md:py-32 border-t border-white/5">
            {/* Efeito da luz de fundo rastreando e apagando com o Scroll */}
            <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-x-0 top-0 h-[600px] w-full bg-[radial-gradient(ellipse_at_top,rgba(116,40,245,0.25),transparent_60%)] pointer-events-none origin-top"
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-7xl px-6 relative z-10 w-full text-center mb-12 md:mb-24"
            >
                <h2 className="text-accent text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4">Metodologia</h2>
                <h3 className="text-3xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-4 leading-tight mx-auto max-w-4xl relative">
                    Mais simples <br className="hidden md:block" /><span className="text-white/40">do que você pensa.</span>
                    <motion.div style={{ opacity: glowOpacity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[40px] bg-accent/20 blur-[60px] rounded-full pointer-events-none -z-10" />
                </h3>
            </motion.div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full">
                {/* Janela Panorâmica Cinemática */}
                <div className="relative flex w-full flex-col overflow-hidden rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_40px_120px_rgba(116,40,245,0.2)] group liquid-glass-card hover:translate-y-0 p-0 mx-auto min-h-[500px] md:min-h-[0px] md:aspect-[16/9] lg:aspect-[21/9]">
                    {/* Background image preenche o contêiner por absoluto */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/imagens/tech-nodes.jpg"
                            alt="Premium Tech Nodes"
                            fill
                            priority
                            className="object-cover opacity-50 transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 md:via-black/60 to-transparent pointer-events-none" />
                    </div>

                    {/* Conteúdo flexível fixado no rodapé */}
                    <div className="relative z-10 px-4 md:px-6 flex-1 flex flex-col justify-end mt-[250px] md:mt-0 pt-0 pb-6 md:pb-16 w-full h-full">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 w-full max-w-5xl mx-auto backdrop-blur-3xl bg-black/60 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl mt-auto">

                            <div className="flex-1 text-left relative group w-full">
                                <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-accent rounded-full md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                <h4 className="text-accent text-3xl md:text-4xl font-black mb-2 md:mb-3 opacity-50">1</h4>
                                <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Contato Imediato</p>
                                <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Discutiremos suas necessidades para a melhor solução.</p>
                            </div>

                            <div className="hidden md:block w-[1px] h-24 bg-white/10" />

                            <div className="flex-1 text-left relative group w-full">
                                <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-accent rounded-full md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                <h4 className="text-accent text-3xl md:text-4xl font-black mb-2 md:mb-3 opacity-50">2</h4>
                                <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Desenvolvimento</p>
                                <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Alta performance com código React ou velocidade usando WordPress e Elementor!</p>
                            </div>

                            <div className="hidden md:block w-[1px] h-24 bg-white/10" />

                            <div className="flex-1 text-left relative group w-full">
                                <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-1 bg-accent rounded-full md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                                <h4 className="text-accent text-3xl md:text-4xl font-black mb-2 md:mb-3 opacity-50">3</h4>
                                <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Entrega</p>
                                <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Revisões finais para um resultado perfeito.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
