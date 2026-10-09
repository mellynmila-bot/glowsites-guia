import React, { useState, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp, X, Sparkles } from 'lucide-react';
import { CATEGORIES, RESOURCES } from '../data/resources';
import { CategoryId, ResourceItem } from '../types';
import DynamicIcon from './DynamicIcon';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: RESOURCES.length };
    RESOURCES.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered resources
  const filteredResources = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return RESOURCES.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      const titleMatch = item.title.toLowerCase().includes(query);
      const summaryMatch = item.summary.toLowerCase().includes(query);
      const explanationMatch = item.explanation.toLowerCase().includes(query);
      const forYouMatch = item.forYou.toLowerCase().includes(query);

      return titleMatch || summaryMatch || explanationMatch || forYouMatch;
    });
  }, [searchQuery, selectedCategory]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allFilteredIds = filteredResources.map((r) => r.id);
    setExpandedIds(new Set(allFilteredIds));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section id="recursos" className="py-20 sm:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFFBF3] border border-[#E8D3A3] text-xs font-medium text-[#8C6420] mb-3">
            <span>✦</span>
            <span>Catálogo Completo</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3A2A1A] mb-4">
            O que está incluído no seu site
          </h2>
          <p className="text-[#7A6650] text-base sm:text-lg max-w-2xl mx-auto">
            Toque em qualquer cartão para ver exatamente para que serve e como valoriza o seu negócio.
          </p>
        </div>

        {/* Search & Actions Bar */}
        <div className="max-w-4xl mx-auto mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#7A6650]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar recurso (ex.: SEO, WhatsApp, domínio, mapa)"
              className="w-full pl-12 pr-10 py-3.5 bg-[#FFFBF3] border border-[#E8D3A3] rounded-2xl text-[#3A2A1A] placeholder-[#7A6650]/70 text-base shadow-xs focus:outline-none focus:ring-2 focus:ring-[#B8893B] focus:border-transparent transition-all"
              aria-label="Buscar recurso no catálogo"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#7A6650] hover:text-[#3A2A1A]"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2" role="tablist" aria-label="Filtrar recursos por categoria">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  role="tab"
                  aria-selected={isSelected}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C6420] ${
                    isSelected
                      ? 'gold-gradient text-[#FFFBF3] shadow-xs'
                      : 'bg-[#FFFBF3] text-[#7A6650] border border-[#E8D3A3] hover:border-[#B8893B] hover:text-[#3A2A1A]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`ml-1.5 opacity-80 tabular-nums ${isSelected ? 'text-[#FFFBF3]' : 'text-[#8C6420]'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controls & Live Counter */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#E8D3A3]/60 text-xs sm:text-sm text-[#7A6650]">
            <div className="font-medium">
              Mostrando <span className="text-[#8C6420] font-semibold tabular-nums">{filteredResources.length}</span> de 28 recursos
              {selectedCategory !== 'all' && (
                <span className="text-[#7A6650] ml-1">
                  em &ldquo;{CATEGORIES.find((c) => c.id === selectedCategory)?.label}&rdquo;
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="px-3 py-1.5 rounded-lg bg-[#FFFBF3] border border-[#E8D3A3] hover:border-[#B8893B] hover:text-[#3A2A1A] text-xs font-medium transition-colors cursor-pointer"
              >
                Expandir todos
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3 py-1.5 rounded-lg bg-[#FFFBF3] border border-[#E8D3A3] hover:border-[#B8893B] hover:text-[#3A2A1A] text-xs font-medium transition-colors cursor-pointer"
              >
                Recolher
              </button>
            </div>
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#FFFBF3] border border-[#E8D3A3] rounded-3xl max-w-xl mx-auto gold-glow">
            <p className="text-base text-[#3A2A1A] font-medium mb-2">
              Nenhum recurso encontrado. Tente outra palavra.
            </p>
            <p className="text-xs text-[#7A6650] mb-4">
              Experimente buscar por termos como &ldquo;Google&rdquo;, &ldquo;WhatsApp&rdquo;, &ldquo;fotos&rdquo; ou &ldquo;domínio&rdquo;.
            </p>
            <button
              type="button"
              onClick={handleClearSearch}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#8C6420] border border-[#B8893B] rounded-full hover:bg-[#F7F0E3] transition-colors"
            >
              <span>Limpar busca</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
            {filteredResources.map((item) => {
              const isExpanded = expandedIds.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl bg-[#FFFBF3] border transition-card flex flex-col relative overflow-hidden ${
                    isExpanded
                      ? 'border-[#B8893B] shadow-md ring-1 ring-[#B8893B]/20'
                      : 'border-[#E8D3A3] gold-glow hover:border-[#B8893B]/80'
                  }`}
                >
                  {/* Card Header / Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleExpand(item.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`resource-desc-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-3.5 focus:outline-none focus-visible:bg-[#F7F0E3]/50 cursor-pointer"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#F7F0E3] flex-shrink-0 flex items-center justify-center text-[#B8893B]">
                        <DynamicIcon name={item.iconName} className="w-5 h-5" />
                      </div>
                      <div>
                        {/* Quiet category label */}
                        <div className="text-[11px] font-medium text-[#8C6420] tracking-wide mb-1">
                          {item.categoryLabel}
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#3A2A1A] leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[#7A6650] mt-1 line-clamp-2 leading-relaxed">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                        isExpanded ? 'bg-[#F7F0E3] text-[#8C6420]' : 'text-[#7A6650]'
                      }`}
                      aria-hidden="true"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {/* Expanded Accordion Body */}
                  {isExpanded && (
                    <div
                      id={`resource-desc-${item.id}`}
                      className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#E8D3A3]/50 animate-in fade-in duration-200"
                    >
                      {/* Detailed Explanation */}
                      <p className="text-sm text-[#3A2A1A] leading-relaxed mb-4">
                        {item.explanation}
                      </p>

                      {/* "Para você" Benefit Callout */}
                      <div className="p-3.5 rounded-xl bg-[#F7F0E3] border border-[#E8D3A3] flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-[#B8893B] flex-shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm text-[#3A2A1A] leading-relaxed">
                          <span className="font-semibold text-[#8C6420]">Para você: </span>
                          <span>{item.forYou}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
