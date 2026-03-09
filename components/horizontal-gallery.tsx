import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const items = [
    {
        id: 1,
        title: "Asmat",
        description: "Google PageSpeed no topo. Cargas instantâneas.",
        image: "/imagens/asmat site.jpeg",
    },
    {
        id: 2,
        title: "Dragisele",
        description: "Vitrine luxuosa que reflete sua marca.",
        image: "/imagens/dragisele site.jpeg",
    },
    {
        id: 3,
        title: "Implantomax",
        description: "Estratégia completa de ponta a ponta.",
        image: "/imagens/implantomax site.jpeg",
    },
    {
        id: 4,
        title: "Reptrail",
        description: "Sistemas otimizados para alta conversão digital.",
        image: "/imagens/reptrail.jpeg",
    },
    {
        id: 5,
        title: "Schifler",
        description: "Elegância e autoridade no seu posicionamento online.",
        image: "/imagens/schifler.jpeg",
    },
    {
        id: 6,
        title: "Solumade",
        description: "Infraestrutura escalável para resultados absurdos.",
        image: "/imagens/solumade.jpeg",
    },
    {
        id: 7,
        title: "Kayu",
        description: "Design moderno e elegante para sua marca.",
        image: "/imagens/Kayu.png",
    },
    {
        id: 8,
        title: "Master Quality",
        description: "Excelência e qualidade em cada detalhe.",
        image: "/imagens/Master quality.png",
    },
    {
        id: 9,
        title: "SBC",
        description: "Presença digital forte e impactante.",
        image: "/imagens/SBC site.png",
    },
    {
        id: 10,
        title: "Bragança",
        description: "Soluções visuais que convertem clientes.",
        image: "/imagens/braganca.png",
    },
    {
        id: 11,
        title: "Echlin",
        description: "Performance e design aliados para o sucesso.",
        image: "/imagens/echlin.png",
    },
    {
        id: 12,
        title: "Silvertrend",
        description: "Inovação e tecnologia em um só lugar.",
        image: "/imagens/silvertrend.png",
    },
    {
        id: 13,
        title: "MAAHS",
        description: "Excelência visual e foco em resultados.",
        image: "/imagens/MAAHS.png",
    },
    {
        id: 14,
        title: "Henval",
        description: "Autoridade e confiança no ambiente digital.",
        image: "/imagens/henval.png",
    },
    {
        id: 15,
        title: "Lamobel",
        description: "Estilo e sofisticação para destacar o seu negócio.",
        image: "/imagens/lamobel.png",
    },
    {
        id: 16,
        title: "Pellens",
        description: "Presença online rápida, robusta e escalável.",
        image: "/imagens/pellens.png",
    },
];

export function HorizontalGallery() {
    return (
        <section id="portfolio" className="relative w-full py-20 md:py-32 bg-black border-t border-white/5">
            <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-accent/20 blur-[200px] rounded-full pointer-events-none translate-x-1/2 -z-10" />

            <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full text-center">

                {/* Standardized Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full">
                    <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">Portfólio & Soluções</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-4 md:mb-6">
                        Excelência Comprovada
                    </h2>
                    <p className="text-sm md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
                        O digital não dorme. Venda 24 horas por dia com estabilidade e autoridade.
                    </p>
                </div>

                {/* Symmetric Grid representing Portfolio/Gallery items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group relative flex w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden liquid-glass-card shadow-lg hover:-translate-y-2 cursor-pointer transition-transform duration-500"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover object-top opacity-50 group-hover:opacity-100 transition-opacity duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-10" />

                            <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-white hover:text-black">
                                <ArrowUpRight size={20} />
                            </div>

                            <div className="relative z-20 flex flex-col justify-end p-6 md:p-8 text-left w-full h-full md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight tracking-tight">
                                    {item.title}
                                </h4>
                                <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-200 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
