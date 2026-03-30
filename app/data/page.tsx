import Link from 'next/link';
import { Database, DatabaseZap, Network, ShieldCheck, Lock, Activity, Server, Clock } from 'lucide-react';
import { KpiCard } from '../components/data/KpiCard';
import { PerformanceChart } from '../components/data/PerformanceChart';
import { Navbar } from '../components/layout/Navbar';

export default function DataAnalyticsPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-[#800ED4] selection:text-white pt-24 pb-12">
      <Navbar />
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#000000] leading-tight">
            Deja de Adivinar. <br className="hidden md:block" />
            Empieza a <span className="text-[#800ED4]">Decidir.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#1E2939] max-w-lg leading-relaxed">
            Transformamos datos dispersos en dashboards interactivos. Arquitectura de datos sólida para decisiones estratégicas en tiempo real.
          </p>
          <Link href="/cotizador?type=data" className="inline-block">
            <button className="bg-[#800ED4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-[#800ED4]/30 hover:-translate-y-1 transition-all active:scale-95">
              Diseñar mi Dashboard
            </button>
          </Link>
        </div>

        {/* Mockup Flotante (Esqueleto) */}
        <div className="relative w-full aspect-square md:aspect-[4/3] bg-gray-50 rounded-3xl border border-gray-100 shadow-2xl p-6 flex flex-col gap-4 transform lg:rotate-2 hover:rotate-0 transition-all duration-500">
          <div className="flex justify-between items-center border-b border-gray-200 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
            </div>
            <div className="w-32 h-4 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <KpiCard title="Uptime del Servidor" value="99.99%" trend={0.01} icon={Server} />
            <KpiCard title="Latencia Media" value="85ms" trend={-42.5} icon={Clock} inverseTrend />
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4 flex items-end gap-2">
            {/* Simulación visual de barras de datos */}
            {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-[#22C55E]/20 to-[#22C55E] rounded-t-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: ECOSISTEMA ETL */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] mb-4">Nuestro Ecosistema ETL</h2>
            <p className="text-[#1E2939] text-lg">Ingeniería de datos estructurada para escalar sin fricción.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Extracción y Limpieza", icon: Network, desc: "Scripts optimizados en Python para conectarnos a múltiples fuentes (APIs, CRMs, legacy) y purgar inconsistencias al vuelo." },
              { title: "Modelado Relacional", icon: DatabaseZap, desc: "Estructuración robusta mediante consultas SQL avanzadas para asegurar que tu Data Warehouse sea ágil y escalable." },
              { title: "Visualización Dinámica", icon: Activity, desc: "Despliegue en herramientas de BI líderes o dashboards personalizados construidos en React para una lectura intuitiva." }
            ].map((col, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#800ED4]/50 transition-colors shadow-sm">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-[#22C55E]">
                  <col.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{col.title}</h3>
                <p className="text-[#1E2939] leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: INTERACTIVE MOCKUP (DEMO EN VIVO) */}
      <section className="py-32 container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] mb-4">El Poder del Dato en Acción</h2>
          <p className="text-[#1E2939] text-lg">Interactúa con la gráfica. Observa cómo la optimización de la arquitectura (Línea Morada) reduce drásticamente los tiempos de latencia (Línea Verde).</p>
        </div>
        <div className="max-w-5xl mx-auto">
          {/* Componente Recharts Extraído */}
          <PerformanceChart />
        </div>
      </section>

      {/* SECCIÓN 4: SEGURIDAD Y GOBERNANZA */}
      <section className="py-24 bg-[#1E2939] text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">Seguridad y Gobernanza de Datos</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tus datos son tu activo más valioso. En Videss Labs implementamos protocolos de encriptación de grado militar, anonimización de PII y análisis forense digital preventivo para asegurar que tu información corporativa nunca esté expuesta a vulnerabilidades.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <Lock size={32} className="text-[#22C55E] mb-4" />
              <h4 className="font-bold text-lg mb-2 text-white">Encriptación E2E</h4>
              <p className="text-sm text-gray-400">Protección de datos en tránsito y en reposo mediante estándares AES-256.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <ShieldCheck size={32} className="text-[#22C55E] mb-4" />
              <h4 className="font-bold text-lg mb-2 text-white">Auditoría Forense</h4>
              <p className="text-sm text-gray-400">Trazabilidad completa de accesos y logs inmutables para compliance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: CTA FINAL */}
      <section className="container mx-auto px-6 py-32 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#000000]">
            ¿Listo para centralizar tu información?
          </h2>
          <p className="text-xl text-[#1E2939]">
            Diseñemos juntos la arquitectura que tu empresa necesita para escalar.
          </p>
          <Link href="/cotizador?type=data" className="inline-block mt-8">
            <button className="bg-[#800ED4] text-white px-10 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-[#800ED4]/20">
              Cotizar Arquitectura de Datos
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}