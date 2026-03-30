import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
interface Props {
  title: string;
  description: string;
  iconName: keyof typeof Icons; 
}

export const SolutionCard = ({ title, description, iconName }: Props) => {
  const Icon = (Icons[iconName] as LucideIcon) || Icons.Cpu;

  return (
    <div className="p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#800ED4] transition-all group shadow-sm">
      <div className="mb-6 p-3 bg-[#F9FAFB] inline-block rounded-xl group-hover:scale-110 transition-transform">
        <Icon className="text-[#22C55E]" size={28} />
      </div>
      <h3 className="text-2xl font-bold text-[#1E2939] mb-4">{title}</h3>
      <p className="text-black leading-relaxed">{description}</p>
    </div>
  );
};
