import { POST_DELIVERY_CARDS } from '../data/content';
import DynamicIcon from './DynamicIcon';

export default function PostDelivery() {
  return (
    <section id="pos-entrega" className="py-20 sm:py-24 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6420] font-medium select-none">
            Suporte e Tranquilidade
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A2A1A] mt-2 mb-3 leading-tight">
            Mais do que um site: tranquilidade depois da entrega
          </h2>
          <p className="text-[#7A6650] text-base sm:text-lg">
            Você recebe tudo pronto e não precisa se preocupar com nada técnico.
          </p>
        </div>

        {/* 6 Cards Grid with "Incluído" badge */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {POST_DELIVERY_CARDS.map((card, index) => (
            <div
              key={index}
              className="p-7 sm:p-8 rounded-2xl bg-[#FFFBF3] border border-[#E8D3A3] gold-glow hover:border-[#B8893B] transition-card flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F0E3] flex items-center justify-center text-[#B8893B]">
                    <DynamicIcon name={card.iconName} className="w-5 h-5" />
                  </div>
                  {/* Subtle "Incluído" badge */}
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F7F0E3] text-[#8C6420] border border-[#E8D3A3]">
                    Incluído
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3A2A1A] mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#7A6650] text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footnote */}
        <p className="text-center text-xs text-[#7A6650] tracking-wide">
          * Condições detalhadas enviadas por escrito antes de avançar.
        </p>
      </div>
    </section>
  );
}
