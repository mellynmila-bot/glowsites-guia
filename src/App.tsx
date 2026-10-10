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

export default function App() {
  const [config, setConfig] = useState<AppConfig>(getAppConfig);

  useEffect(() => {
    setConfig(getAppConfig());
  }, []);

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
    </div>
  );
}
