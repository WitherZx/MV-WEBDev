import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["800", "900"], variable: "--font-raleway" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mvwebdev.com.br"),
  title: "MV WEB DEV | Sites e Apps de Alta Performance",
  description: "Criação de sites exclusivos, rápidos e focados em conversão. Desenvolva sua presença digital com tecnologia de ponta.",
  icons: {
    icon: "/imagens/icone.png?v=1",
    apple: "/imagens/icone.png?v=1",
  },
  openGraph: {
    title: "MV WEB DEV | Sites e Apps de Alta Performance",
    description: "Criação de sites exclusivos, rápidos e focados em conversão.",
    images: ["/imagens/icone.png?v=1"],
  },
  twitter: {
    card: "summary_large_image",
    title: "MV WEB DEV | Sites e Apps de Alta Performance",
    description: "Criação de sites exclusivos, rápidos e focados em conversão.",
    images: ["/imagens/icone.png?v=1"],
  },
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
