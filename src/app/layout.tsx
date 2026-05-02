import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CookieConsent } from "@/components/layout/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instalación de Redes de Protección en Málaga | Preventiva Sur",
  description: "Especialistas en instalación de redes de protección para balcones, ventanas y terrazas en Málaga y Andalucía. Resistencia de 150kg/m² y 3 años de garantía.",
  keywords: ["redes de protección málaga", "mallas de seguridad málaga", "redes para balcones málaga", "redes para gatos málaga", "seguridad infantil ventanas málaga", "instalación redes málaga", "mallas anticaídas", "protección terrazas málaga", "Preventiva Sur", "precio redes protección", "presupuesto mallas seguridad", "instaladores redes andalucía"],
  authors: [{ name: "Preventiva Sur", url: "https://preventivasur.com" }],
  creator: "Preventiva Sur",
  publisher: "Preventiva Sur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://preventivasur.com",
    title: "Preventiva Sur | Redes de Protección en Málaga",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Málaga y Andalucía. Protege a tus seres queridos sin sacrificar la estética.",
    siteName: "Preventiva Sur",
    images: [
      {
        url: "https://preventivasur.com/logo-preventiva-sur.png",
        width: 800,
        height: 600,
        alt: "Logo Preventiva Sur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preventiva Sur | Redes de Protección en Málaga",
    description: "Instalación profesional de redes de protección y mallas de seguridad en Málaga y Andalucía.",
    images: ["https://preventivasur.com/logo-preventiva-sur.png"],
  },
  alternates: {
    canonical: "https://preventivasur.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo-preventiva-sur.png",
    shortcut: "/logo-preventiva-sur.png",
    apple: "/logo-preventiva-sur.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Preventiva Sur",
    "image": "https://preventivasur.com/logo-preventiva-sur.png",
    "description": "Especialistas en instalación de redes de protección y mallas de seguridad para balcones, ventanas y terrazas en Málaga y Andalucía.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Málaga",
      "addressRegion": "Andalucía",
      "addressCountry": "ES"
    },
    "url": "https://preventivasur.com",
    "telephone": "+34615744742",
    "email": "contacto@preventivasur.com",
    "priceRange": "$$",
    "areaServed": ["Málaga", "Marbella", "Torremolinos", "Fuengirola", "Benalmádena", "Estepona", "Ronda", "Antequera", "Área Metropolitana de Málaga"],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <WhatsAppButton />
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
