'use client';

import Link from 'next/link';
import { useState } from 'react';
import { personalInfo } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
      
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-gray-900 font-display truncate max-w-[200px] md:max-w-none"
            onClick={closeMenu}
          >
            {personalInfo.name.split(' ')[0]} 
            <span className="hidden sm:inline"> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </Link>

       
          <ul className="hidden md:flex gap-6">
            <li>
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 transition font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-pink-600 transition font-medium"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-700 hover:text-pink-600 transition font-medium"
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-pink-600 transition font-medium"
              >
                Contacto
              </Link>
            </li>
          </ul>

          
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
             
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menú Mobile  */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-700 hover:text-pink-600 transition font-medium py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={closeMenu}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block text-gray-700 hover:text-pink-600 transition font-medium py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={closeMenu}
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block text-gray-700 hover:text-pink-600 transition font-medium py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={closeMenu}
                >
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block text-gray-700 hover:text-pink-600 transition font-medium py-2 hover:bg-gray-50 px-2 rounded"
                  onClick={closeMenu}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}