"use client";

import { useState, useMemo } from 'react';
import { ChevronRight, ChevronLeft, Monitor, Database, Cpu, LayoutTemplate, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';

type ProjectType = 'web' | 'data' | 'bots' | 'general' | '';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string; 
  role: string;
  projectType: ProjectType;
  answers: Record<string, string>;
}

const PROJECT_TYPES = [
  { id: 'web', title: 'Desarrollo Web', icon: Monitor, desc: 'Portales, E-commerce, SaaS' },
  { id: 'data', title: 'Data & Analytics', icon: Database, desc: 'Dashboards, ETL, Big Data' },
  { id: 'bots', title: 'Automatización & Bots', icon: Cpu, desc: 'RPA, Chatbots, IA' },
  { id: 'general', title: 'Proyecto General', icon: LayoutTemplate, desc: 'CRM, ERP, Infraestructura' },
];

const DYNAMIC_QUESTIONS: Record<string, { id: string, label: string, options: { label: string, complexityPoints: number }[] }[]> = {
  web: [
    { id: 'web_type', label: '¿Qué tipo de plataforma necesitas?', options: [{ label: 'Sitio Web Corporativo', complexityPoints: 2 }, { label: 'E-commerce', complexityPoints: 5 }, { label: 'Plataforma a Medida (SaaS)', complexityPoints: 9 }] },
    { id: 'web_integrations', label: '¿Requiere integración con sistemas externos (ERP, CRM)?', options: [{ label: 'No, es independiente', complexityPoints: 1 }, { label: 'Sí, integraciones básicas', complexityPoints: 4 }, { label: 'Sí, múltiples integraciones complejas', complexityPoints: 9 }] }
  ],
  data: [
    { id: 'data_volume', label: '¿Cuál es el volumen estimado de datos?', options: [{ label: 'Bajo (Hojas de cálculo)', complexityPoints: 2 }, { label: 'Medio (Bases de datos relacionales)', complexityPoints: 5 }, { label: 'Alto (Real-time / Múltiples fuentes)', complexityPoints: 10 }] },
    { id: 'data_output', label: '¿Qué entregable principal esperas?', options: [{ label: 'Limpieza y Reportes Estáticos', complexityPoints: 2 }, { label: 'Dashboards (Looker/PowerBI)', complexityPoints: 6 }, { label: 'Arquitectura Compleja y Data Warehousing', complexityPoints: 10 }] }
  ],
  bots: [
    { id: 'bot_channels', label: '¿En qué canales operará el Bot?', options: [{ label: 'Unicanal (Solo Web)', complexityPoints: 2 }, { label: 'Multicanal (WhatsApp/Redes)', complexityPoints: 5 }, { label: 'Omnicanal Sincronizado', complexityPoints: 8 }] },
    { id: 'bot_intelligence', label: '¿Nivel de inteligencia y ejecución requerido?', options: [{ label: 'RAG Documental Simple', complexityPoints: 3 }, { label: 'Agendamiento y Captura de Leads', complexityPoints: 6 }, { label: 'Ejecución Autónoma (Escritura en BD)', complexityPoints: 10 }] }
  ],
  general: [
    { id: 'gen_scope', label: '¿Qué nivel de implementación CRM/ERP se requiere?', options: [{ label: 'Configuración base y capacitación', complexityPoints: 3 }, { label: 'Desarrollo a medida y flujos múltiples', complexityPoints: 9 }] }
  ]
};

const PRICING_MATRIX = {
  pyme: { 
    web: { min: 1000, max: 2500 },
    data: { min: 2500, max: 10000 },
    bots: { min: 4500, max: 12500 },
    general: { min: 6500, max: 19000 }
  },
  enterprise: {
    web: { min: 28000, max: 112000 },
    data: { min: 28000, max: 85000 },
    bots: { min: 35000, max: 98000 },
    general: { min: 49000, max: 140000 }
  }
};

