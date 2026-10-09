import { AppConfig, FaqItem, PhilosophyCard, PostDeliveryCard, ProcessStep } from '../types';

export const PHILOSOPHY_CARDS: PhilosophyCard[] = [
  {
    title: 'Design exclusivo, feito do zero.',
    description: 'Criamos o site a partir da identidade da sua marca. Nada de modelos genéricos.',
    iconName: 'Sparkles',
  },
  {
    title: 'Feito para gerar agendamentos.',
    description: 'Não é só bonito. Cada seção guia a visitante até a marcação do horário.',
    iconName: 'CalendarCheck',
  },
  {
    title: 'Preparado para ser encontrada.',
    description: 'Estrutura pensada para o Google e para as pesquisas por IA, para quem procura o seu serviço na sua região.',
    iconName: 'Compass',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Conversa',
    summary: 'Entendo a sua marca e o que você quer mostrar.',
    details: 'Alinhamos o estilo do estúdio, os serviços em destaque e o público que você quer atrair. Você me envia fotos, textos e links por mensagem.',
  },
  {
    number: 2,
    title: 'Esboço',
    summary: 'Você recebe a proposta visual para ver e aprovar.',
    details: 'O site fica pronto em 24 horas para você aprovar, navegável no celular e no computador.',
  },
  {
    number: 3,
    title: 'Ajustes',
    // [DEFINIR nº de rodadas de ajuste]
    summary: 'Refinamos textos, fotos e detalhes com você.',
    details: 'Ajustamos portfólio, descrições e botões de agendamento até ficar perfeito para o seu estúdio.',
  },
  {
    number: 4,
    title: 'Publicação',
    summary: 'O site vai ao ar, com domínio e hospedagem prontos.',
    details: 'Lançamento oficial. Fica pronto para colocar na bio do Instagram, no Google e enviar às clientes.',
  },
];

export const VERCEL_COLUMNS = [
  {
    title: 'Velocidade',
    description: 'O site é servido por servidores espalhados pelo mundo, perto de quem o abre, em qualquer país.',
    iconName: 'Zap',
  },
  {
    title: 'Segurança',
    description: 'Certificado HTTPS automático e contínuo, que protege as informações e passa confiança.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Estabilidade',
    description: 'Infraestrutura de classe mundial, preparada para picos de visitas e para ficar sempre no ar.',
    iconName: 'Server',
  },
];

export const POST_DELIVERY_CARDS: PostDeliveryCard[] = [
  {
    title: 'Domínio e hospedagem incluídos',
    description: 'Você recebe tudo pronto, com endereço do seu estúdio e hospedagem configurada.',
    iconName: 'Globe',
  },
  {
    title: 'Sem mensalidade',
    description: 'Não existe aluguel mensal pelo site. O investimento é único e cobre a criação e a entrega.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Mudou de endereço?',
    // [CONFIRMAR política: gratuito ou limite de alterações]
    description: 'Atualizamos endereço, mapa e instruções de chegada.',
    iconName: 'MapPin',
  },
  {
    title: 'Mudou a equipe?',
    // [CONFIRMAR política]
    description: 'Entra ou sai uma profissional e o site acompanha, com nova foto, bio e link de agendamento.',
    iconName: 'Users',
  },
  {
    title: 'Pequenos ajustes',
    // [CONFIRMAR política e prazo]
    description: 'Troca de fotos, ajuste de textos e novos horários.',
    iconName: 'Sliders',
  },
  {
    title: 'Contato direto',
    description: 'Você fala diretamente comigo por mensagem privada, sem intermediários.',
    iconName: 'MessageSquare',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: 'O domínio e a hospedagem já estão incluídos?',
    answer: 'Sim. Você recebe tudo pronto para usar. Cuidamos da configuração do domínio e da hospedagem, e você não precisa mexer em nada técnico.',
  },
  {
    id: 2,
    question: 'Quanto tempo leva para ficar pronto?',
    answer: 'O esboço fica pronto em 24 horas para você ver e aprovar. Depois fazemos os ajustes e publicamos.',
  },
  {
    id: 3,
    question: 'Preciso pagar mensalidade?',
    answer: 'Não. O investimento é único. Não há mensalidade de hospedagem do site.',
  },
  {
    id: 4,
    question: 'O que eu preciso enviar?',
    answer: 'Fotos dos seus trabalhos, lista de serviços, endereço, link de agenda ou WhatsApp e, se tiver, sua logo e cores. O restante, inclusive os textos, fica por nossa conta.',
  },
  {
    id: 5,
    question: 'O site vai aparecer no Google?',
    answer: 'Ele nasce estruturado para ser encontrado (SEO, GEO e AIO). O tempo que o Google e as IAs levam para reconhecer um site novo varia, por isso não prometemos posições imediatas.',
  },
  {
    id: 6,
    question: 'Funciona bem no celular?',
    answer: 'Sim. Foi pensado primeiro para o celular, porque é por onde a maioria das clientes chega.',
  },
  {
    id: 7,
    question: 'Posso pedir alterações depois?',
    // [AJUSTAR conforme política de suporte]
    answer: 'Sim. Falamos pelo Instagram ou WhatsApp.',
  },
  {
    id: 8,
    question: 'Meu site fica em mais de um idioma?',
    // [CONFIRMAR idiomas do pacote]
    answer: 'Sim, no idioma que você precisar para atender as suas clientes.',
  },
  {
    id: 9,
    question: 'Posso colocar o link na bio do Instagram?',
    answer: 'Pode e deve. É para isso que o site foi feito.',
  },
];

export const DEFAULT_CONFIG: AppConfig = {
  studioName: '',
  instagramUser: 'glowsites.pt',
  instagramUrl: 'https://www.instagram.com/glowsites.pt/',
  whatsapp: '',
  whatsappMessage: 'Olá! Vi a proposta do meu site e gostei.',
};

export function getAppConfig(): AppConfig {
  if (typeof window === 'undefined') {
    return DEFAULT_CONFIG;
  }
  const params = new URLSearchParams(window.location.search);
  const estudioParam = params.get('estudio');
  const whatsappParam = params.get('whatsapp');

  return {
    studioName: estudioParam ? decodeURIComponent(estudioParam).trim() : '',
    instagramUser: 'glowsites.pt',
    instagramUrl: 'https://www.instagram.com/glowsites.pt/',
    whatsapp: whatsappParam ? whatsappParam.replace(/\D/g, '') : '',
    whatsappMessage: 'Olá! Vi a proposta do meu site e gostei.',
  };
}
