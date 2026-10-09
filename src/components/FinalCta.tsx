import { ArrowUpRight } from 'lucide-react';
import { AppConfig } from '../types';

interface FinalCtaProps {
  config: AppConfig;
}

export default function FinalCta({ config }: FinalCtaProps) {
  const contactUrl = config.whatsapp
    ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`
    : config.instagramUrl || 'https://www.instagram.com/glowsites.pt/';

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Soft golden radiant glow */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8D3A3]/25 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="p-10 sm:p-14 md:p-16 rounded-3xl bg-[#FFFBF3] border-2 border-[#E8D3A3] gold-glow relative">
          <div className="text-[#B8893B] text-xl select-none mb-4" aria-hidden="true">
            ✦
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A2A1A] mb-4 leading-tight">
            Quer ver o seu site ganhar vida?
          </h2>

          <p className="text-base sm:text-lg text-[#7A6650] max-w-2xl mx-auto leading-relaxed mb-8">
            Me conta o que você tem em mente para o seu espaço. Criamos um site sob medida para a sua marca, sem modelos prontos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold text-[#3A2A1A] gold-gradient rounded-full hover:brightness-105 active:scale-98 transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6420]"
            >
              <span>Quero meu site</span>
              <ArrowUpRight className="w-5 h-5 text-[#3A2A1A]" />
            </a>
          </div>

          <p className="text-xs text-[#7A6650] mt-4 tracking-wide">
            Sem compromisso. A gente conversa com calma.
          </p>
        </div>
      </div>
    </section>
  );
}
