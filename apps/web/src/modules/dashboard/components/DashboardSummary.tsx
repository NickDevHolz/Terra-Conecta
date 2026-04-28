import {
  AlertTriangle,
  BarChart3,
  Bell,
  Camera,
  CheckCircle2,
  Clock3,
  Droplets,
  Leaf,
  Mic,
  PackageCheck,
  Sprout,
  Store,
  Truck,
  Volume2,
} from 'lucide-react';

import type {
  DashboardActivityItem,
  DashboardAlertItem,
  DashboardMetric,
  DashboardQueueItem,
  DashboardQuickAction,
} from '../dashboard.types';

function VisualMetricCards({ metrics }: { metrics: DashboardMetric[] }) {
  const fallback = [
    {
      icon: Sprout,
      label: 'Plantio',
      value: metrics[0]?.value ?? '0',
      color: '#6C8E2A',
      bg: '#EDF3E3',
    },
    {
      icon: Bell,
      label: 'Avisos',
      value: metrics[1]?.value ?? '0',
      color: '#C88919',
      bg: '#FFF0D0',
    },
    {
      icon: Store,
      label: 'Vendas',
      value: metrics[2]?.value ?? '0',
      color: '#A26242',
      bg: '#F6E6DD',
    },
    {
      icon: CheckCircle2,
      label: 'Pronto',
      value: metrics[3]?.value ?? '0',
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-3">
      {fallback.map(({ icon: Icon, label, value, color, bg }) => (
        <article
          key={label}
          className="min-h-[126px] rounded-[26px] border border-white/80 p-4 text-center shadow-[0_10px_22px_rgba(91,64,37,0.05)]"
          style={{ backgroundColor: bg }}
        >
          <Icon
            className="mx-auto h-11 w-11"
            strokeWidth={2.8}
            style={{ color }}
          />
          <div className="mt-3 text-[2rem] font-black leading-none text-[#1F1A17]">
            {value}
          </div>
          <div className="mt-2 text-[0.9rem] font-black text-[#2A2420]">
            {label}
          </div>
        </article>
      ))}
    </section>
  );
}

function TodayCarePanel({ alerts }: { alerts: DashboardAlertItem[] }) {
  const hasAlerts = alerts.length > 0;

  const items = hasAlerts
    ? alerts.slice(0, 3).map((alert) => ({
        icon: AlertTriangle,
        label: alert.title,
        color:
          alert.severity === 'high'
            ? '#AF6545'
            : alert.severity === 'medium'
              ? '#C88919'
              : '#5F7D26',
        bg:
          alert.severity === 'high'
            ? '#F9E5E1'
            : alert.severity === 'medium'
              ? '#FFF0D0'
              : '#EDF3E3',
      }))
    : [
        {
          icon: CheckCircle2,
          label: 'Sem alerta',
          color: '#5F7D26',
          bg: '#EDF3E3',
        },
        {
          icon: Droplets,
          label: 'Água ok',
          color: '#4F8FD4',
          bg: '#EAF5FF',
        },
        {
          icon: Leaf,
          label: 'Planta ok',
          color: '#6C8E2A',
          bg: '#EDF3E3',
        },
      ];

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.76))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#FFF0D0]">
          <Bell className="h-7 w-7 text-[#C88919]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
            Cuidados de hoje
          </div>
          <div className="text-[0.9rem] font-bold text-[#7A6E66]">
            Toque no aviso para agir
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3">
        {items.map(({ icon: Icon, label, color, bg }) => (
          <div
            key={label}
            className="flex min-h-[76px] items-center gap-4 rounded-[24px] border border-white/80 px-4 py-3 shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
            style={{ backgroundColor: bg }}
          >
            <Icon className="h-10 w-10 shrink-0" strokeWidth={2.8} style={{ color }} />
            <div className="text-[1.05rem] font-black leading-5 text-[#2A2420]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductionFlow({ queues }: { queues: DashboardQueueItem[] }) {
  const values = [
    queues[0]?.value ?? '0',
    queues[1]?.value ?? '0',
    queues[2]?.value ?? '0',
    queues[3]?.value ?? '0',
  ];

  const items = [
    { icon: Sprout, label: 'Plantar', value: values[0], color: '#6C8E2A', bg: '#EDF3E3' },
    { icon: Leaf, label: 'Cuidar', value: values[1], color: '#5F7D26', bg: '#E8F6D9' },
    { icon: PackageCheck, label: 'Colher', value: values[2], color: '#A26242', bg: '#F6E6DD' },
    { icon: Truck, label: 'Entregar', value: values[3], color: '#4F8FD4', bg: '#EAF5FF' },
  ];

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,239,0.76))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#EDF3E3]">
          <Clock3 className="h-7 w-7 text-[#5F7D26]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
            Caminho da produção
          </div>
          <div className="text-[0.9rem] font-bold text-[#7A6E66]">
            Da terra até a entrega
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label, value, color, bg }) => (
          <div
            key={label}
            className="rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
            style={{ backgroundColor: bg }}
          >
            <Icon className="mx-auto h-10 w-10" strokeWidth={2.8} style={{ color }} />
            <div className="mt-2 text-[1.45rem] font-black leading-none text-[#1F1A17]">
              {value}
            </div>
            <div className="mt-2 text-[0.95rem] font-black text-[#2A2420]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SimpleCharts() {
  const bars = [
    { label: 'Água', value: 78, color: '#4F8FD4', bg: '#EAF5FF' },
    { label: 'Planta', value: 64, color: '#6C8E2A', bg: '#EDF3E3' },
    { label: 'Venda', value: 52, color: '#C88919', bg: '#FFF0D0' },
  ];

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,247,255,0.76))] p-4 shadow-[0_12px_28px_rgba(79,143,212,0.06)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#EAF5FF]">
          <BarChart3 className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
            Como está indo
          </div>
          <div className="text-[0.9rem] font-bold text-[#7A6E66]">
            Barras simples por cor
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        {bars.map((bar) => (
          <div key={bar.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[0.95rem] font-black text-[#2A2420]">
                {bar.label}
              </span>
              <span className="text-[0.9rem] font-black" style={{ color: bar.color }}>
                {bar.value}%
              </span>
            </div>

            <div className="h-5 overflow-hidden rounded-full" style={{ backgroundColor: bar.bg }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${bar.value}%`, backgroundColor: bar.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function QuickSupport({ quickActions }: { quickActions: DashboardQuickAction[] }) {
  const items = [
    {
      icon: Mic,
      label: quickActions[0]?.actionLabel ?? 'Falar',
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
    {
      icon: Camera,
      label: quickActions[1]?.actionLabel ?? 'Foto',
      color: '#6C8E2A',
      bg: '#EDF3E3',
    },
    {
      icon: Store,
      label: quickActions[2]?.actionLabel ?? 'Venda',
      color: '#C88919',
      bg: '#FFF0D0',
    },
    {
      icon: Volume2,
      label: quickActions[3]?.actionLabel ?? 'Ouvir',
      color: '#4F8FD4',
      bg: '#EAF5FF',
    },
  ];

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
      <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
        Precisa de ajuda?
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label, color, bg }) => (
          <button
            key={label}
            className="min-h-[104px] rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
            style={{ backgroundColor: bg }}
          >
            <Icon className="mx-auto h-10 w-10" strokeWidth={2.8} style={{ color }} />
            <div className="mt-3 text-[1rem] font-black text-[#2A2420]">
              {label}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function RecentVisualActivity({ activities }: { activities: DashboardActivityItem[] }) {
  const visible = activities.slice(0, 3);

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.76))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
        Últimos movimentos
      </div>

      <div className="mt-4 space-y-3">
        {visible.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 rounded-[22px] border border-white/80 bg-white/76 px-4 py-3"
          >
            <CheckCircle2 className="h-8 w-8 shrink-0 text-[#5F7D26]" strokeWidth={2.8} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-[0.98rem] font-black text-[#231E1B]">
                {item.title}
              </div>
              <div className="text-[0.78rem] font-bold text-[#8A7C71]">
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function DashboardSummary({
  metrics,
  queues,
  alerts,
  activities,
  quickActions,
}: {
  metrics: DashboardMetric[];
  queues: DashboardQueueItem[];
  alerts: DashboardAlertItem[];
  activities: DashboardActivityItem[];
  quickActions: DashboardQuickAction[];
}) {
  return (
    <div className="space-y-3">
      <VisualMetricCards metrics={metrics} />
      <TodayCarePanel alerts={alerts} />
      <ProductionFlow queues={queues} />
      <SimpleCharts />
      <QuickSupport quickActions={quickActions} />
      <RecentVisualActivity activities={activities} />
    </div>
  );
}