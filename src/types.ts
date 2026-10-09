export type CategoryId = 'all' | 'identidade' | 'conteudo' | 'agendamento' | 'visibilidade' | 'tecnico';

export interface ResourceItem {
  id: number;
  category: Exclude<CategoryId, 'all'>;
  categoryLabel: string;
  title: string;
  summary: string;
  explanation: string;
  forYou: string;
  iconName: string;
}

export interface PhilosophyCard {
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  summary: string;
  details: string;
}

export interface PostDeliveryCard {
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface AppConfig {
  studioName: string;
  instagramUser: string;
  instagramUrl: string;
  whatsapp: string;
  whatsappMessage: string;
}
