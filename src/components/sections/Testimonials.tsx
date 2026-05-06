"use client";

import { Star, Quote } from "lucide-react";
import { useState } from "react";

export function Testimonials() {
    const testimonials = [
        {
            name: "Ramon del Pino",
            location: "Almería",
            text: "Profesionales 100%, trabajadores y buenas personas. El trabajo que han hecho en mi terraza es espectacular, llevaba mucho tiempo buscando algo así, y ha superado mis expectativas. Lo recomiendo totalmente, a cualquiera que tenga mascotas o niños pequeños.",
        },
        {
            name: "Quiroyanna",
            location: "Marbella",
            text: "Encantada con el servicio. Vinieron a instalar una red de seguridad para mi bebé y fueron increíblemente atentos en todo momento. Se tomaron el tiempo necesario para asegurarse de que la red quedara perfectamente firme y bien colocada, revisando cada detalle y explicándome cómo quedaba todo. Me transmitieron mucha confianza y profesionalidad. Ahora puedo estar tranquila sabiendo que mi bebé está mucho más seguro. Los recomiendo 100 x 100 y sin duda volveré a llamarles para futuros trabajos. ¡Muchas gracias por el trabajo tan cuidado!",
        },
        {
            name: "Isabel Patricia Vázquez Viruel",
            location: "Málaga",
            text: "Ha sido genial trabajar con preventiva Sur. Ahora mi terraza está segura. Han sido muy formales en tiempos, ejecución y el presupuesto muy ajustado. Maravilloso poder encontrar profesionales así.",
        },
        {
            name: "Alba Gil",
            location: "Jaén",
            text: "Sin duda un acierto total. Gente profesional, puntual, muy agradable y con excelente relación calidad / precio. He puesto mallas en todas las ventanas de mi casa y terraza, como protección para los críos, han quedado estupendamente bien, les estoy muy agradecida.",
        },
        {
            name: "Sara Navarrete Garcia",
            location: "Málaga",
            text: "Busqué en Google una empresa para poder poner una malla en mi ventana para que mis gatas se pudiesen asomar 😊 Les hablé y al momento se ponen en contacto contigo, me citaron al día siguiente y así fue, son super amables y simpáticos y sobre todo súper profesionales! Así da gusto! Mil gracias por todo que sepan que os voy a recomendar! Un saludo.",
        },
        {
            name: "Juan Antonio Lebron",
            location: "Churriana",
            text: "Magnífico trabajo realizado. Nuestra gata ahora se siente protegida y nosotros tranquilos sabiendo que puede estar en la azotea y casa sin darnos ningún susto. Mil gracias a Richard y compañeros por el gran trabajo.",
        },
    ];

    const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-900 mb-16">
                    Lo que dicen nuestros clientes
                </h2>

                <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all relative flex flex-col snap-center h-full"
                        >
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-[#4d2a36]/10 fill-[#4d2a36]/10" />
                            <div className="flex text-yellow-400 mb-4 gap-1">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-yellow-400" />
                                ))}
                            </div>
                            <div className="flex-grow mb-6">
                                <p className="text-slate-600 italic line-clamp-4">&ldquo;{t.text}&rdquo;</p>
                                {t.text.length > 150 && (
                                    <button
                                        onClick={() => setSelectedTestimonial(t)}
                                        className="text-yellow-600 text-sm font-semibold mt-2 hover:underline focus:outline-none"
                                    >
                                        Ver más
                                    </button>
                                )}
                            </div>
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold shrink-0">
                                    {t.name[0]}
                                </div>
                                <div className="overflow-hidden">
                                    <h4 className="font-bold text-slate-900 truncate">{t.name}</h4>
                                    <span className="text-sm text-slate-500 truncate block">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedTestimonial && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
                        <button
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-slate-500"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>
                        <div className="flex text-yellow-400 mb-6 gap-1">
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-5 h-5 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-700 text-lg leading-relaxed mb-8">&ldquo;{selectedTestimonial.text}&rdquo;</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-xl">
                                {selectedTestimonial.name[0]}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg">{selectedTestimonial.name}</h4>
                                <span className="text-slate-500">{selectedTestimonial.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 -z-10" onClick={() => setSelectedTestimonial(null)} />
                </div>
            )}
        </section>
    );
}
