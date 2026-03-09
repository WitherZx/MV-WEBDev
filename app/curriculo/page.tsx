import React from "react";
import { Navbar } from "@/components/navbar";
import { Instagram, Github, Mail, BrainCircuit, ArrowLeft, Briefcase } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Currículo | MV WEB DEV",
    description: "Frontend Engineer & Especialista em UI/UX",
};

export default function CurriculoPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        background-color: #000 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    main {
                        padding-top: 40px !important;
                        padding-bottom: 40px !important;
                        background-color: #000 !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .print-section {
                        break-inside: avoid;
                        page-break-inside: avoid;
                        margin-bottom: 30px !important;
                    }
                    .print-text-zinc {
                        color: #a1a1aa !important; /* zinc-400 */
                    }
                    .print-border {
                        border-color: rgba(255,255,255,0.1) !important;
                    }
                    h1, h2, h3, .text-white {
                        color: #fff !important;
                    }
                    .print-bg-zinc {
                        background-color: rgba(24,24,27,0.5) !important;
                    }
                    .print-gradient-text {
                        color: #7428f5 !important;
                        background: none !important;
                        -webkit-background-clip: initial !important;
                        background-clip: initial !important;
                        -webkit-text-fill-color: initial !important;
                    }
                }
            `}} />
            <main className="relative bg-black text-white min-h-screen w-full pb-20 overflow-clip selection:bg-accent/40 selection:text-white font-sans">

                {/* Fixed Top Bar - No Print */}
                <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/5 no-print">
                    <div className="container mx-auto px-6 py-5 flex justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-semibold transition-all duration-300 group tracking-widest uppercase text-xs"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-accent" />
                            Voltar ao Portfólio
                        </Link>
                    </div>
                </nav>

                {/* Background ambient glow */}
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent/10 blur-[150px] rounded-full pointer-events-none -z-10" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

                <div className="container mx-auto max-w-4xl px-6 relative z-10">

                    {/* Reorganized Header: Centered & Balanced */}
                    <div className="flex flex-col items-center text-center mb-16 pt-20">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(116,40,245,0.4)] mb-8 transform hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/imagens/image.png"
                                alt="Marcos Vinicius"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <h1 className="text-4xl md:text-6xl font-azonix font-normal text-white mb-4 tracking-tighter">
                            Marcos Vinicius
                        </h1>
                        <p className="text-xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 mb-6 uppercase tracking-wider print-gradient-text">
                            Frontend Engineer & Especialista UX/UI
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-zinc-400 font-medium mb-10 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Curitiba, Brasil
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                7 Anos de Experiência
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                Software Engineering (JALA)
                            </span>
                        </div>

                        <div className="flex items-center justify-center gap-4 no-print">
                            <a href="mailto:marcos.contatoprof@gmail.com" title="Email" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] transition-all duration-300">
                                <Mail size={22} />
                            </a>
                            <a href="https://github.com/WitherZx" target="_blank" title="GitHub" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] transition-all duration-300">
                                <Github size={22} />
                            </a>
                            <a href="https://instagram.com/_devmarcos" target="_blank" title="Instagram" className="p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] transition-all duration-300">
                                <Instagram size={22} />
                            </a>
                            <div className="w-[1px] h-10 bg-white/10 mx-2" />
                            <PrintButton />
                        </div>

                        {/* Only visible in Print */}
                        <div className="hidden print:flex flex-col items-center gap-2 text-zinc-400 text-sm font-medium">
                            <p>Email: marcos.contatoprof@gmail.com</p>
                            <p>WhatsApp: +55 41 9836-4028</p>
                            <p>Website: mvwebdev.com.br</p>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 no-print" />

                    {/* Resumo Profissional */}
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Perfil Profissional
                        </h2>
                        <div className="bg-zinc-950/50 border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-[2rem] text-zinc-300 leading-relaxed font-medium print-bg-zinc print-border print-text-zinc">
                            Desenvolvedor Web Sênior e Engenheiro Front-End com quase 7 anos de atuação no mercado, unindo arquitetura de software de alta performance, inteligência artificial e uma <strong className="text-white">forte veia comercial em vendas de Software SaaS</strong>. Com trajetória recorrente na V4 Company (a maior assessoria de Growth do Brasil) e atualmente atuando na TEX4 com foco em expansão tecnológica, foco em construir ecossistemas que não apenas funcionam, mas performam como máquinas de lucro. Atualmente graduando-me em Software Engineering por uma universidade norte-americana (JALA University), alinhando minhas entregas aos padrões de qualidade do Vale do Silício.
                        </div>
                    </section>

                    {/* Educação */}
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Formação Acadêmica
                        </h2>
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-[15px] top-2 bottom-0 w-[2px] bg-white/10" />

                            <div className="relative md:pl-12 mb-8 group">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    🎓
                                </div>
                                <h3 className="text-xl font-semibold text-white">B.S. in Software Engineering</h3>
                                <div className="text-accent font-semibold text-sm mb-3">JALA University (EUA) • Cursando</div>
                                <p className="text-zinc-400 font-medium leading-relaxed">
                                    Formação focada no rigor técnico da engenharia de software norte-americana (Silicon Valley approach). Aprofundamento contínuo em arquiteturas escaláveis, clean code, algoritmos avançados, e integração de IA.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experiência */}
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Experiência Profissional
                        </h2>
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-[15px] top-2 bottom-0 w-[2px] bg-white/10" />

                            <div className="relative md:pl-12 mb-10 group">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    T4
                                </div>
                                <h3 className="text-xl font-semibold text-white">SaaS Sales Specialist / Executivo de Vendas</h3>
                                <div className="text-accent font-semibold text-sm mb-3">TEX4 • 2024 - Atual</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Venda consultiva e estratégica de soluções tecnológicas SaaS. Atuação direta na expansão da base de clientes através da identificação de dores de negócio e apresentação de soluções de software de alto impacto.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li>Abordagem técnica voltada à conversão de leads qualificados no segmento de tecnologia.</li>
                                    <li>Construção de parcerias estratégicas baseadas na proposta de valor de ferramentas SaaS.</li>
                                    <li>Análise de mercado para posicionamento de produtos digitais escaláveis.</li>
                                </ul>
                            </div>

                            <div className="relative md:pl-12 mb-10 group">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    V4
                                </div>
                                <h3 className="text-xl font-semibold text-white">Desenvolvedor Web & Growth UI</h3>
                                <div className="text-accent font-semibold text-sm mb-3">V4 Company • 2021-2022 | 2023-2024 | 2025-2026</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Atuação imersiva na maior assessoria de Growth Marketing do Brasil, sendo requisitado em múltiplos ciclos para liderar a frente de conversão visual.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li>Responsável por idealizar, testar (A/B) e codificar Landing Pages extremamente rápidas focadas no aumento massivo de Taxas de Conversão (CRO).</li>
                                    <li>Alinhamento estratégico contínuo entre setores de tráfego, design e copywriting para implementar interfaces que destravavam gargalos de vendas e capitalizavam ROI.</li>
                                    <li>Otimização rigorosa do fluxo do usuário e tracking do ecossistema de dados.</li>
                                </ul>
                            </div>

                            <div className="relative md:pl-12 mb-8 group">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    MV
                                </div>
                                <h3 className="text-xl font-semibold text-white">Engenheiro Front-End / Tech Lead</h3>
                                <div className="text-accent font-semibold text-sm mb-3">MV WEB DEV (Freelance & Consultoria) • 2020 - Atual</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Liderança de uma iniciativa autônoma focada na construção de ecossistemas web complexos e arquiteturas de alta visibilidade internacional. Entregas rotineiras de alto padrão para mercados B2B e B2C.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li><strong className="text-white">Desenvolvimento Performático:</strong> Criação de plataformas estáveis (Next.js, React, WP) com métricas perfeitas no Google PageSpeed/Lighthouse (Echlin, Silvertrend, Solumade).</li>
                                    <li><strong className="text-white">Engenharia de Conversão:</strong> Mapeamento de UI/UX focado em atração de leads e e-commerces de alto ticket baseados na psicologia das cores e gatilhos mentais visuais.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Habilidades & Stack */}
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Hard Skills & Tecnologias
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent transition-colors duration-300 print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-3">Linguagens & Core</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed print-text-zinc">React, Next.js, JavaScript, TypeScript, HTML5, CSS3, Estruturas SSR/SSG.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent transition-colors duration-300 print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-3">Styling & UI</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed print-text-zinc">Tailwind CSS, Framer Motion, GSAP, Glassmorphism, Micro-interações, Design System.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent transition-colors duration-300 print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                                    <BrainCircuit size={18} className="text-accent" />
                                    Inteligência Artificial & Automação
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed print-text-zinc">Automatização de fluxos, Engenharia de Prompt, Modelos Generativos Visuais/Textuais, e criação de fluxos autônomos para escalabilidade de agências.</p>
                            </div>

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-accent transition-colors duration-300 print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-3">Ecossistema CMS & Growth</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed print-text-zinc">WordPress Avançado, Elementor Pro, WooCommerce, Shopify, Tray Commerce, e SEO Code-Level.</p>
                            </div>

                        </div>
                    </section>

                    {/* Idiomas */}
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Idiomas
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-1">Português</h4>
                                <p className="text-accent text-sm font-semibold tracking-wide uppercase">Nativo</p>
                            </div>
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border">
                                <h4 className="text-lg font-bold text-white mb-1">Inglês</h4>
                                <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-2">Avançado / Intermediário Superior</p>
                                <p className="text-zinc-400 text-sm print-text-zinc">Leitura & Documentação (Avançado), Comunicação Técnica e Acadêmica de forma eficiente devido à vivência na JALA University.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
