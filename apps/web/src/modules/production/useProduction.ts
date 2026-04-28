import { getProductionSimulation, getProductionStep, productionSteps } from './production.service';

export function useProduction(stepId?: string) {
  const selectedStep = getProductionStep(stepId);
  const simulation = getProductionSimulation(selectedStep.id);

  return {
    steps: productionSteps,
    selectedStep,
    simulation,
  };
}