"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        const id = setTimeout(() => setIsVisible(!consent), 0);
        return () => clearTimeout(id);
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#4d2a36] text-white p-4 z-50 shadow-lg border-t border-[#4d2a36]/50">
            <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-300">
                    <p>
                        Utilizamos únicamente cookies técnicas necesarias para el funcionamiento del sitio; no usamos cookies de análisis ni publicidad. Más información en nuestra{" "}
                        <Link href="/politica-privacidad" className="text-yellow-400 hover:text-yellow-300 underline">
                            Política de Privacidad
                        </Link>.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-bold rounded-full transition-colors whitespace-nowrap"
                    >
                        Aceptar
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Cerrar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
