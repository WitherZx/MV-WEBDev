import { Instagram, Github, Linkedin, Mail, Phone, BrainCircuit, ArrowLeft, Briefcase, Bot, Smartphone, Globe, Sparkles } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="currentColor"
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.721 7.454c-2.131 0-4.215-.544-6.059-1.577L3 21l.667-3.526a8.941 8.941 0 0 1-1.488-4.965c0-4.947 4.026-8.974 8.974-8.974 2.4 0 4.656.933 6.35 2.628a8.904 8.904 0 0 1 2.625 6.346c0 4.948-4.027 8.975-8.971 8.975m8.483-17.458A10.666 10.666 0 0 0 11.25 1c-5.891 0-10.684 4.793-10.684 10.684 0 1.886.491 3.727 1.423 5.362L0 23l6.13-.161a10.648 10.648 0 0 0 5.12 1.311h.005c5.89 0 10.684-4.793 10.684-10.684a10.612 10.612 0 0 0-3.14-7.545z" />
    </svg>
);

export const metadata = {
    title: "Currículo | Software Engineer & AI Specialist",
    description: "Software Engineer & Especialista em IA",
};

export default function CurriculoPage() {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                @media print {
                    @page {
                        margin: 0;
                        size: A4;
                    }
                    html, body {
                        background-color: #000 !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    body {
                        overflow: visible !important;
                    }
                    main {
                        padding: 10mm !important;
                        background-color: #000 !important;
                        overflow: visible !important;
                        height: auto !important;
                        min-height: 0 !important;
                    }
                    .no-print {
                        display: none !important;
                    }
                    .print-break-before {
                        break-before: page !important;
                    }
                    h1, h2, h3 {
                        break-after: avoid !important;
                        page-break-after: avoid !important;
                    }
                    .print-section {
                        break-inside: auto !important;
                        page-break-inside: auto !important;
                    }
                    .print-card {
                        break-inside: avoid !important;
                        page-break-inside: avoid !important;
                        margin-bottom: 20px !important;
                        position: relative;
                        display: block;
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
                    img {
                        filter: none !important;
                        -webkit-filter: none !important;
                    }
                }
            `}} />
            <main className="relative bg-black text-white min-h-screen w-full pb-20 print:pb-10 overflow-visible selection:bg-accent/40 selection:text-white font-sans">

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

                    {/* Re-Remodeled Header: Identity Left, Card Right */}
                    <div className="grid grid-cols-1 md:grid-cols-5 print:grid-cols-5 gap-10 items-center mb-16 pt-20 print:pt-0 print:mb-6">

                        {/* Left Side: Visual Identity (3/5 columns) */}
                        <div className="md:col-span-3 print:col-span-3 flex flex-col items-center md:items-start print:items-start text-center md:text-left print:text-left gap-6">
                            <div className="relative w-25 h-25 rounded-[15px] overflow-hidden border-4 border-white/10 transform hover:scale-105 transition-transform duration-500 print:w-28 print:h-28">
                                <Image
                                    src="/imagens/image.png"
                                    alt="Marcos Vinicius"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-4xl md:text-5xl font-azonix font-normal text-white tracking-tighter print:text-4xl">
                                    Marcos Vinicius
                                </h1>
                                <p className="text-lg md:text-1xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400 uppercase tracking-widest print-gradient-text print:text-lg">
                                    Software Engineer & AI Specialist
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center md:justify-start print:justify-start gap-x-6 gap-y-3 text-zinc-400 font-medium text-xs md:text-sm print:text-[10px]">
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    📍 Curitiba/Piên, PR
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    🚀 +400 Projetos Entregues
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    ⚙️ 7 Anos de Experiência
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                    🎓 Software Engineering (JALA)
                                </span>
                            </div>
                        </div>

                        {/* Right Side: Professional Data Card (2/5 columns) */}
                        <div className="md:col-span-2 print:col-span-2 relative group mb-0 no-print">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl flex flex-col gap-6 shadow-2xl">
                                <div className="space-y-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-accent font-bold">Identificação Profissional</span>
                                        <h3 className="text-md font-bold text-white leading-none">Marcos Vinicius da Rosa Gomes</h3>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <a href="mailto:marcos.contatoprof@gmail.com" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/link">
                                            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-accent/20 group-hover/link:text-accent transition-all">
                                                <Mail size={16} />
                                            </div>
                                            <span className="text-xs font-medium">marcos.contatoprof@gmail.com</span>
                                        </a>
                                        <a href="tel:+5541998364028" className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group/link">
                                            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center group-hover/link:bg-accent/20 group-hover/link:text-accent transition-all">
                                                <Phone size={16} />
                                            </div>
                                            <span className="text-xs font-medium">+55 (41) 99836-4028</span>
                                        </a>
                                        <div className="flex items-center gap-3 text-zinc-400">
                                            <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                                                <Globe size={16} />
                                            </div>
                                            <span className="text-xs font-medium">mvwebdev.com.br</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[1px] w-full bg-white/5"></div>

                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <a href="https://github.com/WitherZx" target="_blank" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-lg">
                                            <Github size={18} />
                                        </a>
                                        <a href="https://www.linkedin.com/in/marcos-gomes-bb152520b/" target="_blank" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-lg">
                                            <Linkedin size={18} />
                                        </a>
                                        <a href="https://instagram.com/_devmarcos" target="_blank" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-lg">
                                            <Instagram size={18} />
                                        </a>
                                        <a href="https://wa.me/5541998364028" target="_blank" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:text-white transition-all duration-300 shadow-lg">
                                            <WhatsAppIcon size={18} />
                                        </a>
                                    </div>
                                    <div className="no-print">
                                        <PrintButton />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Print Only Card: Simplified version for PDF (Right column) */}
                        <div className="hidden print:block print:col-span-2 bg-zinc-900/30 border border-white/5 p-6 rounded-3xl print-card">
                            <div className="flex flex-col gap-1 border-b border-white/10 pb-4 mb-4">
                                <span className="text-[8px] uppercase tracking-widest text-accent font-bold">Identificação</span>
                                <h3 className="text-base font-bold text-white leading-tight">Marcos Vinicius da Rosa Gomes</h3>
                            </div>
                            <div className="space-y-2 text-zinc-400 text-[9px] font-medium">
                                <p className="flex items-center gap-2"><Mail size={12} className="text-accent" /> marcos.contatoprof@gmail.com</p>
                                <p className="flex items-center gap-2"><Phone size={12} className="text-accent" /> +55 41 99836-4028</p>
                                <p className="flex items-center gap-2"><Globe size={12} className="text-accent" /> mvwebdev.com.br</p>
                                <p className="flex items-center gap-2"><Github size={12} className="text-accent" /> github.com/WitherZx</p>
                                <p className="flex items-center gap-1.5"><Linkedin size={12} className="text-accent" /> https://www.linkedin.com/in/marcos-gomes-bb152520b/</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 no-print" />

                    {/* Resumo Profissional */}
                    <section className="mb-12 print:mb-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Perfil Profissional
                        </h2>
                        <div className="bg-zinc-950/50 border border-white/5 p-6 md:p-8 rounded-2xl md:rounded-[2rem] text-zinc-300 leading-relaxed font-medium print-bg-zinc print-border print-text-zinc print-card">
                            <p className="mb-6">
                                Desenvolvedor desde os 16 anos, atuo como <strong className="text-white">Engenheiro de Software</strong> com foco na criação de ecossistemas complexos e aplicativos baseados em <strong className="text-white">Inteligência Artificial</strong>. Possuo forte veia empreendedora e foco em métricas de negócio.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">▹</span>
                                    <span><strong className="text-white">Experiência:</strong> +7 anos de mercado (Freelance, Agências e Software Houses).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">▹</span>
                                    <span><strong className="text-white">Entregas:</strong> +400 projetos executados (Sistemas, Apps, Landing Pages).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-accent mt-1">▹</span>
                                    <span><strong className="text-white">Especialidade Atual:</strong> Integração de LLMs (Gemini, OpenRouter) no core de aplicativos móveis e web.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Projetos em Destaque */}
                    <section className="mb-12 print:mb-4">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Projetos em Destaque / Produtos Proprietários
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
                            {/* RepTrail */}
                            <div className="group relative bg-zinc-950/50 border border-white/5 p-6 rounded-3xl hover:border-accent/50 transition-all duration-500 overflow-hidden print-card print:p-5">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Smartphone size={100} className="text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                            <Smartphone size={20} className="text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">RepTrail</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                                        Ecossistema Fitness completo (Alunos e Personais). Utiliza <strong className="text-white">IA (OpenRouters)</strong> para geração automatizada de treinos e dietas personalizadas. Integração com sistema de afiliados.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-accent mb-6 print:mb-1 print:gap-1.5">
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Next.js</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">React</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">TypeScript</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Tailwind</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Supabase</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">OpenRouter</span>
                                    </div>
                                    <a
                                        href="https://reptrail.com.br"
                                        target="_blank"
                                        className="no-print inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group/btn"
                                    >
                                        Acessar Projeto
                                        <Globe size={14} className="group-hover/btn:rotate-12 transition-transform" />
                                    </a>
                                </div>
                            </div>

                            {/* iaNow */}
                            <div className="group relative bg-zinc-950/50 border border-white/5 p-6 rounded-3xl hover:border-accent/50 transition-all duration-500 overflow-hidden print-card print:p-5">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                                    <Bot size={100} className="text-accent" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                            <Bot size={20} className="text-accent" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white uppercase tracking-tight">iaNow</h3>
                                    </div>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                                        Aplicativo jurídico alimentado pela <strong className="text-white">&quot;Minerva&quot;</strong> (IA proprietária baseada em Gemini Flash 2.1) para geração de contratos, minutas e estratégias processuais.
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-accent mb-6 print:mb-1 print:gap-1.5">
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Next.js</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">React</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">TypeScript</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Tailwind</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">Supabase</span>
                                        <span className="px-2 py-1 rounded-md bg-accent/10 border border-accent/20">OpenRouter</span>
                                    </div>
                                    <a
                                        href="https://ianow.ia.br"
                                        target="_blank"
                                        className="no-print inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group/btn"
                                    >
                                        Acessar Projeto
                                        <Globe size={14} className="group-hover/btn:rotate-12 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Educação */}
                    <section className="mb-12 print-break-before">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Formação Acadêmica
                        </h2>
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-[15px] top-2 bottom-0 w-[2px] bg-white/10" />

                            <div className="relative md:pl-12 mb-8 group print-card border-none bg-transparent">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    🎓
                                </div>
                                <h3 className="text-xl font-semibold text-white">B.S. in Software Engineering</h3>
                                <div className="text-accent font-semibold text-sm mb-3">JALA University (EUA) • Cursando</div>
                                <p className="text-zinc-400 font-medium leading-relaxed">
                                    Formação focada no rigor técnico da engenharia de software norte-americana (<strong className="text-white">Silicon Valley approach</strong>). Aprofundamento contínuo em arquiteturas escaláveis, clean code, algoritmos avançados, e integração de IA.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Experiência */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Experiência Profissional
                        </h2>
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-[15px] top-2 bottom-0 w-[2px] bg-white/10" />

                            <div className="relative md:pl-12 mb-10 group print-card border-none bg-transparent">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    HO
                                </div>
                                <h3 className="text-xl font-semibold text-white">Co-Founder & Mobile/Web Dev</h3>
                                <div className="text-accent font-semibold text-sm mb-3">H&O Apps • 2025</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Fundação de Software House focada em produtos de alta performance.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li>Desenvolvimento ponta-a-ponta de <strong className="text-white">2 aplicativos proprietários</strong> de larga escala.</li>
                                    <li>Liderança técnica e arquitetura de sistemas mobile utilizando <strong className="text-white">React Native e Expo</strong>.</li>
                                </ul>
                            </div>

                            <div className="relative md:pl-12 mb-10 group print-card border-none bg-transparent">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    FL
                                </div>
                                <h3 className="text-xl font-semibold text-white">SaaS Sales / Executivo de Vendas</h3>
                                <div className="text-accent font-semibold text-sm mb-3">Fluxu • 2026</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Período imersivo em vendas B2B de Software como Serviço.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li>Trouxe <strong className="text-white">visão estratégica comercial</strong> e profundo entendimento das dores de clientes para aplicar na engenharia de software.</li>
                                    <li>Otimização de processos de vendas através de <strong className="text-white">automações</strong> e ferramentas digitais.</li>
                                </ul>
                            </div>

                            <div className="relative md:pl-12 mb-10 group print-card border-none bg-transparent">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    V4
                                </div>
                                <h3 className="text-xl font-semibold text-white">Web Developer Sênior</h3>
                                <div className="text-accent font-semibold text-sm mb-3">V4 Company (Oxicore Fragoso) • 2021 - 2026 (Intermitente)</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Atuação como CLT e terceirizado na unidade Oxicore da maior assessoria de Growth do Brasil.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li>Desenvolvimento de <strong className="text-white">Interfaces de alta conversão (CRO)</strong> para grandes e-commerces e players do mercado nacional.</li>
                                    <li>Implementação de <strong className="text-white">automações complexas</strong> e ecossistemas de dados para otimização de campanhas de tráfego.</li>
                                </ul>
                            </div>

                            <div className="relative md:pl-12 mb-8 group print-card border-none bg-transparent">
                                <div className="hidden md:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-black border-2 border-accent text-accent items-center justify-center font-bold text-xs z-10 shadow-[0_0_10px_rgba(116,40,245,0.5)]">
                                    MV
                                </div>
                                <h3 className="text-xl font-semibold text-white">Tech Lead & Fullstack Dev</h3>
                                <div className="text-accent font-semibold text-sm mb-3">Freelance • 2020 - Atual</div>
                                <p className="text-zinc-400 font-medium leading-relaxed mb-4">
                                    Liderança técnica em projetos globais para clientes diretos e plataformas de freelancer.
                                </p>
                                <ul className="list-disc list-outside ml-4 text-zinc-400 font-medium space-y-2">
                                    <li><strong className="text-white">+400 projetos entregues</strong> via plataformas como Workana e 99Freelas.</li>
                                    <li>Stack focada em ecossistemas web e apps escaláveis (<strong className="text-white">Next.js, AI, Supabase</strong>).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Habilidades & Stack */}
                    <section className="mb-12 print-break-before">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Hard Skills & Tecnologias
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2 print:gap-4">
                            {/* Frontend & Mobile */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden print-card print:p-5">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-accent/10 transition-all" />

                                <h4 className="text-lg font-azonix font-normal text-white mb-8 flex items-center gap-3">
                                    <Smartphone size={20} className="text-accent" />
                                    Frontend & Mobile
                                </h4>

                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-4">
                                    {[
                                        { name: 'React', icon: 'react-original' },
                                        { name: 'Next.js', icon: 'nextjs-original' },
                                        { name: 'Native', icon: 'react-original' },
                                        { name: 'TS', icon: 'typescript-original' },
                                        { name: 'Tailwind', icon: 'tailwindcss-original' },
                                        { name: 'HTML5', icon: 'html5-original' },
                                        { name: 'CSS3', icon: 'css3-original' },
                                        { name: 'Framer', icon: 'framermotion-original', url: 'https://cdn.brandfetch.io/framer.com/icon' } as { name: string; icon: string; url?: string; }
                                    ].map((tech) => (
                                        <div key={tech.name} className="flex flex-col items-center gap-2 group/icon pointer-events-auto" title={tech.name}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl p-2.5 border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center relative z-10">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={tech.url || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon.split('-')[0]}/${tech.icon}.svg`}
                                                    alt={tech.name}
                                                    className="w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & Infra */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden print-card print:p-5">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-purple-500/10 transition-all" />

                                <h4 className="text-lg font-azonix font-normal text-white mb-8 flex items-center gap-3">
                                    <Globe size={20} className="text-accent" />
                                    Backend & Infra
                                </h4>

                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-4">
                                    {[
                                        { name: 'TS', icon: 'typescript-original' },
                                        { name: 'Node.js', icon: 'nodejs-original' },
                                        { name: 'Python', icon: 'python-original' },
                                        { name: 'Supabase', icon: 'supabase-original' },
                                        { name: 'Vercel', icon: 'vercel-original' },
                                        { name: 'Cloudflare', icon: 'cloudflare-original' },
                                        { name: 'PostgreSQL', icon: 'postgresql-original' }
                                    ].map((tech) => (
                                        <div key={tech.name} className="flex flex-col items-center gap-2 group/icon" title={tech.name}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl p-3 border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon.split('-')[0]}/${tech.icon}.svg`}
                                                    alt={tech.name}
                                                    className={`w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-500 ${tech.name === 'Vercel' ? 'p-0.5' : ''}`}
                                                />
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Inteligência Artificial */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden print-card print:p-5">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/10 transition-all" />

                                <h4 className="text-lg font-azonix font-normal text-white mb-8 flex items-center gap-3">
                                    <BrainCircuit size={20} className="text-accent" />
                                    IA Specialist
                                </h4>

                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-4">
                                    {[
                                        { name: 'OpenAI', icon: <Bot size={24} />, color: '#10a37f' },
                                        { name: 'Gemini', icon: <Sparkles size={24} />, color: '#7428f5' },
                                        { name: 'Router', icon: <BrainCircuit size={24} />, color: '#a855f7' },
                                        { name: 'Claude', icon: <Sparkles size={24} />, color: '#d97706' }
                                    ].map((tech) => (
                                        <div key={tech.name} className="flex flex-col items-center gap-2 group/icon" title={tech.name}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl p-2.5 border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center">
                                                <div className="text-zinc-400 group-hover/icon:scale-110 transition-transform duration-500" style={{ color: `var(--hover-color, inherit)` }}>
                                                    {tech.icon}
                                                </div>
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CMS & Pagamentos - REDESIGNED */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden md:col-span-1 print-card print:p-5">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-emerald-500/10 transition-all" />

                                <h4 className="text-lg font-azonix font-normal text-white mb-8 flex items-center gap-3">
                                    <Briefcase size={20} className="text-accent" />
                                    CMS & Pagamentos
                                </h4>

                                <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-4">
                                    {/* WP Core */}
                                    {([
                                        { name: 'WP', icon: 'wordpress-plain' },
                                        { name: 'Woo', url: 'https://cdn.brandfetch.io/woocommerce.com/icon' },
                                        { name: 'Elementor', icon: 'wordpress-plain' },
                                        { name: 'ACF', icon: 'wordpress-plain' },
                                    ] as { name: string; icon?: string; url?: string }[]).map((tech) => (
                                        <div key={tech.name} className="flex flex-col items-center gap-2 group/icon" title={tech.name}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl p-2.5 border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center overflow-hidden">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={tech.url || `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon?.split('-')[0]}/${tech.icon}.svg`}
                                                    alt={tech.name}
                                                    className="w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{tech.name}</span>
                                        </div>
                                    ))}

                                    {/* WP Advanced as "Icon Blocks" */}
                                    {['CPT UI', 'Croco'].map(tool => (
                                        <div key={tool} className="flex flex-col items-center gap-2 group/icon" title={tool}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center">
                                                <span className="text-[10px] font-black text-zinc-500 group-hover/icon:text-accent transition-colors leading-none text-center px-1">
                                                    {tool}
                                                </span>
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{tool}</span>
                                        </div>
                                    ))}

                                    {/* Payments - In the same grid */}
                                    {[
                                        { name: 'Stripe', url: 'https://cdn.brandfetch.io/stripe.com/icon' },
                                        { name: 'Asaas', url: 'https://cdn.brandfetch.io/asaas.com/icon' }
                                    ].map((payment) => (
                                        <div key={payment.name} className="flex flex-col items-center gap-2 group/icon" title={payment.name}>
                                            <div className="w-12 h-12 bg-white/5 rounded-xl p-2.5 border border-white/10 group-hover/icon:border-accent/50 group-hover/icon:bg-accent/5 transition-all duration-300 flex items-center justify-center">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img
                                                    src={payment.url}
                                                    alt={payment.name}
                                                    className="w-full h-full object-contain grayscale group-hover/icon:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap print:opacity-100 print:text-zinc-400">{payment.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Idiomas */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Idiomas
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 print:flex-row print:gap-4">
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border group hover:border-accent transition-colors duration-300 print-card print:p-4">
                                <h4 className="text-lg font-bold text-white mb-1">Português</h4>
                                <p className="text-accent text-sm font-semibold tracking-wide uppercase">Nativo</p>
                            </div>
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border group hover:border-accent transition-colors duration-300 print-card print:p-4">
                                <h4 className="text-lg font-bold text-white mb-1">Inglês</h4>
                                <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-2">Intermediário Técnico</p>
                                <p className="text-zinc-400 text-sm print-text-zinc">Leitura avançada de documentações e estudos técnicos/acadêmicos na <strong className="text-white">JALA University</strong>.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
