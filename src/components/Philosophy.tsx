import { PHILOSOPHY_CARDS } from '../data/content';
import DynamicIcon from './DynamicIcon';

export default function Philosophy() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-[#8C6420] font-medium select-none">
            Nossa abordagem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#3A2A1A] mt-2 mb-3">
            Como pensamos o seu site
          </h2>
          <p className="text-[#7A6650] text-base sm:text-lg">
            Uma abordagem pensada para você não precisar se preocupar com nada técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PHILOSOPHY_CARDS.map((card, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-[#FFFBF3] border border-[#E8D3A3] gold-glow hover:border-[#B8893B] transition-card flex flex-col items-start relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7F0E3] flex items-center justify-center text-[#B8893B] mb-6 group-hover:scale-105 transition-transform duration-200">
                <DynamicIcon name={card.iconName} className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#3A2A1A] mb-3 leading-snug">
                {card.title}
              </h3>
              <p className="text-[#7A6650] text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
