import {
  AlertTriangle,
  BadgeDollarSign,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock3,
  MapPinned,
  PackageCheck,
  PackageOpen,
  Scale,
  Store,
  Truck,
} from 'lucide-react';

import type {
  MarketSimulation,
  MarketStep,
  MarketStepId,
} from './market.types';

export const marketSteps: MarketStep[] = [
  {
    id: 'feira',
    title: 'Feira',
    description: 'Organizar produção para vender na feira ou no bairro.',
    icon: Store,
    color: '#C88919',
    bg: '#FFF0D0',
    route: '/market/feira',
  },
  {
    id: 'instituicao',
    title: 'Instituição',
    description: 'Preparar venda para escola, associação ou compra pública.',
    icon: Building2,
    color: '#8A6A3A',
    bg: '#F6EBDD',
    route: '/market/instituicao',
  },
  {
    id: 'separar',
    title: 'Separar',
    description: 'Separar, contar, pesar e organizar os produtos.',
    icon: PackageOpen,
    color: '#A26242',
    bg: '#F6E6DD',
    route: '/market/separar',
  },
  {
    id: 'entregar',
    title: 'Entregar',
    description: 'Acompanhar entrega, rota e escoamento.',
    icon: Truck,
    color: '#4F8FD4',
    bg: '#EAF5FF',
    route: '/market/entregar',
  },
  {
    id: 'renda',
    title: 'Renda',
    description: 'Ver valor estimado e melhorar o ganho.',
    icon: BadgeDollarSign,
    color: '#6C8E2A',
    bg: '#EDF3E3',
    route: '/market/renda',
  },
];

const simulations: Record<MarketStepId, MarketSimulation> = {
  feira: {
    title: 'Venda na feira',
    subtitle: 'Produtos prontos para levar.',
    percent: 76,
    statusLabel: 'Boa chance de venda',
    amountLabel: 'R$ 180 previstos',
    tasks: [
      { id: '1', title: 'Separar produtos bonitos', status: 'ok', icon: CheckCircle2 },
      { id: '2', title: 'Definir preço simples', status: 'attention', icon: BadgeDollarSign },
      { id: '3', title: 'Preparar sacolas ou caixas', status: 'pending', icon: PackageCheck },
    ],
  },
  instituicao: {
    title: 'Venda institucional',
    subtitle: 'Organização para entrega maior.',
    percent: 61,
    statusLabel: 'Precisa revisar volume',
    amountLabel: 'R$ 420 previstos',
    tasks: [
      { id: '1', title: 'Confirmar quantidade', status: 'attention', icon: Scale },
      { id: '2', title: 'Separar por tipo', status: 'pending', icon: PackageOpen },
      { id: '3', title: 'Conferir prazo', status: 'ok', icon: Clock3 },
    ],
  },
  separar: {
    title: 'Produtos separados',
    subtitle: 'Consumo, venda e entrega.',
    percent: 69,
    statusLabel: 'Separação em andamento',
    amountLabel: '32 itens prontos',
    tasks: [
      { id: '1', title: 'Contar unidades', status: 'pending', icon: ClipboardList },
      { id: '2', title: 'Retirar produtos ruins', status: 'attention', icon: AlertTriangle },
      { id: '3', title: 'Montar caixas', status: 'ok', icon: PackageCheck },
    ],
  },
  entregar: {
    title: 'Entrega planejada',
    subtitle: 'Rota simples para escoamento.',
    percent: 82,
    statusLabel: 'Entrega quase pronta',
    amountLabel: '2 entregas hoje',
    tasks: [
      { id: '1', title: 'Conferir endereço', status: 'ok', icon: MapPinned },
      { id: '2', title: 'Separar caixas', status: 'ok', icon: PackageCheck },
      { id: '3', title: 'Confirmar horário', status: 'pending', icon: Clock3 },
    ],
  },
  renda: {
    title: 'Renda estimada',
    subtitle: 'Valor previsto da produção.',
    percent: 73,
    statusLabel: 'Renda crescendo',
    amountLabel: 'R$ 600 no mês',
    tasks: [
      { id: '1', title: 'Registrar vendas', status: 'pending', icon: ClipboardList },
      { id: '2', title: 'Comparar preços', status: 'attention', icon: BadgeDollarSign },
      { id: '3', title: 'Guardar histórico', status: 'ok', icon: CheckCircle2 },
    ],
  },
};

export function getMarketStep(stepId?: string) {
  return marketSteps.find((step) => step.id === stepId) ?? marketSteps[0];
}

export function getMarketSimulation(stepId: MarketStepId) {
  return simulations[stepId];
}