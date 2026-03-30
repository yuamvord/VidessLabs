import { Check, X } from 'lucide-react';

export const ComparisonTable = () => {
  const comparisonData = [
    { feature: 'Tiempo de Carga Promedio', traditional: '> 4 segundos', videss: '< 1 segundo' },
    { feature: 'Estructura de Código', traditional: 'Plantillas pesadas genéricas', videss: 'Código a medida' },
    { feature: 'Seguridad', traditional: 'Plugins vulnerables a ataques', videss: 'Seguridad proactiva integrada' },
    { feature: 'Optimización SEO', traditional: 'Dependiente de herramientas de terceros', videss: 'Nativo (Server-Side Rendering)' },
  ];

  return (
    <section className="py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000]">El Estándar Videss vs. Lo Tradicional</h2>
        </div>

        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
            <div className="p-6 font-bold text-[#1E2939]">Característica</div>
            <div className="p-6 font-bold text-gray-500 text-center">Web Tradicional</div>
            <div className="p-6 font-extrabold text-[#800ED4] text-center bg-[#800ED4]/5">Estándar Videss</div>
          </div>
          
          {comparisonData.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
              <div className="p-6 text-[#1E2939] font-medium flex items-center">{row.feature}</div>
              <div className="p-6 text-gray-500 flex items-center justify-center gap-2 text-center text-sm">
                <X size={16} className="text-red-400 shrink-0" /> {row.traditional}
              </div>
              <div className="p-6 text-[#000000] font-bold flex items-center justify-center gap-2 text-center bg-[#800ED4]/5">
                <Check size={18} className="text-[#22C55E] shrink-0" /> {row.videss}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};