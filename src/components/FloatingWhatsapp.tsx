import { MessageCircle } from 'lucide-react';
import { AppConfig } from '../types';

interface FloatingWhatsappProps {
  config: AppConfig;
}

export default function FloatingWhatsapp({ config }: FloatingWhatsappProps) {
  if (!config.whatsapp) {
    return null;
  }

  const whatsappUrl = `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`;

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#25D366]"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          Conversar no WhatsApp
        </span>
      </a>
    </aside>
  );
}