export default function CotizadorPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', company: '', companySize: '', role: '', projectType: '', answers: {}
  });

  // 2. LÓGICA EXACTA (Sin adivinar por correo)
  const isEnterprise = useMemo(() => {
    return formData.companySize === '51-200' || formData.companySize === '200+';
  }, [formData.companySize]);

  const priceRange = useMemo(() => {
    if (step < 4 || !formData.projectType) return { min: 0, max: 0, complexity: 0 };
    
    let complexityScore = 0;
    const questions = DYNAMIC_QUESTIONS[formData.projectType];
    
    questions?.forEach(q => {
      const selectedLabel = formData.answers[q.id];
      const option = q.options.find(o => o.label === selectedLabel);
      if (option) complexityScore += option.complexityPoints;
    });

    const normalizedComplexity = Math.min(Math.max(Math.ceil(complexityScore / 2), 1), 10);
    
    const tier = isEnterprise ? 'enterprise' : 'pyme';
    const bounds = PRICING_MATRIX[tier][formData.projectType as keyof typeof PRICING_MATRIX.pyme];
    
    const percentage = (normalizedComplexity - 1) / 9; 
    const exactPrice = bounds.min + ((bounds.max - bounds.min) * percentage);

    return { 
      min: Math.round((exactPrice * 0.85) / 100) * 100, 
      max: Math.round((exactPrice * 1.15) / 100) * 100, 
      complexity: normalizedComplexity
    };
  }, [formData, step, isEnterprise]);

  const handleNext = () => setStep(prev => Math.min(prev + 1, 4));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleAnswer = (questionId: string, value: string) => {
    setFormData({ ...formData, answers: { ...formData.answers, [questionId]: value } });
  };

  const handleWhatsAppSubmit = () => {
    const phoneNumber = "50255705760"; 
    
    const message = `*Cotización Técnica B2B - VidessLabs* 🚀\n\n` +
      `*Cliente:*\n` +
      `👤 Nombre: ${formData.firstName} ${formData.lastName}\n` +
      `🏢 Empresa: ${formData.company} (${formData.role})\n` +
      `👥 Tamaño: ${formData.companySize} empleados\n` +
      `📧 Email: ${formData.email}\n` +
      `📱 Teléfono: ${formData.phone}\n\n` +
      `*Clasificación de Arquitectura:*\n` +
      `🏷️ Tipo: ${isEnterprise ? 'Nivel 3/4 (Enterprise/Mediana)' : 'Nivel 1/2 (PYME/Emprendedor)'}\n` +
      `⚙️ Complejidad Calculada: Nivel ${priceRange.complexity}/10\n\n` +
      `*Detalles del Proyecto:*\n` +
      `💻 Vertical: ${PROJECT_TYPES.find(p => p.id === formData.projectType)?.title}\n` +
      Object.entries(formData.answers).map(([key, val]) => {
        const qLabel = DYNAMIC_QUESTIONS[formData.projectType]?.find(q => q.id === key)?.label;
        return `🔹 *${qLabel}*: ${val}`;
      }).join('\n') + `\n\n` +
      `*Cálculo Financiero (Uso Interno):*\n` +
      `💰 PVP Estimado: Q${priceRange.min.toLocaleString()} - Q${priceRange.max.toLocaleString()}\n\n` +
      `Solicito la evaluación del alcance y el envío del Anexo Técnico.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] pt-28 pb-24 font-sans text-[#1E2939]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#000000] text-center mb-10">
            Cotizador Inteligente de Proyectos
          </h1>
          
          <div className="flex items-center justify-between relative max-w-2xl mx-auto mb-16">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-100 -z-10"></div>
            <div className={`absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#22C55E] -z-10 transition-all duration-500`} style={{ width: `${((step - 1) / 3) * 100}%` }}></div>
            
            {['Tus Datos', 'Tipo de Proyecto', 'Requerimientos', 'Evaluación'].map((label, i) => {
              const stepNum = i + 1;
              const isActive = step >= stepNum;
              const isCurrent = step === stepNum;
              return (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    isActive ? 'bg-[#22C55E] text-white shadow-md shadow-[#22C55E]/30' : 'bg-white border-2 border-gray-200 text-gray-400'
                  } ${isCurrent ? 'ring-4 ring-[#22C55E]/20' : ''}`}>
                    {isActive && !isCurrent ? <CheckCircle2 size={20} /> : stepNum}
                  </div>
                  <span className={`text-xs md:text-sm font-bold absolute -bottom-6 whitespace-nowrap ${isActive ? 'text-[#000000]' : 'text-gray-400'}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-3xl p-6 md:p-12 min-h-[400px]">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-[#000000] mb-6">Empecemos con tus datos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Nombre</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Apellido</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Correo Corporativo</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" placeholder="tucorreo@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Teléfono</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Empresa</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" />
                </div>
                
                {/* 4. SELECTOR DE TAMAÑO DE EMPRESA */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Tamaño de la Empresa</label>
                  <select 
                    name="companySize" 
                    value={formData.companySize} 
                    onChange={handleChange} 
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all bg-white appearance-none"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="1-10">1 a 10 empleados (Emprendedor/Micro)</option>
                    <option value="11-50">11 a 50 empleados (PYME)</option>
                    <option value="51-200">51 a 200 empleados (Mediana Empresa)</option>
                    <option value="200+">Más de 200 empleados (Corporativo)</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1E2939]">Tu Rol / Cargo</label>
                  <input type="text" name="role" value={formData.role} onChange={handleChange} className="w-full p-3 rounded-lg border border-gray-200 focus:border-[#800ED4] focus:ring-1 focus:ring-[#800ED4] outline-none transition-all" />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-[#000000] mb-6">¿Qué tipo de solución buscas?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECT_TYPES.map((type) => {
                  const isSelected = formData.projectType === type.id;
                  const Icon = type.icon;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setFormData({ ...formData, projectType: type.id as ProjectType, answers: {} })}
                      className={`p-6 rounded-xl border-2 text-left transition-all duration-300 flex items-start gap-4 ${isSelected ? 'border-[#800ED4] bg-[#800ED4]/5' : 'border-gray-100 hover:border-[#800ED4]/50 hover:bg-gray-50'}`}
                    >
                      <div className={`p-3 rounded-lg ${isSelected ? 'bg-[#800ED4] text-white' : 'bg-gray-100 text-[#22C55E]'}`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${isSelected ? 'text-[#800ED4]' : 'text-[#000000]'}`}>{type.title}</h3>
                        <p className="text-sm mt-1 text-[#1E2939]">{type.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h2 className="text-2xl font-bold text-[#000000] mb-6">Detalles del Requerimiento</h2>
              <div className="space-y-8">
                {DYNAMIC_QUESTIONS[formData.projectType]?.map((q) => (
                  <div key={q.id} className="space-y-3">
                    <label className="text-lg font-bold text-[#1E2939]">{q.label}</label>
                    <div className="flex flex-col gap-2">
                      {q.options.map((opt) => (
                        <label key={opt.label} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${formData.answers[q.id] === opt.label ? 'border-[#800ED4] bg-[#800ED4]/5 ring-1 ring-[#800ED4]' : 'border-gray-200 hover:bg-gray-50'}`}>
                          <input type="radio" name={q.id} value={opt.label} checked={formData.answers[q.id] === opt.label} onChange={() => handleAnswer(q.id, opt.label)} className="w-5 h-5 accent-[#800ED4]" />
                          <span className="font-medium text-[#1E2939]">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-500 text-center py-8">
              <div className="inline-block p-4 bg-[#22C55E]/10 rounded-full mb-6">
                <CheckCircle2 size={48} className="text-[#22C55E]" />
              </div>
              <h2 className="text-3xl font-extrabold text-[#000000] mb-4">¡Análisis Completado!</h2>
              <p className="text-[#1E2939] mb-8 max-w-lg mx-auto">
                Hemos procesado tus requerimientos y clasificado la arquitectura tecnológica necesaria para tu empresa.
              </p>
              
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 mb-8 max-w-xl mx-auto shadow-sm">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider block mb-4">Clasificación del Proyecto</span>
                <div className="text-3xl md:text-4xl font-extrabold text-[#800ED4] tracking-tight mb-2">
                  Arquitectura {isEnterprise ? 'Enterprise' : 'PYME'}
                </div>
                <div className="inline-flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-lg font-semibold text-[#1E2939]">
                  Nivel de Complejidad: {priceRange.complexity} / 10
                </div>
              </div>

              <p className="text-sm text-gray-500 mb-10 max-w-md mx-auto">
                Tu cotización detallada ha sido calculada internamente. Envíala a nuestro equipo de ingeniería para recibir la propuesta económica exacta y el plan de ejecución de inmediato.
              </p>

              <button 
                onClick={handleWhatsAppSubmit}
                className="w-full md:w-auto bg-[#800ED4] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#800ED4]/30 transition-all active:scale-95 flex items-center justify-center gap-2 mx-auto"
              >
                Enviar a VidessLabs <ChevronRight size={20} />
              </button>
            </div>
          )}

        </div>

        {step < 4 && (
          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button onClick={handlePrev} className="px-6 py-3 rounded-lg font-bold text-[#1E2939] hover:bg-gray-100 transition-colors flex items-center gap-2">
                <ChevronLeft size={20} /> Atrás
              </button>
            ) : <div></div>}
            
            {/* 5. BOTÓN PROTEGIDO (Validando que no falte companySize) */}
            <button 
              onClick={handleNext} 
              disabled={
                (step === 1 && (!formData.firstName || !formData.email || !formData.companySize)) || 
                (step === 2 && !formData.projectType) ||
                (step === 3 && Object.keys(formData.answers).length < (DYNAMIC_QUESTIONS[formData.projectType]?.length || 0))
              }
              className="px-8 py-3 bg-[#1E2939] text-white rounded-lg font-bold hover:bg-[#000000] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Siguiente <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </main>
  );
}