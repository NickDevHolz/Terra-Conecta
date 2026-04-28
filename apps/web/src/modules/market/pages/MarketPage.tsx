import {
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Store,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

import { GuidedSimulationPage } from '../../support/components/GuidedSimulationPage';
import { useMarket } from '../useMarket';

export function MarketPage() {
  const { stepId } = useParams();
  const { steps, selectedStep, simulation } = useMarket(stepId);

  const kpis = [
    {
      label: 'Venda',
      value: `${simulation.percent}%`,
      icon: BarChart3,
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
    {
      label: 'Mercados',
      value: String(steps.length),
      icon: Store,
      color: '#C88919',
      bg: '#FFF0D0',
    },
    {
      label: 'Pronto',
      value: String(simulation.tasks.filter((task) => task.status === 'ok').length),
      icon: CheckCircle2,
      color: '#5F7D26',
      bg: '#EDF3E3',
    },
    {
      label: 'Renda',
      value: simulation.amountLabel ?? 'R$ 0',
      icon: BadgeDollarSign,
      color: '#6C8E2A',
      bg: '#EDF3E3',
    },
  ];

  return (
    <GuidedSimulationPage
      moduleLabel="Venda"
      selectedStep={selectedStep}
      selectedId={selectedStep.id}
      steps={steps}
      simulation={simulation}
      kpis={kpis}
    />
  );
}