import type { LucideIcon } from 'lucide-react';

export type MarketStepId =
  | 'feira'
  | 'instituicao'
  | 'separar'
  | 'entregar'
  | 'renda';

export type MarketStep = {
  id: MarketStepId;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  route: string;
};

export type MarketTask = {
  id: string;
  title: string;
  status: 'ok' | 'attention' | 'pending';
  icon: LucideIcon;
};

export type MarketSimulation = {
  title: string;
  subtitle: string;
  percent: number;
  statusLabel: string;
  amountLabel: string;
  tasks: MarketTask[];
};