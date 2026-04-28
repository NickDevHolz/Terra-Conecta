import {
  CloudSun,
  Droplets,
  Leaf,
  LucideIcon,
  Sprout,
  Store,
  Tractor,
  Truck,
  Waves,
} from 'lucide-react';

export const BRAND = {
  name: 'Terra Conecta',
  description: 'Apoio simples para produzir e vender',
  assistantName: 'Ori\u00e1',
  assistantTagline: 'assistente rural',
  copyright: 'Tecnologia social para agricultura familiar',
};

export const HOME_CONTENT = {
  badge: 'Quintais Produtivos',
  title: 'Toque no desenho para receber ajuda',
  description: 'Apoio para plantar, cuidar, colher, organizar e vender.',
  highlight: 'Ori\u00e1 ajuda por voz, foto e texto.',

  oriaBannerTitle: 'Oi, eu sou Ori\u00e1',
  oriaBannerSubtitle: 'Fale comigo ou mostre uma foto.',
  oriaBannerDescription: 'Ajudo no cuidado da planta, da produ\u00e7\u00e3o e da venda.',
  oriaPrimaryCta: 'Falar com Ori\u00e1',

  oriaSectionTitle: 'Apoio com Ori\u00e1',
  oriaSectionDescription: 'Use voz, foto ou texto.',

  quickSectionTitle: 'Escolha uma ajuda',
  helpTitle: 'Da produ\u00e7\u00e3o ao mercado',
  helpDescription: 'Apoio aos Quintais Produtivos.',
};

export const floatingItems: {
  Icon: LucideIcon;
  className: string;
  color: string;
  size: string;
}[] = [
  { Icon: Sprout, className: 'left-6 top-28 animate-float-slow', color: '#6C8E2A', size: 'h-10 w-10' },
  { Icon: Leaf, className: 'right-8 top-52 animate-float-medium', color: '#7AAE3C', size: 'h-9 w-9' },
  { Icon: Droplets, className: 'left-8 bottom-48 animate-float-medium', color: '#5FA7D9', size: 'h-9 w-9' },
  { Icon: Store, className: 'right-7 bottom-36 animate-float-slow', color: '#C88919', size: 'h-9 w-9' },
  { Icon: Truck, className: 'left-10 bottom-24 animate-float-medium', color: '#A26242', size: 'h-8 w-8' },
  { Icon: Tractor, className: 'right-12 top-[28rem] animate-float-slow', color: '#8A6A3A', size: 'h-9 w-9' },
  { Icon: CloudSun, className: 'left-14 top-[24rem] animate-float-medium', color: '#D8A145', size: 'h-9 w-9' },
  { Icon: Waves, className: 'right-10 bottom-[18rem] animate-float-slow', color: '#5FA7D9', size: 'h-8 w-8' },
];