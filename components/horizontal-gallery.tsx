"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "Asmat",
    niche: "Cooperativa de Crédito",
    description: "Acessibilidade e segurança financeira no digital.",
    longDescription:
      "A Asmat precisava de um portal seguro e direto que facilitasse o acesso dos cooperados aos serviços financeiros. Desenvolvemos uma vitrine digital com foco em desempenho, transmitindo total credibilidade para novos associados da cooperativa.",
    imageSrc: "/imagens/asmat site.jpeg",
  },
  {
    id: 2,
    title: "Dra Gisele",
    niche: "Estética e Beleza",
    description: "Vitrine luxuosa que reflete cuidado e elegância.",
    longDescription:
      "A Dra. Gisele atua no universo da estética, oferecendo tratamentos faciais e corporais. Criamos um site voltado à conversão e agendamentos, transmitindo uma imagem clean e moderna que passa confiança desde o primeiro clique.",
    imageSrc: "/imagens/dragisele site.jpeg",
  },
  {
    id: 3,
    title: "Implantomax",
    niche: "Clínica Odontológica",
    description: "Estratégia completa de ponta a ponta.",
    longDescription:
      "Trazendo a área de implantes dentários para a vanguarda tecnológica, o projeto da Implantomax foi estruturado com foco maciço em conversões e agendamento de avaliações, impulsionado por gatilhos de confiança em cada página.",
    imageSrc: "/imagens/implantomax site.jpeg",
  },
  {
    id: 4,
    title: "Reptrail",
    niche: "Soluções SaaS & Tecnologia",
    description: "Sistemas otimizados para alta conversão digital.",
    longDescription:
      "Focada em entregar sistemas de alta escala, a Reptrail demandava um site corporativo que espelhasse eficiência máxima. Implantamos um layout limpo, moderno e direto, provando a qualidade de seu software num piscar de olhos.",
    imageSrc: "/imagens/reptrail.jpeg",
  },
  {
    id: 5,
    title: "Schifler",
    niche: "Máquinas e Equipamentos",
    description: "Ferramentas de corte com performance e tecnologia.",
    longDescription:
      "A Schifler atua no fornecimento de máquinas e soluções para corte de madeira e materiais pesados. A estrutura arquitetada para o site destaca o catálogo técnico de forma fluida, atendendo negócios do setor B2B com total autoridade.",
    imageSrc: "/imagens/schifler.jpeg",
  },
  {
    id: 6,
    title: "Solumade",
    niche: "Sustentabilidade & Madeiras",
    description: "Infraestrutura escalável para resultados absurdos.",
    longDescription:
      "Entregando projetos complexos focado em sustentabilidade ambiental. A arquitetura de software desenhada garante conversão orgânica focada na dor exata do cliente de materiais renováveis.",
    imageSrc: "/imagens/solumade.jpeg",
  },
  {
    id: 7,
    title: "Kayu",
    niche: "Móveis & Design de Interiores",
    description: "Design moderno e elegante para sua marca.",
    longDescription:
      "A essência de Kayu é a natureza em forma de mobilia. O conceito visual se baseou no minimalismo contemporâneo: muitas imagens amplas em uma base off-white, entregando uma das mais sofisticadas galerias de peças já criadas.",
    imageSrc: "/imagens/Kayu.png",
  },
  {
    id: 8,
    title: "Master Quality",
    niche: "Manutenção & Indústria",
    description: "Excelência e qualidade em cada detalhe.",
    longDescription:
      "Portal corporativo visando contato rápido do modelo B2B (empresas para empresas). Página limpa técnica e projetada para focar na autoridade do trabalho e garantias de entrega de nível 'Master'.",
    imageSrc: "/imagens/Master quality.png",
  },
  {
    id: 9,
    title: "SBC",
    niche: "Manutenção & Indústria",
    description: "Presença corporativa focada em parcerias B2B.",
    longDescription:
      "Assim como no setor de qualidade industrial, a SBC precisava expor suas soluções em manutenção de forma técnica e ágil. Desenvolvemos um site corporativo com fluxos otimizados para captura de orçamentos de empresas parceiras no topo do funil.",
    imageSrc: "/imagens/SBC site.png",
  },
  {
    id: 10,
    title: "Bragança",
    niche: "Imobiliária de Alto Padrão",
    description: "Soluções visuais que convertem clientes.",
    longDescription:
      "Investidores e imobiliárias requintadas avaliam pela sofisticação do projeto. A experiência projetada pro usuário da Bragança enaltece fotografias dos casarões e plantas arquitetônicas mantendo uma paleta de pura grife.",
    imageSrc: "/imagens/braganca.png",
  },
  {
    id: 11,
    title: "Echlin",
    niche: "Catálogo & Indústria de Peças",
    description: "Performance e design aliados para o sucesso.",
    longDescription:
      "A gigantesca marca Echlin abriga centenas de milhares de linhas mecânicas. Focamos num portal veloz que agiliza a pesquisa do técnico interessado numa fluidez digna do cliente final moderno sem poluição.",
    imageSrc: "/imagens/echlin.png",
  },
  {
    id: 12,
    title: "Silvertrend",
    niche: "Estruturas de Alumínio (EUA)",
    description: "Fabricação de Pool Cages e projetos externos.",
    longDescription:
      "Uma companhia americana especializada em estruturas de alumínio como as famosas Pool Cages. O desafio foi transmitir o valor premium nas montagens arquitetônicas por meio de amplas galerias de fotos de alta resolução focadas em converter proprietários em fechar negócio.",
    imageSrc: "/imagens/silvertrend.png",
  },
  {
    id: 13,
    title: "MAAHS",
    niche: "Extração de Pedras e Materiais",
    description: "Material bruto de qualidade para a construção civil.",
    longDescription:
      "Serviço bruto exige credibilidade. A MAAHS foca na extração de pedras e distribuição de materiais de construção fundamentais. Criamos um portal que detalha a qualidade dos minerais e apresenta fácil comunicação comercial interligando grandes contratantes à jazida.",
    imageSrc: "/imagens/MAAHS.png",
  },
  {
    id: 14,
    title: "Henval",
    niche: "Componentes & Válvulas Industriais",
    description: "Autoridade e confiança no ambiente digital.",
    longDescription:
      "A engenharia pesada do segmento corporativo precisa transmitir robustez até mesmo no site institucional. Aqui mostramos que a empresa investe e respeita seus processos logísticos desde o primeiro front-end até os servidores do Google.",
    imageSrc: "/imagens/henval.png",
  },
  {
    id: 15,
    title: "Lamobel",
    niche: "Marcenaria Exclusiva",
    description: "Estilo e sofisticação para destacar o seu negócio.",
    longDescription:
      "Estilo e marcenaria premium feitos sob-medida no site planejado milimetricamente. Formulários diretos para plantas das cozinhas de luxo que retém o cliente por causa do visual do estande digital de vendas.",
    imageSrc: "/imagens/lamobel.png",
  },
  {
    id: 16,
    title: "Pellens",
    niche: "Colchões & Conforto",
    description: "Conforto e qualidade desde o primeiro clique.",
    longDescription:
      "Para uma empresa de colchões, o conforto deve ser sentido antes mesmo da compra. Desenvolvemos um site rápido, visualmente aconchegante e otimizado para guiar o cliente na escolha do colchão ideal, focando na elevação das conversões e no design responsivo.",
    imageSrc: "/imagens/pellens.png",
  },
];

