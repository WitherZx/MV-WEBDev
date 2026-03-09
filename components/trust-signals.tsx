"use client";

import React from "react";
import { ShieldCheck, Zap, Code2, HeartHandshake } from "lucide-react";

export function TrustSignals() {
    const signals = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-accent" />,
            title: "Garantia de Satisfação",
            description: "Comprometimento total com a sua visão. Ajustamos o projeto até que ele supere suas expectativas."
        },
        {
            icon: <Zap className="w-8 h-8 text-accent" />,
            title: "Entrega Ultra-Rápida",
            description: "Coloque sua ideia no ar em tempo recorde. Landing pages profissionais entregues em apenas 48 horas."
        },
        {
            icon: <Code2 className="w-8 h-8 text-accent" />,
            title: "Código Limpo",
            description: "Desenvolvimento profissional seguindo as melhores práticas, facilitando futuras expansões."
        },
        {
            icon: <HeartHandshake className="w-8 h-8 text-accent" />,
            title: "Suporte Dedicado",
            description: "Você não fica na mão. Oferecemos suporte contínuo para que seu site nunca pare de vender."
        }
    ];

    return (
        <section className="py-20 bg-black relative w-full border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {signals.map((signal, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-[2rem] border border-white/5 bg-zinc-950/50 backdrop-blur-sm lg-card-hover transition-all duration-500 flex flex-col items-center text-center group"
                        >
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500">
                                {signal.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                                {signal.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {signal.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
