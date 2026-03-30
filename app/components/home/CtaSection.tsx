import { Button } from '../ui/Button';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="container mx-auto px-6 py-22 text-center">
      <div className="p-16 rounded-[3rem] shadow-2xl space-y-8 bg-[url('/img/img_home/hero_cta.jpg')] bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
          Lleva tu empresa al siguiente nivel tecnológico.
        </h2>
        
        <Link 
          href="https://wa.me/50255705760/?text=Hola%20VidessLabs%20me%20gustaría%20hablar%20con%20un%20ingeniero." 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button text="Hablemos con un Ingeniero" variant="primary" />
        </Link>
        
      </div>
    </section>
  );
};