export function HorizontalGallery() {
  const [selectedItem, setSelectedItem] = useState<CardStackItem | null>(null);

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 md:py-32 bg-black border-t border-white/5 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute top-0 right-1/2 w-[800px] h-[800px] bg-accent/15 blur-[200px] rounded-full pointer-events-none translate-x-1/2 -z-10" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10 w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 w-full">
          <span className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4 block">
            Portfólio &amp; Soluções
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-azonix font-normal text-white mb-4 md:mb-6">
            Excelência Comprovada
          </h2>
          <p className="text-sm md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
            O digital não dorme. Venda 24 horas por dia com estabilidade e autoridade.
          </p>
          <p className="text-xs text-zinc-600 mt-3 font-medium">
            Arraste ou use as setas do teclado para explorar
          </p>
        </div>

        {/* Card Stack — fan deck */}
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
          cardWidth={520}
          cardHeight={330}
          overlap={0.48}
          spreadDeg={44}
          maxVisible={7}
          renderCard={(item, { active }) => (
            <div
              className="relative h-full w-full bg-zinc-900 cursor-pointer"
              onClick={() => active && setSelectedItem(item)}
            >
              {/* thumbnail */}
              <div className="absolute inset-0">
                {item.imageSrc ? (
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="520px"
                    className="object-cover object-top"
                    draggable={false}
                    priority={active}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-900 text-sm text-zinc-500">
                    Sem imagem
                  </div>
                )}
              </div>

              {/* gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* active ring */}
              {active && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-accent/70" />
              )}

              {/* content */}
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <div className="text-xl md:text-2xl font-semibold text-white truncate">
                  {item.title}
                </div>
                {item.description && (
                  <div className="mt-1 line-clamp-2 text-sm text-white/80 font-medium">
                    {item.description}
                  </div>
                )}
              </div>
            </div>
          )}
        />
      </div>

      {/* Detail Modal */}
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
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(116,40,245,0.25)]"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 hover:bg-white/10 text-white flex items-center justify-center backdrop-blur-md transition-colors z-30 cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>
              <div className="relative w-full aspect-video">
                <Image
                  src={selectedItem.imageSrc ?? ""}
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
                  <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  <h4 className="text-zinc-400 font-medium">
                    {selectedItem.description}
                  </h4>
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
