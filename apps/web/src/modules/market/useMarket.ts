import {
  getMarketSimulation,
  getMarketStep,
  marketSteps,
} from './market.service';

export function useMarket(stepId?: string) {
  const selectedStep = getMarketStep(stepId);
  const simulation = getMarketSimulation(selectedStep.id);

  return {
    steps: marketSteps,
    selectedStep,
    simulation,
  };
}