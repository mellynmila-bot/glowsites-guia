import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  Globe2,
  PackageCheck,
  ArrowDown,
  ArrowRight,
} from 'lucide-react';
import { AppConfig } from '../types';

interface HeroProps {
  config: AppConfig;
}

export default function Hero({ config }: HeroProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(28);
      return;
    }

    const duration = 1200; // ms
    const steps = 28;
    const stepTime = Math.floor(duration / steps);
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 28) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic background ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E8D3A3]/30 via-[#D9B66A]/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-10 text-[#E8D3A3] text-sm select-none opacity-60 hidden md:block"
        aria-hidden="true"
      >
        ✦
      </div>
      <div
        className="absolute bottom-12 right-12 text-[#E8D3A3] text-sm select-none opacity-60 hidden md:block"
        aria-hidden="true"
      >
        ✦
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header Brand Photo Emblem */}
        <div className="flex justify-center mb-6">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#8C6420] via-[#D9B66A] to-[#E8D3A3] shadow-md group">
            <img
              src="/logo.jpg"
              alt="Glow Sites"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#FFFBF3] shadow-inner group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/nq1F07Xh/logo.jpg';
              }}
            />
          </div>
        </div>

        {/* Small top tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFBF3] border border-[#E8D3A3] text-xs font-medium text-[#8C6420] shadow-xs mb-6 animate-in fade-in duration-300">
          <span className="text-[#B8893B]">✦</span>
          <span>Proposta educativa · Glow Sites</span>
          {config.studioName && (
            <>
              <span className="text-[#E8D3A3]" aria-hidden="true">·</span>
              <span className="text-[#3A2A1A] font-semibold">{config.studioName}</span>
            </>
          )}
        </div>

        {/* H1 Title */}
        <h1 className="font-serif text-[2.5rem] leading-[1.12] sm:text-5xl md:text-6xl font-semibold text-[#3A2A1A] tracking-tight mb-6 max-w-3xl mx-auto">
          Tudo o que o seu site já tem, explicado sem complicação
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#7A6650] max-w-2xl mx-auto leading-relaxed mb-10">
          Design exclusivo, aparecer no Google e nas IAs, agendamento, hospedagem e domínio. Sem modelos prontos e sem mensalidade.
        </p>

        {/* Large Gold Animated Counter Showcase */}
        <div className="inline-flex flex-col items-center justify-center p-6 sm:p-8 rounded-3xl bg-[#FFFBF3] border border-[#E8D3A3] gold-glow mb-10 max-w-sm w-full mx-auto relative group">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-6xl sm:text-7xl font-bold gold-gradient-text tracking-tight tabular-nums select-none">
              {count}
            </span>
          </div>
          <span className="text-sm sm:text-base font-medium text-[#3A2A1A] mt-1 tracking-wide">
            recursos incluídos no seu site
          </span>
          <span className="text-xs text-[#7A6650] mt-1">
            Cada detalhe pensado para o seu estúdio
          </span>
        </div>

        {/* 4 Highlights in Line */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 text-left">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF3]/80 border border-[#E8D3A3]/70 hover:border-[#B8893B] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#F7F0E3] flex items-center justify-center text-[#B8893B] mb-2.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#3A2A1A] leading-snug">
              Identidade visual única
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF3]/80 border border-[#E8D3A3]/70 hover:border-[#B8893B] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#F7F0E3] flex items-center justify-center text-[#B8893B] mb-2.5">
              <Search className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#3A2A1A] leading-snug">
              Pensado para o Google e para as IAs
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF3]/80 border border-[#E8D3A3]/70 hover:border-[#B8893B] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#F7F0E3] flex items-center justify-center text-[#B8893B] mb-2.5">
              <Globe2 className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#3A2A1A] leading-snug">
              Domínio e hospedagem incluídos
            </p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFBF3]/80 border border-[#E8D3A3]/70 hover:border-[#B8893B] transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#F7F0E3] flex items-center justify-center text-[#B8893B] mb-2.5">
              <PackageCheck className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#3A2A1A] leading-snug">
              Entrega pronta, sem mensalidade
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a
            href="#recursos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-[#3A2A1A] gold-gradient rounded-full hover:brightness-105 active:scale-98 transition-all shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6420]"
          >
            <span>Ver tudo o que está incluído</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#como-funciona"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-[#8C6420] bg-transparent border border-[#B8893B] rounded-full hover:bg-[#FFFBF3] active:scale-98 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6420]"
          >
            <span>Ver como funciona</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Small transparent package notice */}
        <p className="text-xs text-[#7A6650] mt-3 tracking-wide">
          Sem custos ocultos. Pacote transparente.
        </p>
      </div>
    </section>
  );
}
