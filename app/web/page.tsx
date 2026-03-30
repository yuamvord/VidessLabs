import { Hero } from '../components/web/Hero';
import { TechGrid } from '../components/web/TechGrid';
import { ComparisonTable } from '../components/web/ComparisonTable';
import { MetricsMockup } from '../components/web/MetricsMockup';
import { Navbar } from '../components/layout/Navbar';
import Link from 'next/link';

export default function DesarrolloWebPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-[#800ED4] selection:text-white bg-[#FFFFFF]">
      <Navbar />
      <Hero />
      <TechGrid />
      <ComparisonTable />
      <MetricsMockup />

      {/* SECCIÓN 5: CTA FINAL */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000]">
            ¿Preparado para una web que realmente funcione?
          </h2>
          <p className="text-xl text-[#1E2939]">
            Deja de perder clientes por tiempos de carga lentos. Construyamos tu próximo activo digital.
          </p>
          <Link href="/cotizador?type=web" className="inline-block mt-8">
            <button className="bg-[#800ED4] text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-[#800ED4]/20">
              Iniciar Cotizador Web
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}