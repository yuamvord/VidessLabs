import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 font-bold text-black">
            <div className="w-56 h-56 relative">
              <Image src="/img/img_home/logotipo.jpg" fill alt="Videss Labs Logo" className="object-contain" />
            </div>
          </div>
          <p className="text-sm text-[#1E2939]">
            © {new Date().getFullYear()} Videss Smart Solutions. Guatemala.<br />
            Ingeniería que escala tu negocio.
          </p>
        </div>

        <div className="w-94 h-94 relative transition-all duration-300 z-5">
          <Image src="/img/img_home/vid_footer.png" alt="Robot Videss" fill className="object-contain" />
        </div>

      </div>
    </footer>
  );
};