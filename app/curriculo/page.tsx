import { Instagram, Github, Mail, BrainCircuit, ArrowLeft, Briefcase, Bot, Smartphone, Globe, Sparkles } from "lucide-react";
import { PrintButton } from "@/components/print-button";
import Image from "next/image";
import Link from "next/link";

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
                    img {
                        filter: none !important;
                        -webkit-filter: none !important;
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
                            Software Engineer & AI Specialist
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-zinc-400 font-medium mb-10 text-sm md:text-base">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                📍 Curitiba/Piên, PR
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                🚀 +400 Projetos Entregues
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                ⚙️ 7 Anos de Experiência
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent" />
                                🎓 Software Engineering (JALA)
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
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Projetos em Destaque / Produtos Proprietários
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* RepTrail */}
                            <div className="group relative bg-zinc-950/50 border border-white/5 p-6 rounded-3xl hover:border-accent/50 transition-all duration-500 overflow-hidden">
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
                                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
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
                            <div className="group relative bg-zinc-950/50 border border-white/5 p-6 rounded-3xl hover:border-accent/50 transition-all duration-500 overflow-hidden">
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
                                    <div className="flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
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
                                    Formação focada no rigor técnico da engenharia de software norte-americana (<strong className="text-white">Silicon Valley approach</strong>). Aprofundamento contínuo em arquiteturas escaláveis, clean code, algoritmos avançados, e integração de IA.
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

                            <div className="relative md:pl-12 mb-10 group">
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

                            <div className="relative md:pl-12 mb-10 group">
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

                            <div className="relative md:pl-12 mb-8 group">
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
                    <section className="mb-12 print-section">
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-8 text-white">
                            <span className="w-8 h-1 bg-accent rounded-full block no-print" />
                            Hard Skills & Tecnologias
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Frontend & Mobile */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend & Infra */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Inteligência Artificial */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden">
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CMS & Pagamentos - REDESIGNED */}
                            <div className="bg-zinc-950/40 border border-white/5 p-8 rounded-[2rem] hover:border-accent/20 transition-all duration-500 group relative overflow-hidden md:col-span-1">
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{tech.name}</span>
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{tool}</span>
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
                                            <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">{payment.name}</span>
                                        </div>
                                    ))}
                                </div>
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
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border group hover:border-accent transition-colors duration-300">
                                <h4 className="text-lg font-bold text-white mb-1">Português</h4>
                                <p className="text-accent text-sm font-semibold tracking-wide uppercase">Nativo</p>
                            </div>
                            <div className="flex-1 bg-zinc-950/50 border border-white/5 p-6 rounded-2xl print-bg-zinc print-border group hover:border-accent transition-colors duration-300">
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
