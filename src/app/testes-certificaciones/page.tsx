import { Metadata } from "next";
import CertificacionesContent from "./CertificacionesContent";

export const metadata: Metadata = {
    title: "Certificaciones y Resistencia de Redes | Preventiva Sur",
    description: "Conoce la calidad técnica de nuestras redes de protección en Málaga. Resistencia de 150kg/m², tratamiento Anti-UV e instalación certificada.",
    keywords: ["certificación redes seguridad", "resistencia mallas protección", "polietileno alta tenacidad", "redes ignífugas málaga", "Preventiva Sur"],
    alternates: {
        canonical: "https://preventivasur.com/testes-certificaciones",
    },
    openGraph: {
        url: "https://preventivasur.com/testes-certificaciones",
        title: "Certificaciones y Resistencia de Redes | Preventiva Sur",
        description: "Calidad técnica certificada en Málaga. Resistencia de 150kg/m², tratamiento Anti-UV e instalación profesional.",
        images: [{ url: "https://preventivasur.com/logo-preventiva-sur.png", alt: "Preventiva Sur" }],
    },
};

export default function CertificacionesPage() {
    return <CertificacionesContent />;
}
