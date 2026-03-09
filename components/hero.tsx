import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { FloatingTech } from "./floating-tech";

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center overflow-hidden bg-black px-6 py-20 md:py-32 border-b border-white/5">

            {/* Video Background Elements */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                >
                    <source src="/imagens/hero.mp4" type="video/mp4" />
                </video>
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
                    <span className="text-[10px] md:text-xs font-semibold tracking-widest text-white/90 uppercase">
                        Marcos V. • Desenvolvedor Freelancer
                    </span>
                </div>

                <h1 className="mb-6 mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] font-azonix font-normal leading-tight text-white w-full tracking-normal">
                    Sites e Aplicativos Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 text-glow">Personalizados</span> para Aumentar sua Presença Online.
                </h1>

                <p className="mb-10 mx-auto max-w-3xl text-sm sm:text-lg md:text-xl xl:text-2xl font-medium leading-relaxed text-zinc-300 tracking-wide w-full px-2">
                    Desenvolvimento focado em <span className="text-white font-bold italic underline decoration-accent underline-offset-4">alta conversão</span> e ganho de marca. Projetos entregues em <span className="text-white font-bold">apenas 48 horas</span> para você não perder tempo e começar a vender agora.
                </p>

                <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-4 sm:flex-row mx-auto">
                    <Link
                        href="https://api.whatsapp.com/send?phone=554198364028"
                        target="_blank"
                        className="magic-button flex w-full sm:w-auto items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 text-sm md:text-lg font-semibold tracking-wide"
                    >
                        Quero discutir meu projeto agora
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="#portfolio"
                        className="flex w-full sm:w-auto items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-4 md:px-10 md:py-5 text-sm md:text-lg font-semibold text-white transition-all duration-500 hover:bg-white/15 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:-translate-y-1 active:scale-95 liquid-glass glass-shine-hover"
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
