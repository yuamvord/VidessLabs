import { CheckCircle, X, ExternalLink } from 'lucide-react';
import { ProjectType } from './ProjectCard';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: ProjectType | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-in zoom-in-95 duration-300 border border-gray-100"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-12">
          <div className="mb-10 pr-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
              <span className="text-sm font-bold text-[#1E2939] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] leading-tight">
              {project.title}
            </h2>
          </div>

          <div className="space-y-12">
            
            {project.challenge && (
              <section>
                <h3 className="text-xl font-bold text-[#000000] mb-3 border-b border-gray-100 pb-2">El Reto</h3>
                <p className="text-[#1E2939] text-lg leading-relaxed">{project.challenge}</p>
              </section>
            )}

            {project.solution && (
              <section>
                <h3 className="text-xl font-bold text-[#000000] mb-3 border-b border-gray-100 pb-2">La Solución VidessLabs</h3>
                <p className="text-[#1E2939] text-lg leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.metrics && project.metrics.length > 0 && (
              <section>
                <h3 className="text-xl font-bold text-[#000000] mb-4 border-b border-gray-100 pb-2">Resultados Obtenidos</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#F9FAFB] p-6 rounded-xl border border-gray-100 flex flex-col items-center justify-center text-center">
                      <span className="text-3xl font-extrabold text-[#22C55E] mb-2">{metric.value}</span>
                      <span className="text-sm font-bold text-[#1E2939]">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.techStack && project.techStack.length > 0 && (
              <section>
                <h3 className="text-xl font-bold text-[#000000] mb-4 border-b border-gray-100 pb-2">Stack Tecnológico</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-gray-50 text-[#1E2939] text-sm font-bold rounded-lg border border-gray-200 flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#800ED4]" />
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {project.projectUrl && (
              <section className="pt-4">
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-[#800ED4] text-white font-bold rounded-lg hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#800ED4]/30 transition-all active:scale-95"
                >
                  Visitar Proyecto en Vivo <ExternalLink size={20} />
                </a>
              </section>
            )}

          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};