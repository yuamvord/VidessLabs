import { Layers, Smartphone, SearchCheck, ShieldAlert } from 'lucide-react';

export const TechGrid = () => {
  const features = [
    {
      icon: Layers,
      title: 'Arquitectura Escalable',
      desc: 'Desarrollos modulares en React/Next.js preparados para crecer sin refactorizaciones costosas.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Real',
      desc: 'Interfaces fluidas que se adaptan a cualquier dispositivo sin romper la experiencia de usuario (UX).'
    },
    {
      icon: SearchCheck,
      title: 'SEO Técnico Integrado',
      desc: 'Renderizado del lado del servidor (SSR) y generación estática para indexación inmediata en Google.'
    },
    {
      icon: ShieldAlert,
      title: 'Seguridad y Auditoría',
      desc: 'Arquitecturas fortificadas desde el inicio. Implementamos prevención de vulnerabilidades web (OWASP) y logs de auditoría para proteger la integridad del sistema.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] mb-4">Ingeniería Web Superior</h2>
          <p className="text-[#1E2939] text-lg">No ensamblamos plugins. Escribimos código limpio diseñado para el rendimiento y la seguridad absoluta.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#800ED4]/50 transition-colors shadow-sm flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#800ED4]/10 transition-colors">
                <feat.icon size={28} className="text-[#22C55E] group-hover:text-[#800ED4] transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{feat.title}</h3>
                <p className="text-[#1E2939] leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};