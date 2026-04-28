import type { LucideIcon } from 'lucide-react';

export type ProductionStepId =
  | 'planejar'
  | 'plantar'
  | 'cuidar'
  | 'molhar'
  | 'colher'
  | 'organizar';

export type ProductionStep = {
  id: ProductionStepId;
  title: string;
  shortLabel: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  route: string;
};

export type ProductionTask = {
  id: string;
  title: string;
  status: 'ok' | 'attention' | 'pending';
  icon: LucideIcon;
};

export type ProductionSimulation = {
  title: string;
  subtitle: string;
  percent: number;
  statusLabel: string;
  tasks: ProductionTask[];
};