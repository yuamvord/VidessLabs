import Image from 'next/image';

export interface ProjectType {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  coverImageUrl: string;
  challenge?: string;
  solution?: string;
  techStack?: string[];
  metrics?: { label: string; value: string }[];
  projectUrl?: string; 
}

interface ProjectCardProps {
  project: ProjectType;
  onOpenModal: (project: ProjectType) => void;
}

export const ProjectCard = ({ project, onOpenModal }: ProjectCardProps) => {
  const categoryLabels: Record<string, string> = {
    data: 'Data & Analytics',
    bots: 'Automatización & Bots',
    web: 'Desarrollo Web',
  };

  return (
    <div className="bg-[#FFFFFF] border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#800ED4]/30 transition-all duration-300 group flex flex-col h-full">
      <div className="relative w-full h-48 bg-gray-50 overflow-hidden">
        {project.coverImageUrl ? (
          <Image 
            src={project.coverImageUrl} 
            alt={project.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
            Sin imagen
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
          <span className="text-xs font-bold text-[#1E2939] uppercase tracking-wider">
            {categoryLabels[project.category] || project.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-[#000000] mb-4 flex-grow">
          {project.title}
        </h3>
        
        <button 
          onClick={() => onOpenModal(project)}
          className="inline-block text-center w-full py-2.5 px-4 border-2 border-[#800ED4] text-[#800ED4] rounded-lg font-bold hover:bg-[#800ED4] hover:text-[#FFFFFF] transition-colors mt-auto"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};