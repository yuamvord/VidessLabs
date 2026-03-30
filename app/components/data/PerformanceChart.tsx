"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

// Datos estrictamente operativos (Cero métricas financieras)
const data = [
  { month: 'Ene', tbProcessed: 120, latencyMs: 240 },
  { month: 'Feb', tbProcessed: 150, latencyMs: 210 },
  { month: 'Mar', tbProcessed: 280, latencyMs: 180 },
  { month: 'Abr', tbProcessed: 420, latencyMs: 150 },
  { month: 'May', tbProcessed: 590, latencyMs: 120 },
  { month: 'Jun', tbProcessed: 810, latencyMs: 85 },
];

export const PerformanceChart = () => {
  return (
    <div className="w-full h-[400px] bg-white p-6 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#000000]">Eficiencia de Procesamiento vs Latencia</h3>
        <p className="text-sm text-[#1E2939]">Volumen de datos (TB) vs Tiempo de respuesta (ms)</p>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#1E2939', fontSize: 12 }} dy={10} />
          <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#1E2939', fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#1E2939', fontSize: 12 }} />
          
          <Tooltip 
            contentStyle={{ backgroundColor: '#1E2939', borderRadius: '12px', border: 'none', color: '#FFFFFF' }}
            itemStyle={{ color: '#FFFFFF' }}
            cursor={{ stroke: '#800ED4', strokeWidth: 1, strokeDasharray: '4 4' }}
          />
          
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="tbProcessed" 
            name="TB Procesados"
            stroke="#800ED4" 
            strokeWidth={4}
            dot={{ r: 4, strokeWidth: 2, fill: '#FFFFFF' }}
            activeDot={{ r: 8, fill: '#800ED4', stroke: '#FFFFFF', strokeWidth: 2 }}
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="latencyMs" 
            name="Latencia (ms)"
            stroke="#22C55E" 
            strokeWidth={4}
            dot={{ r: 4, strokeWidth: 2, fill: '#FFFFFF' }}
            activeDot={{ r: 8, fill: '#22C55E', stroke: '#FFFFFF', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};