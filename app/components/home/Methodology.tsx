export const Methodology = () => {
  const steps = [
    { id: 1, title: 'Análisis' },
    { id: 2, title: 'Desarrollo' },
    { id: 3, title: 'QA Técnico' },
    { id: 4, title: 'Despliegue' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
          
          <div className="absolute top-7 left-0 w-full h-1 bg-gray-100 -z-10 hidden md:block"></div>
          
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center gap-4 text-center bg-white px-4">
              <div className="w-14 h-14 rounded-full bg-white border-4 border-[#22C55E] flex items-center justify-center font-bold text-black shadow-sm">
                {step.id}
              </div>
              <span className="font-bold text-black">{step.title}</span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};