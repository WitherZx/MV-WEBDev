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
        <section ref={containerRef} id="metodologia" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-20 md:py-32 border-t border-white/5">
            {/* Efeito da luz de fundo rastreando e apagando com o Scroll */}
            <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-x-0 top-0 h-[600px] w-full bg-[radial-gradient(ellipse_at_top,rgba(116,40,245,0.25),transparent_60%)] pointer-events-none origin-top"
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.8 }}
                className="container mx-auto max-w-7xl px-6 relative z-10 w-full text-center mb-12 md:mb-24"
            >
                <h2 className="text-accent text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4">Metodologia</h2>
                <h3 className="text-3xl md:text-5xl lg:text-7xl xl:text-[5rem] font-azonix font-normal text-white tracking-normal mb-4 leading-tight mx-auto w-full max-w-7xl relative">
                    Mais simples <span className="text-white/40">do que você pensa.</span>
                    <motion.div style={{ opacity: glowOpacity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[40px] bg-accent/20 blur-[60px] rounded-full pointer-events-none -z-10" />
                </h3>
            </motion.div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full">
                {/* Container Pai Unificado */}
                <div className="relative flex w-full flex-col p-4 md:p-8 rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-[0_40px_120px_rgba(116,40,245,0.3)] liquid-glass-card gap-8 md:gap-12 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />

                    {/* Janela de Vídeo Principal 16:9 */}
                    <div className="relative w-full aspect-video rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl z-10">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                        >
                            <source src="/imagens/video.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Grid de Metodologia/Passos abaixo do vídeo */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full relative z-10">
                        {/* Passo 1 */}
                        <div className="flex-1 text-left relative group w-full bg-black/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-inner hover:border-accent/40 transition-all duration-500 overflow-hidden">
                            <div className="absolute -left-0 top-0 bottom-0 w-1 bg-accent rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                            <h4 className="text-accent text-3xl md:text-5xl font-azonix font-normal mb-3 opacity-50">01</h4>
                            <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Contato Imediato</p>
                            <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Discutiremos suas necessidades para encontrar a melhor solução técnica para o seu negócio.</p>
                        </div>

                        {/* Passo 2 */}
                        <div className="flex-1 text-left relative group w-full bg-black/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-inner hover:border-accent/40 transition-all duration-500 overflow-hidden">
                            <div className="absolute -left-0 top-0 bottom-0 w-1 bg-accent rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                            <h4 className="text-accent text-3xl md:text-5xl font-azonix font-normal mb-3 opacity-50">02</h4>
                            <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Desenvolvimento</p>
                            <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Alta performance com React/Next.js ou agilidade e flexibilidade usando WordPress de alto nível.</p>
                        </div>

                        {/* Passo 3 */}
                        <div className="flex-1 text-left relative group w-full bg-black/40 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-inner hover:border-accent/40 transition-all duration-500 overflow-hidden">
                            <div className="absolute -left-0 top-0 bottom-0 w-1 bg-accent rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                            <h4 className="text-accent text-3xl md:text-5xl font-azonix font-normal mb-3 opacity-50">03</h4>
                            <p className="text-white text-lg md:text-xl font-bold mb-2 tracking-tight">Entrega & Suporte</p>
                            <p className="text-zinc-400 font-medium text-xs md:text-sm leading-relaxed">Revisões finais detalhadas para um resultado impecável e acompanhamento do pós-lançamento.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
