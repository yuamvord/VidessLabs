"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, Cpu, Database, Monitor } from 'lucide-react';
import { Button } from '../ui/Button'; 

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const soluciones = [
    {
      title: "Automatización",
      desc: "Agentes y bots inteligentes",
      icon: <Cpu size={20} className="text-[#22C55E]" />,
      href: "/automatizacion"
    },
    {
      title: "Data & Analytics",
      desc: "Decisiones basadas en datos",
      icon: <Database size={20} className="text-[#22C55E]" />,
      href: "/data"
    },
    {
      title: "Desarrollo Web",
      desc: "Plataformas de alto rendimiento",
      icon: <Monitor size={20} className="text-[#22C55E]" />,
      href: "/web"
    }
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-20 h-20 relative transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/img/img_home/figuras_logo.png" 
              alt="Videss Labs Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </div>
          <span className="hidden md:block text-xl font-extrabold text-[#000000] tracking-tight w-50 h-50 relative transition-transform duration-300 group-hover:scale-105">
            <Image 
              src="/img/img_home/letras_videsslabs.png" 
              alt="Videss Labs Logo" 
              fill 
              className="object-contain" 
              priority
            />
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          
          <div className="relative group">

            <button className="flex items-center gap-1 font-semibold text-[#1E2939] hover:text-[#800ED4] transition-colors py-8">
              Soluciones
              <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out p-3">
              <div className="flex flex-col gap-1">
                {soluciones.map((item, idx) => (
                  <Link 
                    key={idx} 
                    href={item.href}
                    className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#F9FAFB] transition-colors group/item"
                  >
                    <div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 group-hover/item:border-[#22C55E]/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E2939] text-sm group-hover/item:text-[#800ED4] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#1E2939] mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/portfolio" className="font-semibold text-[#1E2939] hover:text-[#800ED4] transition-colors py-8">
            Portafolio
          </Link>
          <Link href="/cotizador" className="font-semibold text-[#1E2939] hover:text-[#800ED4] transition-colors py-8">
            Cotizador
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="https://wa.me/50255705760/?text=Hola%20VidessLabs%20me%20gustaría%20hablar%20con%20un%20ingeniero." target="_blank" rel="noopener noreferrer">
            <Button text="Hablemos" variant="primary"/>
          </Link>
        </div>

        <button 
          className="md:hidden relative z-50 p-2 text-[#1E2939] hover:text-[#800ED4] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      <div className={`
        fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out pt-24 px-6 pb-6 overflow-y-auto h-300
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col gap-6">
          
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Soluciones</h3>
            <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
              {soluciones.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-2 text-[#1E2939] font-medium"
                >
                  {item.icon}
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="h-px w-full bg-gray-100 my-2"></div>

          <Link 
            href="/portfolio" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-bold text-[#1E2939]"
          >
            Portafolio
          </Link>
          
          <Link 
            href="/cotizador" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-xl font-bold text-[#1E2939]"
          >
            Cotizador
          </Link>

          <div className="mt-8">
            <Link href="https://wa.me/50255705760/?text=Hola%20VidessLabs,%20me%20gustaría%20hablar%20con%20un%20ingeniero." target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-[#800ED4] text-white px-6 py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform">
                Hablemos con un Ingeniero
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </header>
  );
};