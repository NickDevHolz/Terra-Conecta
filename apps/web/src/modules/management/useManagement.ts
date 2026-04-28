import {
  getManagementSimulation,
  getManagementStep,
  managementSteps,
} from './management.service';

export function useManagement(stepId?: string) {
  const selectedStep = getManagementStep(stepId);
  const simulation = getManagementSimulation(selectedStep.id);

  return {
    steps: managementSteps,
    selectedStep,
    simulation,
  };
}