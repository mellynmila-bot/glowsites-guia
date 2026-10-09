import { Zap, ShieldCheck, Server, Sparkles } from 'lucide-react';
import { VERCEL_COLUMNS } from '../data/content';

export default function HostingVercel() {
  const iconMap: Record<string, typeof Zap> = {
    Zap,
    ShieldCheck,
    Server,
  };

  return (
    <section id="tecnologia" className="py-20 sm:py-28 bg-[#3A2A1A] text-[#FFFBF3] relative overflow-hidden scroll-mt-20">
      {/* Background glow and subtle golden starry accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-[#B8893B]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9B66A]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#D9B66A] font-semibold select-none">
            Infraestrutura de ponta
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FFFBF3] mt-2 mb-4 leading-tight">
            Hospedado onde as grandes equipes hospedam
          </h2>
          <p className="text-[#E8D3A3] text-base sm:text-lg leading-relaxed">
            Seu site fica na Vercel, plataforma de referência mundial usada por equipes de tecnologia e marcas inovadoras em todo o planeta.
          </p>

          {/* Clean Text-based Vercel Infrastructure Card (no third-party logo image) */}
          <div className="inline-flex items-center gap-3 mt-8 px-6 py-2.5 rounded-full bg-[#FFFBF3]/5 border border-[#E8D3A3]/25 backdrop-blur-xs">
            <span className="font-serif text-lg font-semibold tracking-wider text-[#FFFBF3]">
              ▲ Vercel
            </span>
            <span className="text-xs text-[#D9B66A]" aria-hidden="true">|</span>
            <span className="text-xs tracking-widest uppercase text-[#E8D3A3]/80">
              Cloud Infrastructure
            </span>
          </div>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {VERCEL_COLUMNS.map((col, index) => {
            const Icon = iconMap[col.iconName] || Sparkles;
            return (
              <div
                key={index}
                className="p-7 sm:p-8 rounded-2xl bg-[#FFFBF3]/5 border border-[#E8D3A3]/20 hover:border-[#D9B66A]/60 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#FFFBF3]/10 flex items-center justify-center text-[#D9B66A] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#FFFBF3] mb-3">
                    {col.title}
                  </h3>
                  <p className="text-[#E8D3A3]/90 text-sm sm:text-base leading-relaxed">
                    {col.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Banner: Zero Technical Maintenance */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#FFFBF3]/10 border border-[#D9B66A]/30 text-center max-w-3xl mx-auto backdrop-blur-xs">
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#FFFBF3] mb-2">
            Sem manutenção técnica para você.
          </h3>
          <p className="text-sm sm:text-base text-[#E8D3A3] leading-relaxed">
            Você não configura servidores nem mexe em linhas de comando. Fica tudo a cargo da Glow Sites.
          </p>
        </div>
      </div>
    </section>
  );
}
