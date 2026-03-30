export const MetricsMockup = () => {
  const scores = [
    { label: 'Performance', value: 100 },
    { label: 'Accesibilidad', value: 100 },
    { label: 'Mejores Prácticas', value: 100 },
    { label: 'SEO', value: 100 },
  ];

  return (
    <section className="py-24 bg-[#1E2939] text-white overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Resultados Auditables. Cero Excusas.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nuestros desarrollos superan las auditorías técnicas más estrictas de Google. Una web rápida y accesible no solo mejora la experiencia, sino que reduce drásticamente la tasa de rebote.
          </p>
          <div className="pt-4 flex gap-8">
            <div>
              <div className="text-3xl font-extrabold text-[#22C55E] mb-1">15%</div>
              <div className="text-sm font-bold text-gray-400">Tasa de Rebote Reducida</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#22C55E] mb-1">+240%</div>
              <div className="text-sm font-bold text-gray-400">Tráfico Mensual Creciente</div>
            </div>
          </div>
        </div>

        {/* Panel Simulado de Google Lighthouse */}
        <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-2xl relative">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white font-mono">Reporte Core Web Vitals</h3>
            <p className="text-sm text-gray-400 mt-1">Simulación de auditoría técnica</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {scores.map((score, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                {/* Círculo de Score Perfecto */}
                <div className="w-24 h-24 rounded-full border-8 border-[#22C55E] flex items-center justify-center bg-gray-900 shadow-[0_0_15px_#22C55E33]">
                  <span className="text-2xl font-extrabold text-[#22C55E]">{score.value}</span>
                </div>
                <span className="text-sm font-bold text-gray-300 text-center">{score.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};