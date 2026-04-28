import {
  BarChart3,
  CheckCircle2,
  Clock3,
  Sprout,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

import { GuidedSimulationPage } from '../../support/components/GuidedSimulationPage';
import { useProduction } from '../useProduction';

export function ProductionPage() {
  const { stepId } = useParams();
  const { steps, selectedStep, simulation } = useProduction(stepId);

  const kpis = [
    {
      label: 'Avanço',
      value: `${simulation.percent}%`,
      icon: BarChart3,
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
    {
      label: 'Etapas',
      value: String(steps.length),
      icon: Sprout,
      color: '#6C8E2A',
      bg: '#EDF3E3',
    },
    {
      label: 'Feitos',
      value: String(simulation.tasks.filter((task) => task.status === 'ok').length),
      icon: CheckCircle2,
      color: '#5F7D26',
      bg: '#EDF3E3',
    },
    {
      label: 'Pendentes',
      value: String(simulation.tasks.filter((task) => task.status !== 'ok').length),
      icon: Clock3,
      color: '#C88919',
      bg: '#FFF0D0',
    },
  ];

  return (
    <GuidedSimulationPage
      moduleLabel="Produção"
      selectedStep={selectedStep}
      selectedId={selectedStep.id}
      steps={steps}
      simulation={simulation}
      kpis={kpis}
    />
  );
}