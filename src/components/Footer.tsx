import { ArrowUp } from 'lucide-react';
import { AppConfig } from '../types';

interface FooterProps {
  config: AppConfig;
}

export default function Footer({ config }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FFFBF3] border-t border-[#E8D3A3] pt-14 pb-12 text-[#7A6650]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#E8D3A3]/60">
          {/* Logo & description */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpg"
                alt="Glow Sites"
                className="w-7 h-7 rounded-full object-cover border border-[#E8D3A3] shadow-xs select-none"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/nq1F07Xh/logo.jpg';
                }}
              />
              <span className="font-serif text-xl font-semibold text-[#3A2A1A]">
                Glow <span className="text-[#8C6420]">Sites</span>
              </span>
            </div>
            <span className="hidden sm:inline text-[#E8D3A3]">|</span>
            <span className="text-sm text-[#7A6650]">
              Sites para profissionais da beleza.
            </span>
          </div>

          {/* Links & Back to top */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href={config.instagramUrl || 'https://www.instagram.com/glowsites.pt/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3A2A1A] hover:text-[#8C6420] transition-colors font-medium flex items-center gap-1"
            >
              <span>@{config.instagramUser}</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F7F0E3] hover:bg-[#E8D3A3]/60 text-[#3A2A1A] text-xs font-medium transition-colors cursor-pointer"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#8C6420]" />
            </button>
          </div>
        </div>

        {/* Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A6650] text-center sm:text-left">
          <p>© 2026 Glow Sites. Todos os direitos reservados.</p>
          <p className="tracking-wide">
            Página de proposta educativa · Sem preços públicos.
          </p>
        </div>
      </div>
    </footer>
  );
}
