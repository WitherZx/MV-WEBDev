"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        id: 1,
        text: "Marcos foi excelente! Rápido, proativo, comunicativo e realizou o trabalho com excelência. Recomendo à todos e voltaria a trabalhar com ele facilmente.",
        project: "Migração de site Wordpress",
        source: "99freelas"
    },
    {
        id: 2,
        text: "Cara, o site ficou incrível! Muito mais rápido do que eu esperava e já começou a gerar leads.",
        project: "Desenvolvimento de Landing Page",
        source: "WhatsApp"
    },
    {
        id: 3,
        text: "Marcos foi muito efetivo e rápido na edição da minha LP. Deixou o site de acordo com o solicitado e foi criativo em toda edição.",
        project: "Edição de página de vendas",
        source: "99freelas"
    },
    {
        id: 4,
        text: "O e-commerce tá show de bola. Design limpo e o checkout perfeito. Valeu demais!",
        project: "Criação de E-commerce",
        source: "WhatsApp"
    },
    {
        id: 5,
        text: "Marcos é um excelente profissional, foi pró-ativo, apresentou sugestões e fez diversas melhorias no projeto pedido. Super recomendo.",
        project: "Criação de categoria para e-commerce",
        source: "99freelas"
    },
    {
        id: 6,
        text: "O app ficou exatamente como pedi, muito fluido. A gente continua trabalhando junto com certeza.",
        project: "Desenvolvimento Web App",
        source: "WhatsApp"
    },
    {
        id: 7,
        text: "Excelente profissional, excelente trabalho, entrega muito rápida, já estou encomendando o próximo trabalho, eu recomendo!!!",
        project: "Criação de Landing page para VSL",
        source: "99freelas"
    },
    {
        id: 8,
        text: "Irmão, você salvou meu lançamento. A página de vendas converteu absurdos e não caiu uma vez sequer num pico enorme.",
        project: "Página para Lançamento",
        source: "WhatsApp"
    },
    {
        id: 9,
        text: "É um excelente profissional, realizou o projeto conforme combinado.",
        project: "Criação de landing page",
        source: "99freelas"
    },
    {
        id: 10,
        text: "Marcos, parabéns pelo trabalho! O site institucional da empresa ficou com uma cara super premium.",
        project: "Site Institucional",
        source: "WhatsApp"
    },
    {
        id: 11,
        text: "Excelente profissional!",
        project: "Melhoria visual de plataforma",
        source: "99freelas"
    },
    {
        id: 12,
        text: "Valeu pela agilidade! Precisava disso urgente e você entregou além das expectativas.",
        project: "Otimização de SEO e Performance",
        source: "WhatsApp"
    },
];

export function Testimonials() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const glowOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} id="depoimentos" className="relative w-full py-20 md:py-32 bg-black border-t border-white/5 overflow-hidden">
            {/* Background Glow */}
            <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(116,40,245,0.05),transparent_60%)] pointer-events-none"
            />

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full">

                <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full">
                    <span className="text-accent text-sm font-bold uppercase tracking-[0.2em] mb-4 block">Avaliações</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-6">
                        O que dizem sobre mim
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                        Um histórico do qual me orgulho: prazos cumpridos e clientes satisfeitos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "0px" }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="flex flex-col p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 active:border-accent/40 shadow-xl liquid-glass group transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 relative"
                        >
                            <Quote size={40} className="text-white/10 absolute top-6 right-6 group-hover:text-accent/20 group-active:text-accent/20 transition-colors duration-500" />

                            <div className="flex text-accent mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} size={16} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-zinc-300 font-medium leading-relaxed mb-8 flex-1">
                                "{review.text}"
                            </p>

                            <div className="pt-6 border-t border-white/10 w-full mt-auto flex items-center justify-between gap-4">
                                <div className="flex-1 overflow-hidden">
                                    <span className="text-white font-bold block mb-1 truncate">{(review as any).name || "Cliente Verificado"}</span>
                                    <span className="text-zinc-500 text-sm font-medium line-clamp-1">{review.project}</span>
                                </div>
                                <div className="flex flex-col items-end text-right shrink-0">
                                    <span className="text-[10px] font-bold tracking-wider text-accent uppercase mb-1">Verificado via</span>
                                    <span className={`text-xs font-black backdrop-blur-md border px-2 py-1 rounded ${(review as any).source === 'WhatsApp'
                                        ? 'bg-green-500/10 border-green-500/20 text-green-400'
                                        : 'bg-white/5 border-white/10 text-white'
                                        }`}>
                                        {(review as any).source || '99freelas'}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
