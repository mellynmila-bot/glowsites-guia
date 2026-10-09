import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // 1st item open by default

  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-24 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFBF3] border border-[#E8D3A3] text-xs font-medium text-[#8C6420] mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8893B]" />
            <span>Tire suas dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A2A1A] mb-3">
            Perguntas frequentes
          </h2>
          <p className="text-[#7A6650] text-base sm:text-lg">
            Respostas diretas e transparentes sobre a criação e entrega do seu site.
          </p>
        </div>

        {/* Accordion List (one open at a time) */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl bg-[#FFFBF3] border transition-card overflow-hidden ${
                  isOpen
                    ? 'border-[#B8893B] shadow-md ring-1 ring-[#B8893B]/20'
                    : 'border-[#E8D3A3] gold-glow hover:border-[#B8893B]/70'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#F7F0E3]"
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#3A2A1A] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-[#F7F0E3] text-[#8C6420]' : 'text-[#7A6650]'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#7A6650] leading-relaxed border-t border-[#E8D3A3]/40 animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
