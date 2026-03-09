"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Quanto tempo demora para meu site ficar pronto?",
        answer: "O tempo de entrega é um dos meus maiores diferenciais. Landing pages focadas em conversão podem ser entregues em apenas 48 horas (2 dias). Projetos mais robustos ou e-commerces levam de 10 a 20 dias, dependendo da complexidade.",
    },
    {
        question: "Vocês trabalham com WordPress ou código personalizado?",
        answer: "Trabalho com ambos! Utilizo Next.js e React para projetos de alta performance e escala, e WordPress (Elementor) para clientes que precisam de facilidade na gestão de conteúdo e rapidez no lançamento.",
    },
    {
        question: "O site será amigável para dispositivos móveis (responsivo)?",
        answer: "Com certeza. No cenário atual, mais de 70% dos acessos vêm de celulares. Todos os projetos são desenvolvidos com a metodologia 'Mobile-First', garantindo uma experiência perfeita em qualquer tela.",
    },
    {
        question: "Terei suporte após a entrega do projeto?",
        answer: "Sim, ofereço 30 dias de suporte gratuito para ajustes finos e correção de eventuais bugs. Também ofereço planos mensais de manutenção para garantir que seu site esteja sempre seguro e atualizado.",
    },
    {
        question: "Como funciona o processo de pagamento?",
        answer: "Geralmente trabalhamos com 50% de entrada para início do projeto e 50% na entrega final (após sua aprovação). Aceito Pix, transferência bancária e cartão de crédito (com taxas da plataforma).",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-20 md:py-32 bg-black relative w-full overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(116,40,245,0.05),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 w-full">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-6 tracking-normal">
                        Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Frequentes</span>
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Tire suas dúvidas sobre como trabalhamos para transformar sua ideia em um projeto de alto nível.
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/5 bg-zinc-950/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-accent/30"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                            >
                                <span className="text-base md:text-xl font-semibold text-white group-hover:text-accent transition-colors">
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 p-2 rounded-full border border-white/10 group-hover:border-accent/50 transition-colors ${openIndex === index ? 'bg-accent border-accent' : ''}`}>
                                    {openIndex === index ? (
                                        <Minus size={20} className="text-white" />
                                    ) : (
                                        <Plus size={20} className="text-zinc-500 group-hover:text-accent" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-8 md:px-8 md:pb-8 text-zinc-400 text-sm md:text-lg leading-relaxed border-t border-white/5 pt-6">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
