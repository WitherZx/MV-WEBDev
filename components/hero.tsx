import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FloatingTech } from "./floating-tech";

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 md:py-32 border-b border-white/5">

            {/* Liquid Glass Background Elements */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/imagens/liquid-glass.png"
                    alt="Liquid Glass Background"
                    fill
                    priority
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-accent/20 blur-[130px] pointer-events-none z-0" />

            <FloatingTech />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-center h-full mt-10 md:mt-0">
                <div className="mb-6 md:mb-8 inline-flex items-center gap-2 md:gap-3 rounded-full border border-white/10 bg-white/5 px-4 md:px-5 py-2 md:py-2.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] liquid-glass">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/90 uppercase">
                        Disponível para novos projetos
                    </span>
                </div>

                <h1 className="mb-6 mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tighter text-white w-full">
                    Melhore o seu posicionamento online e conquiste <br className="hidden xl:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">novos clientes.</span>
                </h1>

                <p className="mb-10 mx-auto max-w-3xl text-sm sm:text-lg md:text-xl xl:text-2xl font-medium leading-relaxed text-zinc-300 tracking-wide w-full px-2">
                    Seu site é sua vitrine na internet, então é hora de elevar o nível e mostrar a que veio com um site exclusivo, rápido, bem ranqueado e de alta conversão!
                </p>

                <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row mx-auto">
                    <Link
                        href="https://api.whatsapp.com/send?phone=554198364028"
                        target="_blank"
                        className="magic-button flex w-full sm:w-auto items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 text-sm md:text-lg font-black tracking-wide"
                    >
                        Quero aumentar minhas vendas
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#portfolio"
                        className="flex w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-4 md:px-10 md:py-5 text-sm md:text-lg font-bold text-white transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-95 liquid-glass glass-shine-hover"
                    >
                        Confira meu portfólio
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-500 z-10 hidden md:block">
                <ChevronDown size={36} />
            </div>
        </section>
    );
}
