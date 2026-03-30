"use client";
import { MessageSquare } from 'lucide-react';

export const FloatingChat = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <button 
        onClick={() => console.log("Abrir panel de OpenAI")}
        className="w-16 h-16 bg-[#800ED4] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all"
        aria-label="Abrir chat"
      >
        <MessageSquare size={28} />
      </button>
    </div>
  );
};