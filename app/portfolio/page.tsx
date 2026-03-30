"use client";

import { useState } from 'react';
import { ProjectCard, ProjectType } from '../components/portfolio/ProjectCard';
import { ProjectModal } from '../components/portfolio/ProjectModal';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/footer';

type CategoryFilter = 'all' | 'data' | 'bots' | 'web';

const mockProjects: ProjectType[] = [
  {
    _id: '1',
    title: 'Plataforma de Cotización Digital B2B',
    slug: { current: 'portal-corporativo-web' },
    category: 'web',
    coverImageUrl: '/img/img_projects/aibotextil.png',
    challenge: 'AiboTextil, una empresa especializada en la venta de telas necesitaba una solución web, donde la experiencia del usuario fuese lo primordial, y donde el cliente pudiese realizar una pequeña cotización antes de interactuar con el asesor de ventas.',
    solution: 'Desarrollamos una aplicación web donde el cliente podía navegar entre los distintos tipos de telas, cotizar e interactuar con el entorno de la página, así como enlaces directos al contacto con un asesor de servicio.',
    techStack: ['Next.js/React', 'SQL Server', 'Data Modeling', 'JavaScript', 'Tailwindcss', 'Neon'],
    metrics: [
      { label: 'Conversión de Leads', value: '+45%' },
      { label: 'Tiempo de Cotización', value: '-80%' },
      { label: 'Carga de Página', value: '<1.2s' }
    ],
    projectUrl: 'https://aibotextil.com' 
  },
  
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const filteredProjects = mockProjects.filter((project) => 
    filter === 'all' ? true : project.category === filter
  );

  const filterOptions: { label: string; value: CategoryFilter }[] = [
    { label: 'Todos', value: 'all' },
    { label: 'Data & Analytics', value: 'data' },
    { label: 'Automatización & Bots', value: 'bots' },
    { label: 'Desarrollo Web', value: 'web' },
  ];
  
  const handleOpenModal = (project: ProjectType) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] selection:bg-[#800ED4] selection:text-[#FFFFFF]">
      <Navbar/>
      
      <section className="relative w-full pt-40 pb-24 px-6 bg-[url('/img/img_portfolio/hero_portfolio.jpg')] bg-cover bg-center bg-no-repeat bg-[#0B0F19]/80 bg-blend-overlay border-b border-gray-100 shadow-sm mb-12">
        <div className="container mx-auto">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
              Casos de Éxito y Soluciones Implementadas
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-md">
              Explora cómo en VidessLabs transformamos cuellos de botella en flujos optimizados mediante ingeniería de datos y desarrollo de software a medida.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24">
        
        <div className="flex flex-wrap gap-3 mb-12">
          {filterOptions.map((option) => {
            const isActive = filter === option.value;
            return (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  isActive 
                    ? 'bg-[#800ED4] text-[#FFFFFF] border-[#800ED4] shadow-md shadow-[#800ED4]/20 scale-105' 
                    : 'bg-[#FFFFFF] text-[#1E2939] border-gray-200 hover:border-[#800ED4] hover:text-[#800ED4]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project._id} className="animate-in fade-in zoom-in-95 duration-500">
              <ProjectCard project={project} onOpenModal={handleOpenModal} />
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-[#1E2939] bg-gray-50 rounded-2xl border border-gray-100">
            No hay proyectos en esta categoría por el momento.
          </div>
        )}

      </div>
      <Footer />

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </main>
  );
}