import {
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Clock3,
  LineChart,
  PackageCheck,
  ShieldCheck,
  Sprout,
  Store,
  Truck,
} from 'lucide-react';

import type {
  ManagementSimulation,
  ManagementStep,
  ManagementStepId,
} from './management.types';

export const managementSteps: ManagementStep[] = [
  {
    id: 'anotar',
    title: 'Anotar',
    description: 'Registrar o que foi plantado, colhido e separado.',
    icon: ClipboardList,
    color: '#4F8FD4',
    bg: '#EAF5FF',
    route: '/management/anotar',
  },
  {
    id: 'acompanhar',
    title: 'Acompanhar',
    description: 'Ver como a produção está caminhando.',
    icon: LineChart,
    color: '#6C8E2A',
    bg: '#EDF3E3',
    route: '/management/acompanhar',
  },
  {
    id: 'melhorar',
    title: 'Melhorar',
    description: 'Identificar onde dá para produzir melhor.',
    icon: BarChart3,
    color: '#C88919',
    bg: '#FFF0D0',
    route: '/management/melhorar',
  },
  {
    id: 'evitar-perdas',
    title: 'Evitar perdas',
    description: 'Receber alertas para agir antes do problema crescer.',
    icon: ShieldCheck,
    color: '#A26242',
    bg: '#F6E6DD',
    route: '/management/evitar-perdas',
  },
];

const simulations: Record<ManagementStepId, ManagementSimulation> = {
  anotar: {
    title: 'Registros do quintal',
    subtitle: 'Anote de forma simples.',
    percent: 68,
    statusLabel: 'Boa organização',
    tasks: [
      { id: '1', title: 'Anotar plantio', status: 'ok', icon: Sprout },
      { id: '2', title: 'Anotar colheita', status: 'pending', icon: PackageCheck },
      { id: '3', title: 'Separar venda', status: 'attention', icon: Store },
    ],
  },
  acompanhar: {
    title: 'Produção acompanhada',
    subtitle: 'Veja o andamento da semana.',
    percent: 74,
    statusLabel: 'Caminho bom',
    tasks: [
      { id: '1', title: 'Crescimento ok', status: 'ok', icon: CheckCircle2 },
      { id: '2', title: 'Ver água', status: 'attention', icon: AlertTriangle },
      { id: '3', title: 'Atualizar produção', status: 'pending', icon: Clock3 },
    ],
  },
  melhorar: {
    title: 'Melhorias possíveis',
    subtitle: 'Pequenas ações para melhorar.',
    percent: 56,
    statusLabel: 'Pode melhorar',
    tasks: [
      { id: '1', title: 'Melhorar irrigação', status: 'attention', icon: AlertTriangle },
      { id: '2', title: 'Organizar colheita', status: 'pending', icon: PackageCheck },
      { id: '3', title: 'Preparar entrega', status: 'pending', icon: Truck },
    ],
  },
  'evitar-perdas': {
    title: 'Risco de perdas',
    subtitle: 'Cuidados para não perder produção.',
    percent: 82,
    statusLabel: 'Atenção ativa',
    tasks: [
      { id: '1', title: 'Separar maduros', status: 'attention', icon: PackageCheck },
      { id: '2', title: 'Evitar sol forte', status: 'ok', icon: CheckCircle2 },
      { id: '3', title: 'Entregar no prazo', status: 'pending', icon: Truck },
    ],
  },
};

export function getManagementStep(stepId?: string) {
  return managementSteps.find((step) => step.id === stepId) ?? managementSteps[0];
}

export function getManagementSimulation(stepId: ManagementStepId) {
  return simulations[stepId];
}