import {
  AlertTriangle,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Droplets,
  Leaf,
  PackageCheck,
  Scissors,
  Sprout,
  Store,
  Truck,
} from 'lucide-react';

import type {
  ProductionSimulation,
  ProductionStep,
  ProductionStepId,
} from './production.types';

export const productionSteps: ProductionStep[] = [
  {
    id: 'planejar',
    title: 'Planejar',
    shortLabel: 'Planejar',
    description: 'Escolher cultivo, data e cuidado.',
    icon: CalendarDays,
    color: '#8A6A3A',
    bg: '#F6EBDD',
    route: '/production/planejar',
  },
  {
    id: 'plantar',
    title: 'Plantar',
    shortLabel: 'Plantar',
    description: 'Começar o cultivo no quintal.',
    icon: Sprout,
    color: '#6C8E2A',
    bg: '#EDF3E3',
    route: '/production/plantar',
  },
  {
    id: 'cuidar',
    title: 'Cuidar',
    shortLabel: 'Cuidar',
    description: 'Ver folha, praga e crescimento.',
    icon: Leaf,
    color: '#5F7D26',
    bg: '#E8F6D9',
    route: '/production/cuidar',
  },
  {
    id: 'molhar',
    title: 'Molhar',
    shortLabel: 'Molhar',
    description: 'Acompanhar agua e irrigacao.',
    icon: Droplets,
    color: '#4F8FD4',
    bg: '#EAF5FF',
    route: '/production/molhar',
  },
  {
    id: 'colher',
    title: 'Colher',
    shortLabel: 'Colher',
    description: 'Ver ponto certo de colheita.',
    icon: Scissors,
    color: '#A26242',
    bg: '#F6E6DD',
    route: '/production/colher',
  },
  {
    id: 'organizar',
    title: 'Organizar',
    shortLabel: 'Organizar',
    description: 'Separar, contar e preparar venda.',
    icon: PackageCheck,
    color: '#C88919',
    bg: '#FFF0D0',
    route: '/production/organizar',
  },
];

const simulations: Record<ProductionStepId, ProductionSimulation> = {
  planejar: {
    title: 'Semana planejada',
    subtitle: 'Calendario simples do quintal.',
    percent: 72,
    statusLabel: 'Bom caminho',
    tasks: [
      { id: '1', title: 'Escolher canteiro', status: 'ok', icon: CheckCircle2 },
      { id: '2', title: 'Ver sementes', status: 'pending', icon: Clock3 },
      { id: '3', title: 'Marcar plantio', status: 'attention', icon: CalendarDays },
    ],
  },
  plantar: {
    title: 'Plantio iniciado',
    subtitle: 'Primeiros cuidados da muda.',
    percent: 58,
    statusLabel: 'Precisa acompanhar',
    tasks: [
      { id: '1', title: 'Preparar solo', status: 'ok', icon: CheckCircle2 },
      { id: '2', title: 'Plantar muda', status: 'ok', icon: Sprout },
      { id: '3', title: 'Proteger do sol forte', status: 'attention', icon: AlertTriangle },
    ],
  },
  cuidar: {
    title: 'Cuidado da planta',
    subtitle: 'Folha, praga e crescimento.',
    percent: 66,
    statusLabel: 'Atenção nas folhas',
    tasks: [
      { id: '1', title: 'Olhar folhas', status: 'attention', icon: Leaf },
      { id: '2', title: 'Remover mato', status: 'pending', icon: Clock3 },
      { id: '3', title: 'Falar com Oriá', status: 'ok', icon: CheckCircle2 },
    ],
  },
  molhar: {
    title: 'Agua do dia',
    subtitle: 'Irrigacao sem desperdicio.',
    percent: 81,
    statusLabel: 'Agua quase certa',
    tasks: [
      { id: '1', title: 'Molhar cedo', status: 'ok', icon: Droplets },
      { id: '2', title: 'Evitar sol forte', status: 'ok', icon: CheckCircle2 },
      { id: '3', title: 'Ver solo seco', status: 'pending', icon: Clock3 },
    ],
  },
  colher: {
    title: 'Ponto de colheita',
    subtitle: 'Qualidade antes da venda.',
    percent: 49,
    statusLabel: 'Ainda avaliando',
    tasks: [
      { id: '1', title: 'Ver tamanho', status: 'pending', icon: Clock3 },
      { id: '2', title: 'Separar maduros', status: 'attention', icon: Scissors },
      { id: '3', title: 'Evitar perdas', status: 'pending', icon: AlertTriangle },
    ],
  },
  organizar: {
    title: 'Producao organizada',
    subtitle: 'Separar para consumo, venda e entrega.',
    percent: 64,
    statusLabel: 'Preparar venda',
    tasks: [
      { id: '1', title: 'Contar unidades', status: 'pending', icon: PackageCheck },
      { id: '2', title: 'Separar para feira', status: 'attention', icon: Store },
      { id: '3', title: 'Planejar entrega', status: 'pending', icon: Truck },
    ],
  },
};

export function getProductionStep(stepId?: string) {
  return (
    productionSteps.find((step) => step.id === stepId) ?? productionSteps[0]
  );
}

export function getProductionSimulation(stepId: ProductionStepId) {
  return simulations[stepId];
}