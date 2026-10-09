import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Catalog from './components/Catalog';
import EducationalNote from './components/EducationalNote';
import HowItWorks from './components/HowItWorks';
import HostingVercel from './components/HostingVercel';
import PostDelivery from './components/PostDelivery';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Divider from './components/Divider';
import { getAppConfig } from './data/content';
import { AppConfig } from './types';
import { Sparkles, SlidersHorizontal, Check, Copy } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<AppConfig>(getAppConfig);
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [tempStudio, setTempStudio] = useState(config.studioName);
  const [tempWhatsapp, setTempWhatsapp] = useState(config.whatsapp);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    setConfig(getAppConfig());
  }, []);

  const handleApplyConfig = (e: React.FormEvent) => {
    e.preventDefault();
    const newConfig: AppConfig = {
      ...config,
      studioName: tempStudio.trim(),
      whatsapp: tempWhatsapp.replace(/\D/g, ''),
    };
    setConfig(newConfig);

    // Update query params in address bar without reload
    const url = new URL(window.location.href);
    if (newConfig.studioName) {
      url.searchParams.set('estudio', newConfig.studioName);
    } else {
      url.searchParams.delete('estudio');
    }
    if (newConfig.whatsapp) {
      url.searchParams.set('whatsapp', newConfig.whatsapp);
    } else {
      url.searchParams.delete('whatsapp');
    }
    window.history.replaceState({}, '', url.toString());
    setShowConfigModal(false);
  };

  const handleCopyShareLink = () => {
    const url = new URL(window.location.href);
    if (config.studioName) {
      url.searchParams.set('estudio', config.studioName);
    } else {
      url.searchParams.delete('estudio');
    }
    if (config.whatsapp) {
      url.searchParams.set('whatsapp', config.whatsapp);
    } else {
      url.searchParams.delete('whatsapp');
    }
    navigator.clipboard.writeText(url.toString());
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F7F0E3] text-[#3A2A1A] font-sans selection:bg-[#E8D3A3] selection:text-[#3A2A1A] flex flex-col">
      {/* Fixed Header Navbar */}
      <Navbar config={config} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero config={config} />

        <Divider />

        {/* 2. Filosofia: Como pensamos o seu site */}
        <Philosophy />

        <Divider />

        {/* 3. Catálogo: 28 recursos incluídos no seu site (Seção Principal) */}
        <Catalog />

        <Divider />

        {/* 4. Nota educativa: Visibilidade real no Google e nas IAs */}
        <EducationalNote />

        <Divider />

        {/* 5. Como funciona: 4 passos */}
        <HowItWorks />

        {/* 6. Tecnologia: Hospedagem na Vercel (Única Seção Escura #3A2A1A) */}
        <HostingVercel />

        {/* 7. Tranquilidade depois da entrega & Pagamento único */}
        <PostDelivery />

        <Divider />

        {/* 8. Perguntas Frequentes (FAQ) */}
        <FaqSection />

        {/* 9. Chamada Final (CTA) */}
        <FinalCta config={config} />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Floating WhatsApp Button (visible only when whatsapp is configured) */}
      <FloatingWhatsapp config={config} />

      {/* Discreet Demo Studio Customizer / Share Link Generator */}
      <div className="fixed bottom-6 left-6 z-40 print:hidden">
        <button
          type="button"
          onClick={() => {
            setTempStudio(config.studioName);
            setTempWhatsapp(config.whatsapp);
            setShowConfigModal(true);
          }}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFBF3]/90 backdrop-blur-md border border-[#E8D3A3] text-xs font-medium text-[#7A6650] hover:text-[#3A2A1A] hover:border-[#B8893B] shadow-md transition-all duration-200 cursor-pointer"
          title="Personalizar nome do estúdio no link"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#B8893B]" />
          <span>
            {config.studioName ? `Estúdio: ${config.studioName}` : 'Personalizar Proposta'}
          </span>
        </button>
      </div>

      {/* Modal for Client URL Parameter Customization */}
      {showConfigModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#FFFBF3] border-2 border-[#E8D3A3] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6420] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#B8893B]" />
              <span>Gerador de Link de Proposta</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#3A2A1A] mb-2">
              Personalizar para a profissional
            </h3>
            <p className="text-xs sm:text-sm text-[#7A6650] mb-5 leading-relaxed">
              Defina o nome do estúdio e o número de WhatsApp para gerar um link personalizado (`?estudio=...`).
            </p>

            <form onSubmit={handleApplyConfig} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#3A2A1A] mb-1">
                  Nome do Estúdio / Profissional
                </label>
                <input
                  type="text"
                  value={tempStudio}
                  onChange={(e) => setTempStudio(e.target.value)}
                  placeholder="Ex: Studio Bella Lash, Studio Ana Silva"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3] text-sm text-[#3A2A1A] placeholder-[#7A6650]/60 focus:outline-none focus:ring-2 focus:ring-[#B8893B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3A2A1A] mb-1">
                  WhatsApp com DDI (opcional)
                </label>
                <input
                  type="text"
                  value={tempWhatsapp}
                  onChange={(e) => setTempWhatsapp(e.target.value)}
                  placeholder="Ex: 5511999999999 (habilita botão flutuante)"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3] text-sm text-[#3A2A1A] placeholder-[#7A6650]/60 focus:outline-none focus:ring-2 focus:ring-[#B8893B]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-2.5 px-4 rounded-full gold-gradient text-sm font-semibold text-[#3A2A1A] hover:brightness-105 active:scale-98 transition-all shadow-xs cursor-pointer"
                >
                  Aplicar na página
                </button>
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="w-full sm:w-auto py-2.5 px-4 rounded-full bg-[#F7F0E3] border border-[#E8D3A3] hover:border-[#B8893B] text-xs font-medium text-[#3A2A1A] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#B8893B]" />}
                  <span>{copiedLink ? 'Copiado!' : 'Copiar link'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className="w-full sm:w-auto py-2.5 px-3 text-xs text-[#7A6650] hover:text-[#3A2A1A] cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
