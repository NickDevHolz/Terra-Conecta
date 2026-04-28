import {
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Clock3,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

import { GuidedSimulationPage } from '../../support/components/GuidedSimulationPage';
import { useManagement } from '../useManagement';

export function ManagementPage() {
  const { stepId } = useParams();
  const { steps, selectedStep, simulation } = useManagement(stepId);

  const kpis = [
    {
      label: 'Controle',
      value: `${simulation.percent}%`,
      icon: BarChart3,
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
    {
      label: 'Registros',
      value: String(steps.length),
      icon: ClipboardList,
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
      label: 'Atenção',
      value: String(simulation.tasks.filter((task) => task.status !== 'ok').length),
      icon: Clock3,
      color: '#C88919',
      bg: '#FFF0D0',
    },
  ];

  return (
    <GuidedSimulationPage
      moduleLabel="Gestão"
      selectedStep={selectedStep}
      selectedId={selectedStep.id}
      steps={steps}
      simulation={simulation}
      kpis={kpis}
    />
  );
}