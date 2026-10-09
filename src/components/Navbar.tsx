import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AppConfig } from '../types';

interface NavbarProps {
  config: AppConfig;
}

export default function Navbar({ config }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactUrl = config.whatsapp
    ? `https://wa.me/${config.whatsapp}?text=${encodeURIComponent(config.whatsappMessage)}`
    : config.instagramUrl || 'https://www.instagram.com/glowsites.pt/';

  const navLinks = [
    { label: 'O que inclui', href: '#recursos' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Tecnologia', href: '#tecnologia' },
    { label: 'Depois da entrega', href: '#pos-entrega' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFBF3]/95 backdrop-blur-md border-b border-[#E8D3A3]/70 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Left: Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B] rounded-lg py-1 px-1.5"
          aria-label="Glow Sites - Início"
        >
          <img
            src="/logo.jpg"
            alt="Glow Sites"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#E8D3A3] shadow-xs group-hover:scale-105 transition-transform duration-200"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/nq1F07Xh/logo.jpg';
            }}
          />
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#3A2A1A]">
            Glow <span className="text-[#8C6420]">Sites</span>
          </span>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-[#7A6650]"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#8C6420] transition-colors relative py-1 focus:outline-none focus-visible:text-[#8C6420]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Studio dedication & Primary Action */}
        <div className="flex items-center gap-3.5">
          {config.studioName && (
            <div className="hidden sm:flex items-center text-xs tracking-wide text-[#7A6650] bg-[#F7F0E3] px-3 py-1.5 rounded-full border border-[#E8D3A3]/80">
              <span>Proposta para</span>
              <span className="ml-1.5 font-semibold text-[#8C6420] truncate max-w-[130px] lg:max-w-[180px]">
                {config.studioName}
              </span>
            </div>
          )}

          <a
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 text-sm font-medium text-[#3A2A1A] gold-gradient rounded-full hover:brightness-105 active:scale-95 transition-all shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6420]"
          >
            <span>Falar comigo</span>
            <ArrowUpRight className="w-4 h-4 text-[#3A2A1A]" />
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#7A6650] hover:text-[#3A2A1A] rounded-lg hover:bg-[#F7F0E3] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8893B]"
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Reading Progress Line */}
      <div className="w-full h-[2px] bg-transparent overflow-hidden">
        <div
          className="h-full gold-gradient transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFBF3] border-b border-[#E8D3A3] px-6 py-5 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          {config.studioName && (
            <div className="mb-4 pb-3 border-b border-[#E8D3A3]/50 text-xs text-[#7A6650]">
              Proposta exclusiva para <span className="font-semibold text-[#8C6420]">{config.studioName}</span>
            </div>
          )}
          <nav className="flex flex-col space-y-3" aria-label="Menu móvel">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-[#3A2A1A] hover:text-[#8C6420] text-base py-2 transition-colors border-b border-[#E8D3A3]/30"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
