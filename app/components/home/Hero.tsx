"use client"; 

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';

interface Props {
  title: React.ReactNode;
  subtitle: string;
}

export const Hero = ({ title, subtitle }: Props) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
      
      <motion.div 
        className="flex-1 space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#1E2939] leading-[1.1]">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
          {subtitle}
        </p>
        <div className="flex gap-4">
          <Link href="/cotizador">
            <button className="bg-[#800ED4] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 hover:shadow-lg hover:shadow-[#800ED4]/30 transition-all flex items-center gap-2 active:scale-95">
              Cotizar Proyecto <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </motion.div>
      
      <div className="flex-1 relative w-full flex justify-center perspective-[1000px]">
        <motion.div 
          style={{ 
            rotateX, 
            rotateY, 
            x: translateX, 
            y: translateY 
          }}
          className="relative aspect-square w-full max-w-md md:max-w-xl z-10"
        >
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full relative drop-shadow-2xl"
          >
            <Image 
              src="/img/img_home/vid_hero.png" 
              alt="Robot Mascota Videss Labs" 
              fill 
              className="object-contain" 
              priority 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </motion.div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#800ED4] rounded-full blur-[100px] opacity-20 -z-10"></div>
      </div>

    </section>
  );
};