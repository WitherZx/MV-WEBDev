"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Asmat",
        niche: "Engenharia & Arquitetura",
        description: "Google PageSpeed no topo. Cargas instantâneas.",
        longDescription: "A Asmat precisava de um portal moderno e direto que refletisse a precisão dos seus projetos estruturais. Desenvolvemos uma vitrine digital focada na performance máxima de carregamento, permitindo que os clientes navegassem pelos variados portfólios de engenharia sem qualquer engasgo de carregamento.",
        image: "/imagens/asmat site.jpeg",
    },
    {
        id: 2,
        title: "Dragisele",
        niche: "Medicina \& Estética Avançada",
        description: "Vitrine luxuosa que reflete sua marca.",
        longDescription: "A Dra. Gisele atua no exigente universo da estética facial e corporal. Criamos um site altamente premium, luxuoso e responsivo que enaltece a qualidade do atendimento clínico. O lead já chega aquecido, sentindo exclusividade desde o primeiro clique.",
        image: "/imagens/dragisele site.jpeg",
    },
    {
        id: 3,
        title: "Implantomax",
        niche: "Clínica Odontológica",
        description: "Estratégia completa de ponta a ponta.",
        longDescription: "Trazendo a área de implantes dentários para a vanguarda tecnológica, o projeto da Implantomax foi estruturado com foco maciço em conversões e agendamento de avaliações, impulsionado por gatilhos de confiança em cada página.",
        image: "/imagens/implantomax site.jpeg",
    },
    {
        id: 4,
        title: "Reptrail",
        niche: "Soluções SaaS \& Tecnologia",
        description: "Sistemas otimizados para alta conversão digital.",
        longDescription: "Focada em entregar sistemas de alta escala, a Reptrail demandava um site corporativo que espelhasse eficiência máxima. Implantamos um layout limpo, moderno e direto, provando a qualidade de seu software num piscar de olhos.",
        image: "/imagens/reptrail.jpeg",
    },
    {
        id: 5,
        title: "Schifler",
        niche: "Estúdio de Advocacia",
        description: "Elegância e autoridade no seu posicionamento online.",
        longDescription: "Buscando exalar credibilidade em transações jurídicas pesadas, a linguagem visual do escritório Schifler conta com tipografia clássica, cores sóbrias e uma arquitetura focada em instigar o cliente à marcar sua consultoria consultiva.",
        image: "/imagens/schifler.jpeg",
    },
    {
        id: 6,
        title: "Solumade",
        niche: "Sustentabilidade \& Madeiras",
        description: "Infraestrutura escalável para resultados absurdos.",
        longDescription: "Entregando projetos complexos focado em sustentabilidade ambiental. A arquitetura de software desenhada garante conversão orgânica focada na dor exata do cliente de materiais renováveis.",
        image: "/imagens/solumade.jpeg",
    },
    {
        id: 7,
        title: "Kayu",
        niche: "Móveis & Design de Interiores",
        description: "Design moderno e elegante para sua marca.",
        longDescription: "A essência de Kayu é a natureza em forma de mobilia. O conceito visual se baseou no minimalismo contemporâneo: muitas imagens amplas em uma base off-white, entregando uma das mais sofisticadas galerias de peças já criadas.",
        image: "/imagens/Kayu.png",
    },
    {
        id: 8,
        title: "Master Quality",
        niche: "Manutenção & Indústria",
        description: "Excelência e qualidade em cada detalhe.",
        longDescription: "Portal corporativo visando contato rápido do modelo B2B (empresas para empresas). Página limpa técnica e projetada para focar na autoridade do trabalho e garantias de entrega de nível 'Master'.",
        image: "/imagens/Master quality.png",
    },
    {
        id: 9,
        title: "SBC",
        niche: "Consultoria \& Contabilidade",
        description: "Presença digital forte e impactante.",
        longDescription: "Soluções empresariais requerem layout claro e navegação óbvia. A Sociedade Brasileira tem a vantagem de ter as sub-áreas delineadas na Home para capturar os usuários do Google assim que aterrissam na página do topo de funil.",
        image: "/imagens/SBC site.png",
    },
    {
        id: 10,
        title: "Bragança",
        niche: "Imobiliária de Alto Padrão",
        description: "Soluções visuais que convertem clientes.",
        longDescription: "Investidores e imobiliárias requintadas avaliam pela sofisticação do projeto. A experiência projetada pro usuário da Bragança enaltece fotografias dos casarões e plantas arquitetônicas mantendo uma paleta de pura grife.",
        image: "/imagens/braganca.png",
    },
    {
        id: 11,
        title: "Echlin",
        niche: "Catálogo \& Indústria de Peças",
        description: "Performance e design aliados para o sucesso.",
        longDescription: "A gigantesca marca Echlin abriga centenas de milhares de linhas mecânicas. Focamos num portal veloz que agiliza a pesquisa do técnico interessado numa fluidez digna do cliente final moderno sem poluição.",
        image: "/imagens/echlin.png",
    },
    {
        id: 12,
        title: "Silvertrend",
        niche: "E-Commerce de Pratas e Joias",
        description: "Inovação e tecnologia em um só lugar.",
        longDescription: "Pratas demandam luz e destaque extremo do produto focado 100% no catálogo com fundo limpo. Tudo foi pensado pra evitar atrito no carrinho de finalização de vendas de moda elegante no Shopify/Woocommerce.",
        image: "/imagens/silvertrend.png",
    },
    {
        id: 13,
        title: "MAAHS",
        niche: "Estúdio de Projetos Majestosos",
        description: "Excelência visual e foco em resultados.",
        longDescription: "Um estúdio em seu próprio patamar de criatividade. Animações vívidas percorrem os scrolls deste site e acompanham as ações do projeto entregue como um verdadeiro passeio arquitetônico que convence todo investidor.",
        image: "/imagens/MAAHS.png",
    },
    {
        id: 14,
        title: "Henval",
        niche: "Componentes \& Válvulas Industriais",
        description: "Autoridade e confiança no ambiente digital.",
        longDescription: "A engenharia pesada do segmento corporativo precisa transmitir robustez até mesmo no site institucional. Aqui mostramos que a empresa investe e respeita seus processos logísticos desde o primeiro front-end até os servidores do Google.",
        image: "/imagens/henval.png",
    },
    {
        id: 15,
        title: "Lamobel",
        niche: "Marcenaria Exclusiva",
        description: "Estilo e sofisticação para destacar o seu negócio.",
        longDescription: "Estilo e marcenaria premium feitos sob-medida no site planejado milimetricamente. Formulários diretos para plantas das cozinhas de luxo que retém o cliente por causa do visual do estande digital de vendas.",
        image: "/imagens/lamobel.png",
    },
    {
        id: 16,
        title: "Pellens",
        niche: "Odontologia & Procedimentos Clínicos",
        description: "Presença online rápida, robusta e escalável.",
        longDescription: "Tanto tempo da cadeira da Clínica necessita que o paciente chegue confiante na autoridade do Doutor de cara. Um site aconchegante mas super tecnológico no agendamento e no disparo da urgência.",
        image: "/imagens/pellens.png",
    },
];

export function HorizontalGallery() {
    const [selectedItem, setSelectedItem] = useState<typeof items[0] | null>(null);

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
                            onClick={() => setSelectedItem(item)}
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

            {/* Modal de Detalhes do Cliente */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(116,40,245,0.2)]"
                        >
                            <button
                                onClick={() => setSelectedItem(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-white/10 text-white flex items-center justify-center backdrop-blur-md transition-colors z-30"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative w-full aspect-video">
                                <Image
                                    src={selectedItem.image}
                                    alt={selectedItem.title}
                                    fill
                                    className="object-cover object-top opacity-80"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
                            </div>
                            <div className="p-8 md:p-10 text-left relative z-10 -mt-20">
                                <div className="mb-6">
                                    <span className="inline-block px-3 py-1 rounded-full bg-accent/20 border border-accent/50 text-accent text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-4">
                                        {selectedItem.niche}
                                    </span>
                                    <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">{selectedItem.title}</h3>
                                    <h4 className="text-zinc-400 font-medium">{selectedItem.description}</h4>
                                </div>
                                <div className="w-full h-[1px] bg-white/10 mb-6" />
                                <p className="text-zinc-300 leading-relaxed font-medium text-sm sm:text-base">
                                    {selectedItem.longDescription}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
