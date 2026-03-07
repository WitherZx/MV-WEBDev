import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { BentoFeatures } from "@/components/bento-features";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { ScrollText } from "@/components/scroll-text";
import { TechMarquee } from "@/components/tech-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductReveal } from "@/components/product-reveal";

export default function Home() {
  return (
    <main className="relative bg-black text-white min-h-screen w-full overflow-clip selection:bg-accent/40 selection:text-white">
      <Navbar />

      <div className="flex flex-col w-full relative z-0">
        <Hero />

        <ScrollText text="VISIBILIDADE CREDIBILIDADE ALTA CONVERSÃO LUCRO IMEDIATO" />

        <ProductReveal />

        <div className="py-20 bg-zinc-950/20 backdrop-blur-3xl relative z-20">
          <Stats />
        </div>

        <BentoFeatures />

        <TechMarquee />

        <HorizontalGallery />

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-black relative w-full border-t border-white/5">
          <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
            <div className="relative rounded-[2rem] md:rounded-[3rem] p-8 py-14 md:p-24 text-center liquid-glass-card shadow-[0_30px_100px_rgba(116,40,245,0.15)] flex flex-col items-center justify-center w-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

              <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4 md:mb-6 relative z-10">
                Pronto para ir ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Topo?</span>
              </h2>
              <p className="text-sm md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 relative z-10">
                Não deixe para amanhã as vendas que o seu site blindado e focado em conversão pode começar a gerar hoje.
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=554198364028"
                target="_blank"
                className="magic-button flex items-center justify-center gap-2 md:gap-3 px-8 py-4 md:px-14 md:py-6 text-sm md:text-2xl font-black uppercase tracking-widest shadow-[0_0_40px_rgba(116,40,245,0.4)] relative z-10 w-full sm:w-auto"
              >
                Inicie Seu Projeto
              </a>
            </div>
          </div>
        </section>

        {/* Footer Base */}
        <footer className="py-12 bg-zinc-950 border-t border-white/5 w-full">
          <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6 w-full text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-3xl font-black tracking-tighter text-white mb-2">
                MV WEB <span className="text-accent underline underline-offset-4 decoration-white/20">DEV</span>
              </span>
              <p className="text-zinc-500 font-medium text-sm tracking-widest uppercase mt-2">Curitiba, Brasil • Para o mundo.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs md:text-sm font-bold text-zinc-400 uppercase tracking-widest">
              <a href="#home" className="hover:text-white transition-colors">Início</a>
              <a href="#beneficios" className="hover:text-white transition-colors">Público</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a>
            </div>

            <div className="text-zinc-600 font-medium text-xs md:text-sm tracking-wide">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>

      <WhatsAppButton />
    </main>
  );
}
