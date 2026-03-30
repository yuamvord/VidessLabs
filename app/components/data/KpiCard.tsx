import { ArrowDownRight, ArrowUpRight, LucideIcon } from 'lucide-react';

interface KpiCardProps {
  title: string;
  value: string;
  trend: number;
  icon: LucideIcon;
  inverseTrend?: boolean; 
}

export const KpiCard = ({ title, value, trend, icon: Icon, inverseTrend = false }: KpiCardProps) => {
  const isPositive = inverseTrend ? trend < 0 : trend > 0;
  
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <div className="p-3 bg-gray-50 rounded-xl">
          <Icon size={24} className="text-[#800ED4]" />
        </div>
        <div className={`flex items-center gap-1 text-sm font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-red-100 text-red-600'}`}>
          {trend > 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          {Math.abs(trend)}%
        </div>
      </div>
      <div>
        <h3 className="text-[#1E2939] text-sm font-semibold mb-1">{title}</h3>
        <p className="text-3xl font-extrabold text-[#000000]">{value}</p>
      </div>
    </div>
  );
};