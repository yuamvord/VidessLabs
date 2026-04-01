import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; 

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/50255705760" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 
                 bg-[#800ED4] text-white 
                 w-14 h-14 rounded-full 
                 flex items-center justify-center 
                 shadow-lg hover:bg-[#6b0cb3] 
                 transition-all duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    )
    >
      <MessageCircle size={30} strokeWidth={1.5} />
    </Link>
  );
}
