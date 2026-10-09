import { useState } from 'react';
import { Clock, Check } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const currentStepData = PROCESS_STEPS.find((s) => s.number === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="como-funciona" className="py-20 sm:py-24 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6420] font-medium select-none">
            Processo Transparente
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A2A1A] mt-2 mb-3">
            Como funciona: 4 passos
          </h2>
          <p className="text-[#7A6650] text-base sm:text-lg">
            Do primeiro contato ao lançamento, um processo simples e sem complicação técnica para você.
          </p>
        </div>

        {/* Steps Navigation / Timeline */}
        <div className="mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative" role="tablist" aria-label="Passos do processo">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step.number;
              const isPast = activeStep > step.number;
              return (
                <button
                  key={step.number}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveStep(step.number)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                    isActive
                      ? 'bg-[#FFFBF3] border-[#B8893B] shadow-md ring-1 ring-[#B8893B]/20'
                      : 'bg-[#FFFBF3]/70 border-[#E8D3A3] hover:border-[#B8893B]/60 hover:bg-[#FFFBF3]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center transition-colors ${
                        isActive
                          ? 'gold-gradient text-[#FFFBF3]'
                          : isPast
                          ? 'bg-[#E8D3A3] text-[#3A2A1A]'
                          : 'bg-[#F7F0E3] text-[#7A6650]'
                      }`}
                    >
                      {isPast ? <Check className="w-3.5 h-3.5" /> : step.number}
                    </span>
                    <span className="text-[11px] text-[#7A6650]">
                      Passo {step.number} de 4
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-semibold text-[#3A2A1A]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#7A6650] mt-1 line-clamp-2">
                      {step.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Showcase Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFBF3] border border-[#E8D3A3] gold-glow relative overflow-hidden mb-10 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8D3A3]/60">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8C6420] mb-2">
                <span>Passo {currentStepData.number} de 4</span>
                <span className="text-[#E8D3A3]">✦</span>
                <span>{currentStepData.title}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#3A2A1A]">
                {currentStepData.summary}
              </h3>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#7A6650] mb-2">
              O que acontece nesta etapa
            </h4>
            <p className="text-base sm:text-lg text-[#3A2A1A] leading-relaxed">
              {currentStepData.details}
            </p>
          </div>
        </div>

        {/* Highlight Banner: 24h Deadline */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFFBF3] via-[#F7F0E3] to-[#FFFBF3] border border-[#E8D3A3] flex items-center justify-center gap-3 text-center shadow-xs">
          <div className="w-9 h-9 rounded-full bg-[#FFFBF3] border border-[#E8D3A3] flex items-center justify-center text-[#B8893B] flex-shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <p className="text-sm sm:text-base font-semibold text-[#3A2A1A]">
            Prazo: o esboço do seu site fica pronto em 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
