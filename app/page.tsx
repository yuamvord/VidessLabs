import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/footer';
import { Hero } from './components/home/Hero';
import { SolutionCard } from './components/home/SolutionCard';
import { Methodology } from './components/home/Methodology';
import { CtaSection } from './components/home/CtaSection';
import { WhatsAppButton } from './components/home/FloatingChat';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#1E2939] font-sans selection:bg-[#800ED4] selection:text-white">
      
      <Navbar />

      <Hero 
        title={<>Automatización y Datos que <span className="text-[#800ED4]">Escalan</span> tu Negocio.</>}
        subtitle="Videss Labs diseña ecosistemas tecnológicos eficientes. De procesos manuales a decisiones inteligentes."
      />

      <section className="bg-[#F9FAFB] py-24 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-3xl space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2939]">
            ¿Procesos manuales lentos? ¿Datos desordenados?
          </h2>
          <p className="text-xl text-black">
            Nosotros lo resolvemos con <span className="text-[#22C55E] font-bold">ingeniería avanzada</span>.
          </p>
        </div>
      </section>

      <section id="soluciones" className="py-5 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionCard 
            title="Bots & Automatización" 
            description="Elimina tareas repetitivas con agentes inteligentes diseñados a medida." 
            iconName="Cpu" 
          />
          <SolutionCard 
            title="Data & Analytics" 
            description="Convertimos el caos de información en dashboards accionables para tu empresa." 
            iconName="Database" 
          />
          <SolutionCard 
            title="Desarrollo Web & Software" 
            description="Plataformas de alto rendimiento escalables y con foco en conversión." 
            iconName="Monitor" 
          />
        </div>
      </section>

      <Methodology />

      <CtaSection />

      <Footer />

      <WhatsAppButton />

    </main>
  );
}
