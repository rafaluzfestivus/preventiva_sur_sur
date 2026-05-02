"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const provinces = [
    { name: "Málaga", highlight: true, cities: "Marbella · Torremolinos · Fuengirola · Benalmádena · Estepona · Vélez-Málaga" },
    { name: "Sevilla", highlight: false, cities: "Dos Hermanas · Alcalá de Guadaíra · Utrera · Écija" },
    { name: "Granada", highlight: false, cities: "Motril · Almuñécar · Loja · Guadix" },
    { name: "Córdoba", highlight: false, cities: "Lucena · Montilla · Puente Genil · Cabra" },
    { name: "Cádiz", highlight: false, cities: "Jerez · Algeciras · La Línea · San Fernando" },
    { name: "Almería", highlight: false, cities: "Roquetas · El Ejido · Adra · Vícar" },
    { name: "Huelva", highlight: false, cities: "Lepe · Isla Cristina · Ayamonte · Almonte" },
    { name: "Jaén", highlight: false, cities: "Linares · Úbeda · Baeza · Andújar" },
];

export function ServiceArea() {
    return (
        <section id="area-servicio" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
                        <MapPin className="w-4 h-4" />
                        Cobertura geográfica
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Málaga y Toda Andalucía
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Instalamos redes de protección en las ocho provincias andaluzas.
                        Nuestra base está en Málaga pero llegamos a toda la comunidad.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {provinces.map((province, index) => (
                        <motion.div
                            key={province.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.07 }}
                            viewport={{ once: true }}
                            className={`rounded-2xl p-6 border ${
                                province.highlight
                                    ? "bg-[#4d2a36] border-[#4d2a36] text-white"
                                    : "bg-gray-50 border-gray-200 text-slate-800"
                            }`}
                        >
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className={`w-5 h-5 ${province.highlight ? "text-yellow-400" : "text-yellow-500"}`} />
                                <h3 className={`text-xl font-bold ${province.highlight ? "text-yellow-400" : "text-slate-900"}`}>
                                    {province.name}
                                </h3>
                                {province.highlight && (
                                    <span className="ml-auto text-xs bg-yellow-400 text-[#4d2a36] font-bold px-2 py-0.5 rounded-full">Principal</span>
                                )}
                            </div>
                            <p className={`text-sm leading-relaxed ${province.highlight ? "text-white/80" : "text-slate-500"}`}>
                                {province.cities}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
                >
                    <p className="text-slate-700 text-lg font-medium">
                        ¿No ves tu ciudad? <span className="text-[#4d2a36] font-bold">Consúltanos</span> — cubrimos toda Andalucía y zonas limítrofes.
                    </p>
                    <a
                        href="#contacto"
                        className="inline-block mt-4 px-8 py-3 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition-all shadow-md hover:shadow-lg"
                    >
                        Pedir Presupuesto GRATIS
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
