import Link from 'next/link';
import { MessageCircle } from 'lucide-react'; 

export default function WhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/50255705760" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-[#25D366] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#128C7E] transition-all"
    >
      <MessageCircle size={20} />
      Contactar por WhatsApp
    </Link>
  );
}