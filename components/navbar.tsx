"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Início", href: "/#home" },
    { name: "Portfólio", href: "/#portfolio" },
    { name: "Depoimentos", href: "/#depoimentos" },
    { name: "Sobre", href: "/#sobre" },
    { name: "Serviços", href: "/#beneficios" },
    { name: "Currículo", href: "/curriculo" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full border-b outline-none",
                    isScrolled
                        ? "py-4 bg-black/80 backdrop-blur-2xl border-white/5 shadow-2xl"
                        : "py-6 bg-transparent border-transparent shadow-none"
                )}
            >
                <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-raleway font-black tracking-tighter text-white">
                        MV WEB <span className="text-accent underline decoration-accent underline-offset-4">DEV</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-10">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[13px] font-semibold text-zinc-400 hover:text-white transition-all uppercase tracking-[0.1em]"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="https://api.whatsapp.com/send?phone=554198364028"
                            target="_blank"
                            className="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-accent hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] active:scale-95 ml-4"
                        >
                            Fale Comigo
                        </Link>
                    </nav>

                    {/* Mobile Toggle (Hamburger) */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] md:hidden transition-opacity duration-300",
                    mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer (Right Sidebar) */}
            <div
                className={cn(
                    "fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-zinc-950 border-l border-white/5 z-[90] md:hidden transition-transform duration-300 ease-in-out p-6 flex flex-col shadow-2xl",
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex items-center justify-between mb-12">
                    <Link href="/" className="text-xl font-raleway font-black tracking-tighter text-white" onClick={() => setMobileMenuOpen(false)}>
                        MV WEB <span className="text-accent underline decoration-accent underline-offset-4">DEV</span>
                    </Link>
                    <button
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col gap-6 font-semibold text-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-zinc-300 hover:text-accent transition-colors border-b border-white/5 pb-4 uppercase tracking-widest text-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <Link
                        href="https://api.whatsapp.com/send?phone=554198364028"
                        target="_blank"
                        className="flex w-full py-4 justify-center rounded-xl bg-white text-black text-center text-sm font-semibold uppercase tracking-widest shadow-lg transition-all duration-300 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(116,40,245,0.4)] hover:-translate-y-1 active:scale-95"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Falar no WhatsApp
                    </Link>
                </div>
            </div>
        </>
    );
}
