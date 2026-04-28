import { useEffect, useState } from 'react';

import { FloatingAgroBackground } from '../../home/components/FloatingAgroBackground';
import { PageLoader } from '../../home/components/PageLoader';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardSummary } from '../components/DashboardSummary';
import { useDashboard } from '../useDashboard';

export function DashboardPage() {
  const { metrics, queues, alerts, activities, quickActions } = useDashboard();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />

      <div className="relative z-10 mx-auto w-full max-w-[27rem] space-y-3">
        <DashboardHeader />
        <DashboardSummary
          metrics={metrics}
          queues={queues}
          alerts={alerts}
          activities={activities}
          quickActions={quickActions}
        />
      </div>
    </div>
  );
}