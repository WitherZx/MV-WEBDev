import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { BentoFeatures } from "@/components/bento-features";
import { HorizontalGallery } from "@/components/horizontal-gallery";
import { ScrollText } from "@/components/scroll-text";
import { TechMarquee } from "@/components/tech-marquee";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ProductReveal } from "@/components/product-reveal";
import { AboutMe } from "@/components/about-me";
import { Testimonials } from "@/components/testimonials";
import { Instagram, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-black text-white min-h-screen w-full overflow-clip selection:bg-accent/40 selection:text-white">

        <div className="flex flex-col w-full relative z-0">
          <Hero />

          <HorizontalGallery />

          <Testimonials />

          <ScrollText text="VISIBILIDADE CREDIBILIDADE ALTA CONVERSÃO LUCRO IMEDIATO" />

          <AboutMe />

          <div className="py-20 bg-zinc-950/20 backdrop-blur-3xl relative z-20">
            <Stats />
          </div>

          <BentoFeatures />

          <ProductReveal />

          <TechMarquee />

          {/* CTA Section */}
          <section className="py-20 md:py-32 bg-black relative w-full border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
              <div className="relative rounded-[2rem] md:rounded-[3rem] p-8 py-14 md:p-24 text-center liquid-glass-card shadow-[0_30px_100px_rgba(116,40,245,0.15)] flex flex-col items-center justify-center w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

                <h2 className="text-3xl md:text-6xl lg:text-7xl font-azonix font-normal text-white mb-4 md:mb-6 relative z-10 tracking-normal">
                  Pronto para ir ao <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Topo?</span>
                </h2>
                <p className="text-sm md:text-2xl text-zinc-400 font-medium leading-relaxed max-w-3xl mx-auto mb-8 md:mb-12 relative z-10">
                  Não deixe para amanhã as vendas que o seu site blindado e focado em conversão pode começar a gerar hoje.
                </p>

                <a
                  href="https://api.whatsapp.com/send?phone=554198364028"
                  target="_blank"
                  className="magic-button flex items-center justify-center gap-2 md:gap-3 px-8 py-4 md:px-14 md:py-6 text-sm md:text-2xl font-semibold uppercase tracking-widest shadow-[0_0_40px_rgba(116,40,245,0.4)] relative z-10 w-full sm:w-auto"
                >
                  Inicie Seu Projeto
                </a>
              </div>
            </div>
          </section>

          {/* Footer Base */}
          <footer className="relative pt-16 pb-8 md:pt-24 md:pb-8 bg-black border-t border-white/5 w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(116,40,245,0.15),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl flex flex-col items-center gap-12 w-full text-center relative z-10">

              {/* Logo & Slogan */}
              <div className="flex flex-col items-center gap-4 cursor-default">
                <span className="text-4xl md:text-6xl font-raleway font-black tracking-tighter text-white hover:scale-105 transition-transform duration-500">
                  MV WEB <span className="text-accent underline underline-offset-8 decoration-accent">DEV</span>
                </span>
                <p className="text-zinc-400 font-semibold text-xs md:text-sm tracking-[0.3em] uppercase mt-2">
                  Curitiba, Brasil • Para o Mundo
                </p>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-14 text-xs md:text-sm font-semibold text-zinc-500 uppercase tracking-widest">
                <a href="#home" className="hover:text-accent transition-colors">Início</a>
                <a href="#sobre" className="hover:text-accent transition-colors">Sobre Mim</a>
                <a href="#beneficios" className="hover:text-accent transition-colors">Serviços</a>
                <a href="#portfolio" className="hover:text-accent transition-colors">Portfólio</a>
                <Link href="/curriculo" className="hover:text-accent transition-colors">Currículo</Link>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 md:gap-6 text-zinc-500">
                <a href="https://api.whatsapp.com/send?phone=554198364028" target="_blank" className="p-3 md:p-4 rounded-full border border-white/5 bg-white/5 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" /></svg>
                </a>
                <a href="mailto:marcos.contatoprof@gmail.com" className="p-3 md:p-4 rounded-full border border-white/5 bg-white/5 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <Mail size={20} />
                </a>
                <a href="https://instagram.com/_devmarcos" target="_blank" className="p-3 md:p-4 rounded-full border border-white/5 bg-white/5 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/WitherZx" target="_blank" className="p-3 md:p-4 rounded-full border border-white/5 bg-white/5 hover:bg-accent hover:text-white hover:border-accent hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] hover:-translate-y-1 transition-all duration-300">
                  <Github size={20} />
                </a>
              </div>

              {/* Divider & Copyright */}
              <div className="w-full flex flex-col items-center gap-8 mt-4 md:mt-8">
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="text-zinc-600 font-medium text-xs md:text-sm tracking-wide">
                  © {new Date().getFullYear()} Marcos V. Web Dev. Todos os direitos reservados.
                </div>
              </div>

            </div>
          </footer>
        </div>

        <WhatsAppButton />
      </main>
    </>
  );
}
