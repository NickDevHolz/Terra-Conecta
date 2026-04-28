import { AlertTriangle, CheckCircle2, Clock3, Volume2 } from 'lucide-react';

import type { MarketSimulation } from '../market.types';

function statusColor(status: 'ok' | 'attention' | 'pending') {
  if (status === 'ok') return '#5F7D26';
  if (status === 'attention') return '#C88919';
  return '#8A7C71';
}

function statusBg(status: 'ok' | 'attention' | 'pending') {
  if (status === 'ok') return '#EDF3E3';
  if (status === 'attention') return '#FFF0D0';
  return '#F6F1EB';
}

function StatusIcon({ status }: { status: 'ok' | 'attention' | 'pending' }) {
  if (status === 'ok') {
    return <CheckCircle2 className="h-8 w-8 text-[#5F7D26]" strokeWidth={2.8} />;
  }

  if (status === 'attention') {
    return <AlertTriangle className="h-8 w-8 text-[#C88919]" strokeWidth={2.8} />;
  }

  return <Clock3 className="h-8 w-8 text-[#8A7C71]" strokeWidth={2.8} />;
}

export function MarketSimulationPanel({
  simulation,
}: {
  simulation: MarketSimulation;
}) {
  return (
    <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#A56745]">
        Simulação
      </div>

      <h2 className="mt-2 text-[1.45rem] font-black leading-7 text-[#231E1B]">
        {simulation.title}
      </h2>

      <p className="mt-1 text-[0.95rem] font-bold text-[#6B6058]">
        {simulation.subtitle}
      </p>

      <div className="mt-5 grid grid-cols-1 gap-3">
        <div className="rounded-[24px] bg-[#EDF3E3] p-4 text-center">
          <div className="text-[2rem] font-black leading-none text-[#5F7D26]">
            {simulation.amountLabel}
          </div>
          <div className="mt-2 text-[0.9rem] font-black text-[#2A2420]">
            Estimativa
          </div>
        </div>

        <div className="rounded-[24px] bg-[#EAF5FF] p-4">
          <div className="flex items-center justify-between">
            <span className="text-[0.95rem] font-black text-[#2A2420]">
              {simulation.statusLabel}
            </span>

            <span className="text-[1rem] font-black text-[#4F8FD4]">
              {simulation.percent}%
            </span>
          </div>

          <div className="mt-3 h-5 overflow-hidden rounded-full bg-white/80">
            <div
              className="h-full rounded-full bg-[#4F8FD4]"
              style={{ width: `${simulation.percent}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {simulation.tasks.map((task) => {
          const Icon = task.icon;

          return (
            <div
              key={task.id}
              className="flex min-h-[76px] items-center gap-3 rounded-[24px] border border-white/80 px-4 py-3 shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
              style={{ backgroundColor: statusBg(task.status) }}
            >
              <StatusIcon status={task.status} />

              <div className="min-w-0 flex-1">
                <div className="text-[1rem] font-black leading-5 text-[#2A2420]">
                  {task.title}
                </div>
              </div>

              <Icon
                className="h-7 w-7 shrink-0"
                strokeWidth={2.7}
                style={{ color: statusColor(task.status) }}
              />
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className="mt-4 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[24px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)]"
      >
        <Volume2 className="h-6 w-6" strokeWidth={2.8} />
        <span className="text-[1rem] font-black">Ouvir orientação</span>
      </button>
    </section>
  );
}