"use client";


export default function CurriculoSimplesPage() {
    return (
        <main className="bg-white text-black min-h-screen p-6 md:p-10 font-serif max-w-[210mm] mx-auto text-[14px]">
            {/* Header */}
            <header className="border-b border-black pb-3 mb-4 text-center">
                <h1 className="text-3xl font-bold uppercase mb-1">Marcos Vinicius da Rosa Gomes</h1>
                <p className="text-lg font-semibold mb-2 text-gray-700">Software Engineer & AI Specialist</p>
                
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm italic">
                    <span>Local: Curitiba/Piên, PR</span>
                    <span>Email: marcos.contatoprof@gmail.com</span>
                    <span>Tel: +55 (41) 99836-4028</span>
                    <span>Site: mvwebdev.com.br</span>
                </div>
            </header>

            {/* Perfil */}
            <section className="mb-4">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Perfil Profissional</h2>
                <p className="text-justify leading-relaxed">
                    Engenheiro de Software com mais de 7 anos de experiência e foco na criação de ecossistemas complexos e aplicativos baseados em Inteligência Artificial. Expertise na entrega de mais de 400 projetos, desde landing pages de alta conversão até sistemas mobile e web integrados com LLMs (Gemini, OpenAI). Veia empreendedora com foco em métricas de negócio e performance técnica.
                </p>
            </section>

            {/* Experiência */}
            <section className="mb-4">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-3">Experiência Profissional</h2>
                
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-lg">Co-Founder & Mobile/Web Developer</h3>
                            <span className="text-sm font-bold">H&O Apps | 2025 – 2026</span>
                        </div>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Liderança técnica e arquitetura de sistemas mobile utilizando React Native e Expo.</li>
                            <li>Desenvolvimento ponta-a-ponta de produtos proprietários de larga escala.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-lg">Web Developer Pleno</h3>
                            <span className="text-sm font-bold">V4 Company (Oxicore) | 2021 – 2026</span>
                        </div>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Desenvolvimento de interfaces de alta conversão (CRO) para grandes e-commerces.</li>
                            <li>Implementação de automações complexas e ecossistemas de dados para otimização de tráfego.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-lg">Tech Lead & Fullstack Developer</h3>
                            <span className="text-sm font-bold">Freelance / Workana / 99Freelas | 2020 – Atual</span>
                        </div>
                        <ul className="list-disc ml-5 space-y-1 text-sm">
                            <li>Entrega de mais de 400 projetos globais com foco em Next.js, AI e Supabase.</li>
                            <li>Liderança técnica em projetos escaláveis para diversos nichos de mercado.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Formação */}
            <section className="mb-4">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Formação Acadêmica</h2>
                <div className="flex justify-between items-baseline">
                    <h3 className="font-bold">B.S. em Engenharia de Software</h3>
                    <span className="text-sm font-bold">JALA University (EUA) – Cursando</span>
                </div>
                <p className="text-sm italic">Foco em arquiteturas escaláveis, algoritmos avançados e integração de IA sob o rigor técnico do mercado norte-americano.</p>
            </section>

            {/* Habilidades */}
            <section className="mb-4">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-2">Principais Habilidades</h2>
                <div className="grid grid-cols-2 gap-x-8 text-sm">
                    <ul className="list-disc ml-5">
                        <li><strong>Frontend/Mobile:</strong> React, Next.js, React Native, TypeScript, Tailwind CSS.</li>
                        <li><strong>Backend/Infra:</strong> Node.js, Python, Supabase, PostgreSQL, Cloudflare.</li>
                    </ul>
                    <ul className="list-disc ml-5">
                        <li><strong>IA Especialista:</strong> Integração de LLMs, OpenAI, Gemini, AI Agents.</li>
                        <li><strong>CMS & Payments:</strong> WordPress, WooCommerce, Stripe, Asaas.</li>
                    </ul>
                </div>
            </section>

            {/* Idiomas */}
            <section className="mb-2">
                <h2 className="text-lg font-bold uppercase border-b border-black mb-1">Idiomas</h2>
                <p className="text-sm"><strong>Português:</strong> Nativo | <strong>Inglês:</strong> Intermediário Técnico (Leitura avançada de documentações acadêmicas).</p>
            </section>

            {/* Print styling */}
            <style jsx global>{`
                @media print {
                    body { background: white !important; }
                    main { padding: 0 !important; margin: 0 !important; }
                    .no-print { display: none !important; }
                }
            `}</style>
        </main>
    );
}
