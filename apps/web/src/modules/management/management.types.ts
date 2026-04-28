import type { LucideIcon } from 'lucide-react';

export type ManagementStepId =
  | 'anotar'
  | 'acompanhar'
  | 'melhorar'
  | 'evitar-perdas';

export type ManagementStep = {
  id: ManagementStepId;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  route: string;
};

export type ManagementTask = {
  id: string;
  title: string;
  status: 'ok' | 'attention' | 'pending';
  icon: LucideIcon;
};

export type ManagementSimulation = {
  title: string;
  subtitle: string;
  percent: number;
  statusLabel: string;
  tasks: ManagementTask[];
};