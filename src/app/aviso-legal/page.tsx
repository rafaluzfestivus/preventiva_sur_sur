import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Aviso Legal | Preventiva Sur',
    description: 'Aviso legal e información del titular del sitio web de Preventiva Sur.',
    alternates: { canonical: 'https://preventivasur.com/aviso-legal' },
};

export default function AvisoLegal() {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">Aviso Legal</h1>

            <div className="prose prose-lg max-w-none text-slate-700">
                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">1. Datos del titular</h2>
                <p>
                    En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos del titular de este sitio web:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Titular:</strong> Richard Peñarroya Gutiérrez (Preventiva Sur)</li>
                    <li><strong>NIF/CIF:</strong> 25719133G</li>
                    <li><strong>Correo electrónico:</strong> contacto@preventivasur.com</li>
                    <li><strong>Teléfono:</strong> 615 744 742</li>
                    <li><strong>Sitio web:</strong> preventivasur.com</li>
                </ul>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">2. Objeto</h2>
                <p>
                    Este sitio web tiene por objeto ofrecer información sobre los servicios de instalación de redes de protección y mallas de seguridad de Preventiva Sur, así como facilitar el contacto con los usuarios interesados.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">3. Condiciones de uso</h2>
                <p>
                    El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la buena fe.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">4. Propiedad intelectual e industrial</h2>
                <p>
                    Los contenidos de este sitio web (textos, imágenes, logotipos, vídeos y diseño) son titularidad de Preventiva Sur o se utilizan con la debida autorización. Queda prohibida su reproducción, distribución o comunicación pública sin autorización expresa.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">5. Responsabilidad</h2>
                <p>
                    Preventiva Sur procura que la información publicada sea exacta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad continua del sitio. La información de la web tiene carácter orientativo y no constituye una oferta vinculante; cada instalación se presupuesta tras la valoración del espacio.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">6. Protección de datos y cookies</h2>
                <p>
                    El tratamiento de datos personales y el uso de cookies se rigen por nuestra <a href="/politica-privacidad" className="text-yellow-600 underline">Política de Privacidad</a>.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4 text-slate-900">7. Legislación aplicable</h2>
                <p>
                    Este Aviso Legal se rige por la legislación española. Para cualquier controversia, las partes se someterán a los juzgados y tribunales que correspondan conforme a la normativa vigente.
                </p>

                <p className="text-sm text-slate-500 mt-12">Última actualización: 7 de noviembre de 2026</p>
            </div>
        </div>
    );
}
