import { personalInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        
          <p className="text-gray-400 text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} | {personalInfo.name}
            <span className="hidden sm:inline">. Todos los derechos reservados.</span>
          </p>

        
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-sm md:text-base"
              aria-label="Github"
            >
              Github
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-sm md:text-base"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition text-sm md:text-base"
              aria-label="Email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}