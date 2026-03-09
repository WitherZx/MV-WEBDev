import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-raleway" });

export const metadata: Metadata = {
  title: "MV WEB DEV | Sites e Apps de Alta Performance",
  description: "Criação de sites exclusivos, rápidos e focados em conversão. Desenvolva sua presença digital com tecnologia de ponta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${montserrat.className} ${raleway.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
