import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arkeim | Arquitectura · Diseño · Construcción",
  description:
    "En Arkeim concebimos la arquitectura como un proceso integral donde diseño, normativa y construcción trabajan en conjunto. Arquitectura con criterio. Proyectos que se construyen.",
  keywords: ["arquitectura", "diseño", "construcción", "Arkeim", "Colombia"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="noise-bg">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
