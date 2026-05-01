import { Metadata } from "next";
import ProteccionContent from "./ProteccionContent";

export const metadata: Metadata = {
    title: "Redes de Protección en Málaga | Niños, Gatos y Aves",
    description: "Protección integral para tu hogar en Málaga. Mallas certificadas para seguridad infantil, protección de gatos y control de aves. Instalación profesional en 24h.",
    keywords: ["redes para gatos málaga", "seguridad infantil málaga", "control de aves málaga", "mallas de seguridad balcones", "protección ventanas niños", "Preventiva Sur"],
    alternates: {
        canonical: "https://preventivasur.com/proteccion",
    },
    openGraph: {
        url: "https://preventivasur.com/proteccion",
        title: "Redes de Protección en Málaga | Niños, Gatos y Aves",
        description: "Protección integral para tu hogar en Málaga. Mallas certificadas para seguridad infantil, protección de gatos y control de aves.",
        images: [{ url: "https://preventivasur.com/logo-preventiva-sur.png", alt: "Preventiva Sur" }],
    },
};

export default function ProteccionPage() {
    return <ProteccionContent />;
}
