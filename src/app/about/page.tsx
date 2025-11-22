import { Metadata } from 'next';
import Image from 'next/image';
import { personalInfo } from '@/lib/data'; 

export const metadata: Metadata = {
  title: 'Sobre Mí',
  description: `Conoce más sobre ${personalInfo.name}. ${personalInfo.title}`,
};

export default function AboutPage() {
 
  const skills = [
    'JavaScript/TypeScript',
    'React & Next.js',
    'Node.js & Express',
    'PostgreSQL & MongoDB',
    'Tailwind CSS',
    'Git & Github',
    'Docker',
    'AWS',
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
     
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
        Sobre Mí
      </h1>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
        
        
        <div className="md:col-span-1 flex justify-center md:block">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto md:aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 33vw"
            />
          </div>
        </div>


        <div className="md:col-span-2">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
            ¡Hola! Soy {personalInfo.name}
          </h2>
          <div className="prose text-gray-700 space-y-3 md:space-y-4 text-sm md:text-base">
            <p>
              Soy una desarrolladora full stack apasionada por crear experiencias 
              web excepcionales. Me especializo en construir aplicaciones modernas 
              y escalables.
            </p>
            <p>
              Mi enfoque es en escribir código limpio, mantenible y eficiente,
              siempre buscando las mejores prácticas y las últimas tecnologías
              para entregar productos de alta calidad.
            </p>
            <p>
              Cuando no estoy programando, me gusta contribuir a proyectos de
              código abierto, escribir artículos técnicos y aprender nuevas
              tecnologías.
            </p>
          </div>
        </div>
      </div>

     
      <section className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
          Habilidades Técnicas
        </h2>
        
       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white p-3 md:p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <p className="font-semibold text-gray-800 text-sm md:text-base">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}