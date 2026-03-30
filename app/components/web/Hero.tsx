import Link from 'next/link';
import { ArrowRight, Zap, Smartphone, Search } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-[#FFFFFF] pt-32 pb-20 overflow-hidden border-b border-gray-100">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#000000] leading-[1.1] tracking-tight">
            Desarrollo Web que <br />
            <span className="text-[#800ED4]">Domina el Mercado.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#1E2939] max-w-xl leading-relaxed">
            No usamos plantillas lentas. Construimos ecosistemas digitales a medida con React y Next.js, diseñados para conversión extrema y tiempos de carga inferiores a 1 segundo.
          </p>
          <Link href="/cotizador?type=web" className="inline-block mt-4">
            <button className="bg-[#800ED4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#800ED4]/30 hover:-translate-y-1 transition-all flex items-center gap-2 active:scale-95">
              Cotizar mi Proyecto Web <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        <div className="relative h-[450px] w-full flex items-center justify-center">
          <div className="absolute w-[80%] h-[80%] bg-gray-50 rounded-2xl border border-gray-200 shadow-xl shadow-gray-200/50 p-6 flex flex-col gap-4 transform rotate-2">
            <div className="w-1/3 h-6 bg-gray-200 rounded-md"></div>
            <div className="w-full h-32 bg-white rounded-lg border border-gray-100"></div>
            <div className="flex gap-4">
              <div className="flex-1 h-20 bg-white rounded-lg border border-gray-100"></div>
              <div className="flex-1 h-20 bg-white rounded-lg border border-gray-100"></div>
            </div>
          </div>

          <div className="absolute top-10 left-0 bg-white px-4 py-2 rounded-full shadow-lg border border-[#22C55E]/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3s' }}>
            <Zap size={18} className="text-[#22C55E] fill-[#22C55E]" />
            <span className="font-bold text-[#000000] text-sm">LCP &lt; 1.2s</span>
          </div>
          
          <div className="absolute bottom-20 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border border-[#22C55E]/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
            <Search size={18} className="text-[#22C55E]" />
            <span className="font-bold text-[#000000] text-sm">SEO Score 100</span>
          </div>

          <div className="absolute top-1/2 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-[#22C55E]/20 flex items-center gap-2 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
            <Smartphone size={18} className="text-[#22C55E]" />
            <span className="font-bold text-[#000000] text-sm">Mobile-First Real</span>
          </div>
        </div>

      </div>
    </section>
  );
};