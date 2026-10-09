import { Search, Brain, Binary } from 'lucide-react';

export default function EducationalNote() {
  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#FFFBF3] border-2 border-[#E8D3A3] p-7 sm:p-10 md:p-12 gold-glow relative overflow-hidden">
          {/* Subtle decorative mark */}
          <div className="absolute top-6 right-8 text-[#E8D3A3] text-2xl select-none" aria-hidden="true">
            ✦
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#F7F0E3] flex items-center justify-center text-[#B8893B]">
              <Search className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#8C6420] font-semibold">
              Nota Educativa
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-[#3A2A1A] mb-6 leading-tight">
            Como funciona a visibilidade no Google e nas IAs
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#7A6650] leading-relaxed mb-10 max-w-3xl">
            <p>
              SEO, GEO e AIO são formas técnicas de preparar o site para ser encontrado de forma orgânica, sem pagar anúncio. Com o tempo, o Google e as ferramentas de IA leem e interpretam a estrutura do seu site, e isso ajuda você a aparecer nas pesquisas da sua região.
            </p>
            <p>
              Sem um site próprio, esse posicionamento orgânico não existe: perfis de rede social não são organizados para essas buscas.
            </p>
            <p className="font-medium text-[#3A2A1A]">
              Somos transparentes: não prometemos primeiro lugar imediato nem resultados de um dia para o outro, porque os buscadores levam tempo para reconhecer um site novo. O que garantimos é que o seu site nasce bem estruturado para ser encontrado.
            </p>
          </div>

          {/* Three mini blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-[#E8D3A3]/80">
            <div className="p-4 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3]/70">
              <div className="flex items-center gap-2 mb-2 text-[#8C6420]">
                <Search className="w-4 h-4 text-[#B8893B]" />
                <span className="font-semibold text-sm">SEO (Google)</span>
              </div>
              <p className="text-xs text-[#7A6650] leading-relaxed">
                Títulos, descrições e palavras-chave que os motores de busca leem para entender o seu estúdio na sua cidade.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3]/70">
              <div className="flex items-center gap-2 mb-2 text-[#8C6420]">
                <Brain className="w-4 h-4 text-[#B8893B]" />
                <span className="font-semibold text-sm">GEO (Respostas de IA)</span>
              </div>
              <p className="text-xs text-[#7A6650] leading-relaxed">
                Texto escrito de forma clara e consistente para que ferramentas como ChatGPT e Gemini citem você.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3]/70">
              <div className="flex items-center gap-2 mb-2 text-[#8C6420]">
                <Binary className="w-4 h-4 text-[#B8893B]" />
                <span className="font-semibold text-sm">AIO (Dados estruturados)</span>
              </div>
              <p className="text-xs text-[#7A6650] leading-relaxed">
                Marcação técnica no código que descreve com precisão quem você é, o que faz e onde atende.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
