"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Bot, Zap, Workflow, Server, Database, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import Link from 'next/link';

export default function AutomatizacionPage() {
  const scrollyContainerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const isMetricsInView = useInView(metricsRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: scrollyContainerRef,
    offset: ["start start", "end end"]
  });

  const backgroundColor = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["#FFFFFF", "#1E2939", "#1E2939", "#FFFFFF"]);
  const textColor = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ["#000000", "#FFFFFF", "#FFFFFF", "#000000"]);
  
  const opacityChaos = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0, 1, 0]);
  const opacityEfficiency = useTransform(scrollYProgress, [0.6, 0.8, 0.9], [0, 1, 1]);
  
  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  const [logs, setLogs] = useState<string[]>(["> Inicializando motor Videss AI..."]);
  useEffect(() => {
    const logMessages = [
      "[SUCCESS] Lead extraído de CRM (12ms)",
      "[SUCCESS] Datos validados con heurística",
      "[SUCCESS] Factura generada y enviada a ERP",
      "[INFO] Esperando nuevo trigger...",
      "[SUCCESS] Tarea programada ejecutada",
      "[SUCCESS] NLP completado. Sentimiento: Positivo"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, logMessages[i % logMessages.length]];
        return newLogs.length > 6 ? newLogs.slice(1) : newLogs; 
      });
      i++;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen font-sans selection:bg-[#800ED4] selection:text-white bg-[#FFFFFF]">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#FFFFFF]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] font-bold text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
              </span>
              Sistemas Operativos 24/7
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#000000] leading-[1.1] tracking-tight">
              Tu Empresa en <br/><span className="text-[#800ED4]">Piloto Automático.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#1E2939] max-w-lg leading-relaxed">
              Diseñamos e implementamos agentes de Inteligencia Artificial y flujos de automatización que operan sin margen de error, escalando tu capacidad al instante.
            </p>
            <Link href="/cotizador?type=bots">
              <button className="bg-[#800ED4] text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#800ED4]/30 hover:-translate-y-1 transition-all flex items-center gap-2 mt-4">
                Cotizar Automatización <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>

         
          <div className="relative h-[400px] md:h-[500px] w-full border border-gray-100 rounded-3xl bg-gray-50/50 shadow-inner flex items-center justify-center overflow-hidden p-8">
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-full space-y-4 font-mono text-sm text-[#1E2939]"
             >
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.8, duration: 1.5 }} className="overflow-hidden whitespace-nowrap text-[#800ED4]">
                  {"import { VidessAI } from '@videss/core';"}
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 2.0, duration: 1 }} className="overflow-hidden whitespace-nowrap">
                  {"const agent = new VidessAI();"}
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 3.0, duration: 1.5 }} className="overflow-hidden whitespace-nowrap">
                  {"agent.listen('CRM_UPDATE').process((data) => {"}
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 4.5, duration: 1 }} className="overflow-hidden whitespace-nowrap pl-4 text-[#22C55E]">
                  {"// Optimizando flujos operativos..."}
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 5.5, duration: 1 }} className="overflow-hidden whitespace-nowrap pl-4">
                  {"return data.executeAutomation();"}
                </motion.div>
                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 6.5, duration: 0.5 }} className="overflow-hidden whitespace-nowrap">
                  {"});"}
                </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      <section ref={scrollyContainerRef} className="h-[250vh] relative">
        <motion.div 
          style={{ backgroundColor }} 
          className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute top-0 bottom-0 w-1 bg-gray-800 left-1/2 -translate-x-1/2 opacity-20 hidden md:block"></div>
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute top-0 w-1 bg-gradient-to-b from-[#800ED4] to-[#22C55E] left-1/2 -translate-x-1/2 hidden md:block shadow-[0_0_15px_#22C55E]"
          ></motion.div>

          <motion.div 
            style={{ opacity: opacityChaos, y: useTransform(scrollYProgress, [0.1, 0.4], [50, -50]) }}
            className="absolute text-center px-6 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">El Caos Manual</h2>
            <p className="text-xl text-gray-300">
              Tareas repetitivas. Cuellos de botella. Errores de digitación. Tu equipo está perdiendo horas valiosas en procesos que una máquina haría en milisegundos.
            </p>
          </motion.div>

          <motion.div 
            style={{ opacity: opacityEfficiency, color: textColor, y: useTransform(scrollYProgress, [0.6, 0.9], [50, -50]) }}
            className="absolute text-center px-6 max-w-3xl"
          >
            <div className="inline-block p-4 bg-[#22C55E]/10 rounded-full mb-6">
              <Zap size={48} className="text-[#22C55E]" />
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Eficiencia Videss</h2>
            <p className="text-xl md:text-2xl font-medium">
              Eliminamos el error humano. Escalamos tu capacidad operativa.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-32 bg-[#FFFFFF] relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-[#000000] mb-6">Arquitectura de Soluciones</h2>
            <p className="text-[#1E2939] text-lg">Dejamos la teoría a un lado. Construimos motores de procesamiento que se integran en tu ecosistema actual.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: "Agentes IA & Chatbots", desc: "Integración nativa con GPT-4 y LLMs para atención autónoma y calificación de leads avanzada sin intervención humana." },
              { icon: Workflow, title: "RPA (Automatización Robótica)", desc: "Scripts seguros que extraen, procesan y mueven datos entre tus plataformas legacy, CRMs, ERPs y Excel." },
              { icon: Server, title: "Integraciones API a Medida", desc: "Conectamos tu stack tecnológico actual mediante webhooks y APIs REST/GraphQL para que hablen entre sí." }
            ].map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03, borderColor: '#800ED4' }}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default"
              >
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#800ED4]/10 transition-colors">
                  <s.icon size={28} className="text-[#22C55E] group-hover:text-[#800ED4] transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#000000] mb-4">{s.title}</h3>
                <p className="text-[#1E2939] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold text-[#000000]">Anatomía de un Agente Videss</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-[#000000]">Trigger (Evento)</h4>
                    <p className="text-sm text-[#1E2939]">Un cliente envía un correo o se inserta una fila en la Base de Datos.</p>
                  </div>
                </div>
                <div className="w-1 h-8 bg-gray-200 ml-12"></div>
                <div className="flex items-center gap-6 bg-white p-6 rounded-xl border border-[#800ED4]/30 shadow-md relative">
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#800ED4] rounded-full animate-ping opacity-20"></div>
                  <div className="w-12 h-12 rounded-full bg-[#800ED4] flex items-center justify-center text-white font-bold shrink-0 shadow-lg shadow-[#800ED4]/40">2</div>
                  <div>
                    <h4 className="font-bold text-[#800ED4]">Videss Processing Engine</h4>
                    <p className="text-sm text-[#1E2939]">El script extrae la data, la limpia, y utiliza IA para tomar la decisión correcta bajo reglas de negocio estrictas.</p>
                  </div>
                </div>
                <div className="w-1 h-8 bg-gray-200 ml-12"></div>
                <div className="flex items-center gap-6 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-[#22C55E]/20 flex items-center justify-center text-[#22C55E] font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-[#000000]">Acción Autónoma</h4>
                    <p className="text-sm text-[#1E2939]">Se actualiza el CRM, se genera el PDF y se notifica al equipo por Slack en segundos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1E2939] rounded-2xl overflow-hidden shadow-2xl shadow-gray-400/20">
              <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-xs font-mono text-gray-400">root@videss-server:~# bash run_automation.sh</span>
              </div>
              <div className="p-6 h-[350px] font-mono text-sm overflow-hidden flex flex-col justify-end">
                {logs.map((log, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`py-1 ${log.includes('[SUCCESS]') ? 'text-[#22C55E]' : log.includes('[INFO]') ? 'text-blue-400' : 'text-gray-300'}`}
                  >
                    {log}
                  </motion.div>
                ))}
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-gray-400">&gt;</span>
                  <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-[#FFFFFF]" ref={metricsRef}>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMetricsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="p-8 border border-gray-100 rounded-3xl bg-gray-50/50"
          >
            <div className="text-5xl md:text-6xl font-extrabold text-[#22C55E] mb-2 tracking-tighter">99.9%</div>
            <p className="font-bold text-[#000000]">Disponibilidad</p>
            <p className="text-sm text-[#1E2939] mt-2">Operación continua y resiliente.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMetricsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 border border-gray-100 rounded-3xl bg-gray-50/50"
          >
            <div className="text-5xl md:text-6xl font-extrabold text-[#22C55E] mb-2 tracking-tighter">+40h</div>
            <p className="font-bold text-[#000000]">Ahorro Promedio Semanal</p>
            <p className="text-sm text-[#1E2939] mt-2">Horas hombre devueltas a la estrategia.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isMetricsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 border border-gray-100 rounded-3xl bg-gray-50/50"
          >
            <div className="text-5xl md:text-6xl font-extrabold text-[#22C55E] mb-2 tracking-tighter">0.01s</div>
            <p className="font-bold text-[#000000]">Latencia Operativa</p>
            <p className="text-sm text-[#1E2939] mt-2">Velocidad de procesamiento de datos.</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="bg-[url('/img/img_automate/hero_automate.jpg')] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#800ED4] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#22C55E] rounded-full blur-[100px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              ¿Listo para automatizar tu flujo de trabajo?
            </h2>
            <p className="text-xl text-gray-300">
              Deja las tareas repetitivas a las máquinas. Usa nuestro cotizador inteligente para estimar la inversión de tu próximo bot.
            </p>
            
            <Link href="/cotizador?type=bots" className="inline-block">
              <button className="bg-[#800ED4] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-opacity-90 hover:scale-105 transition-all shadow-xl shadow-[#800ED4]/30 flex items-center gap-3">
                <Terminal size={24} /> Iniciar Cotizador Inteligente
              </button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}