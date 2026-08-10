import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "./analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/*
 * Metadata central de la landing. baseUrl en metadataBase evita rutas
 * relativas rotas; el template añade el sufijo de marca al title.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://finanzasclaras.ejemplo.com"),
  title: {
    default: "Finanzas Claras | Controla tus finanzas sin hojas de cálculo",
    template: "%s | Finanzas Claras",
  },
  description:
    "Finanzas Claras reúne ingresos, gastos y ahorro en una sola vista. Planifica tu mes en 10 minutos y alcanza tus objetivos de ahorro.",
  applicationName: "Finanzas Claras",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Finanzas Claras",
    title: "Finanzas Claras | Controla tus finanzas sin hojas de cálculo",
    description:
      "Reúne ingresos, gastos y ahorro en una sola vista. Planifica tu mes en 10 minutos.",
    images: [
      {
        url: "/og-portada.png",
        width: 1200,
        height: 630,
        alt: "Panel de Finanzas Claras con presupuesto mensual y objetivo de ahorro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finanzas Claras | Controla tus finanzas sin hojas de cálculo",
    description:
      "Reúne ingresos, gastos y ahorro en una sola vista. Planifica tu mes en 10 minutos.",
    images: ["/og-portada.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      {/* Las fuentes viajan como variables CSS: layout shifts evitados */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#contenido"
          className="sr-only z-50 rounded-lg bg-white px-4 py-2 focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}