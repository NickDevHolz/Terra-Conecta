import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Home,
  MessageCircleHeart,
  Save,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

import { FloatingAgroBackground } from '../../home/components/FloatingAgroBackground';
import { PageLoader } from '../../home/components/PageLoader';

type VisualStep = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  route: string;
};

type VisualTask = {
  id: string;
  title: string;
  status: 'ok' | 'attention' | 'pending';
  icon: LucideIcon;
};

type VisualSimulation = {
  title: string;
  subtitle: string;
  percent: number;
  statusLabel: string;
  amountLabel?: string;
  tasks: VisualTask[];
};

type VisualKpi = {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
  bg: string;
};

function statusIcon(status: VisualTask['status']) {
  if (status === 'ok') return CheckCircle2;
  if (status === 'attention') return AlertTriangle;
  return Clock3;
}

function statusColor(status: VisualTask['status']) {
  if (status === 'ok') return '#5F7D26';
  if (status === 'attention') return '#C88919';
  return '#8A7C71';
}

function statusBg(status: VisualTask['status']) {
  if (status === 'ok') return '#EDF3E3';
  if (status === 'attention') return '#FFF0D0';
  return '#F6F1EB';
}

export function GuidedSimulationPage({
  moduleLabel,
  selectedStep,
  steps,
  selectedId,
  simulation,
  kpis,
}: {
  moduleLabel: string;
  selectedStep: VisualStep;
  steps: VisualStep[];
  selectedId: string;
  simulation: VisualSimulation;
  kpis: VisualKpi[];
}) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [checkedTaskIds, setCheckedTaskIds] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const StepIcon = selectedStep.icon;

  const storageKey = useMemo(
    () => `terra-conecta:${moduleLabel}:${selectedId}`,
    [moduleLabel, selectedId],
  );

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(timeout);
  }, [selectedId]);

  useEffect(() => {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) {
      setCheckedTaskIds([]);
      setNote('');
      setSaved(false);
      return;
    }

    try {
      const parsed = JSON.parse(raw) as {
        checkedTaskIds?: string[];
        note?: string;
      };

      setCheckedTaskIds(parsed.checkedTaskIds ?? []);
      setNote(parsed.note ?? '');
      setSaved(true);
    } catch {
      setCheckedTaskIds([]);
      setNote('');
      setSaved(false);
    }
  }, [storageKey]);

  const toggleTask = (taskId: string) => {
    setCheckedTaskIds((current) =>
      current.includes(taskId)
        ? current.filter((id) => id !== taskId)
        : [...current, taskId],
    );

    setSaved(false);
  };

  const saveProgress = () => {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        checkedTaskIds,
        note,
        savedAt: new Date().toISOString(),
      }),
    );

    setSaved(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />

      <div className="relative z-10 mx-auto w-full max-w-[27rem] space-y-4">
        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
          <div className="flex items-center justify-between gap-3">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em]"
              style={{
                backgroundColor: selectedStep.bg,
                color: selectedStep.color,
              }}
            >
              <StepIcon className="h-3.5 w-3.5" strokeWidth={2.6} />
              {moduleLabel}
            </div>

            <button
              onClick={() => navigate('/')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#A56745] shadow-[0_8px_18px_rgba(91,64,37,0.06)]"
              aria-label="Voltar para início"
              type="button"
            >
              <Home className="h-5 w-5" strokeWidth={2.6} />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px]"
              style={{ backgroundColor: selectedStep.bg }}
            >
              <StepIcon
                className="h-11 w-11"
                strokeWidth={2.8}
                style={{ color: selectedStep.color }}
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-[2rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                {selectedStep.title}
              </h1>

              <p className="mt-2 text-[1rem] font-bold leading-6 text-[#655A53]">
                {selectedStep.description}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/oria')}
            className="mt-4 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[24px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)]"
          >
            <MessageCircleHeart className="h-6 w-6" strokeWidth={2.8} />
            <span className="text-[1rem] font-black">Pedir ajuda da Oriá</span>
          </button>
        </section>

        <section className="grid grid-cols-2 gap-3">
          {kpis.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
                style={{ backgroundColor: item.bg }}
              >
                <Icon
                  className="mx-auto h-9 w-9"
                  strokeWidth={2.8}
                  style={{ color: item.color }}
                />

                <div className="mt-2 text-[1.45rem] font-black leading-none text-[#1F1A17]">
                  {item.value}
                </div>

                <div className="mt-2 text-[0.82rem] font-black leading-4 text-[#2A2420]">
                  {item.label}
                </div>
              </article>
            );
          })}
        </section>

        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,247,255,0.78))] p-4 shadow-[0_12px_30px_rgba(79,143,212,0.06)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#EAF5FF]">
              <Sparkles className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.8} />
            </div>

            <div>
              <div className="text-[1.25rem] font-black leading-6 text-[#1F1A17]">
                {simulation.title}
              </div>
              <div className="text-[0.9rem] font-bold text-[#6B6058]">
                {simulation.subtitle}
              </div>
            </div>
          </div>

          {simulation.amountLabel ? (
            <div className="mt-4 rounded-[24px] bg-[#EDF3E3] p-4 text-center">
              <div className="text-[2rem] font-black leading-none text-[#5F7D26]">
                {simulation.amountLabel}
              </div>
              <div className="mt-2 text-[0.9rem] font-black text-[#2A2420]">
                Estimativa
              </div>
            </div>
          ) : null}

          <div className="mt-4 rounded-[24px] bg-[#EAF5FF] p-4">
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
        </section>

        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
          <div className="text-sm font-black uppercase tracking-[0.16em] text-[#A56745]">
            O que fazer
          </div>

          <div className="mt-4 space-y-3">
            {simulation.tasks.map((task) => {
              const TaskIcon = task.icon;
              const StatusIcon = statusIcon(task.status);
              const checked = checkedTaskIds.includes(task.id);

              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => toggleTask(task.id)}
                  className="flex min-h-[78px] w-full items-center gap-3 rounded-[24px] border border-white/80 px-4 py-3 text-left shadow-[0_8px_18px_rgba(91,64,37,0.04)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
                  style={{ backgroundColor: checked ? '#EDF3E3' : statusBg(task.status) }}
                >
                  {checked ? (
                    <CheckCircle2 className="h-9 w-9 shrink-0 text-[#5F7D26]" strokeWidth={2.8} />
                  ) : (
                    <StatusIcon
                      className="h-9 w-9 shrink-0"
                      strokeWidth={2.8}
                      style={{ color: statusColor(task.status) }}
                    />
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="text-[1rem] font-black leading-5 text-[#2A2420]">
                      {task.title}
                    </div>
                    <div className="mt-1 text-[0.78rem] font-bold text-[#7A6E66]">
                      {checked ? 'Feito' : 'Toque para marcar'}
                    </div>
                  </div>

                  <TaskIcon
                    className="h-7 w-7 shrink-0"
                    strokeWidth={2.7}
                    style={{ color: statusColor(task.status) }}
                  />
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
          <div className="text-[1.2rem] font-black text-[#1F1A17]">
            Ferramentas rápidas
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => navigate('/plants')}
              className="min-h-[104px] rounded-[24px] bg-white/82 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]"
            >
              <Camera className="mx-auto h-10 w-10 text-[#4F8FD4]" strokeWidth={2.8} />
              <div className="mt-3 text-[0.95rem] font-black text-[#2A2420]">
                Foto
              </div>
            </button>

            <button
              type="button"
              onClick={() => navigate('/oria')}
              className="min-h-[104px] rounded-[24px] bg-white/82 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]"
            >
              <Volume2 className="mx-auto h-10 w-10 text-[#4F8FD4]" strokeWidth={2.8} />
              <div className="mt-3 text-[0.95rem] font-black text-[#2A2420]">
                Ouvir
              </div>
            </button>
          </div>
        </section>

        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
          <div className="flex items-center gap-3">
            <ClipboardList className="h-7 w-7 text-[#A56745]" strokeWidth={2.8} />
            <div className="text-[1.2rem] font-black text-[#1F1A17]">
              Anotação
            </div>
          </div>

          <textarea
            value={note}
            onChange={(event) => {
              setNote(event.target.value);
              setSaved(false);
            }}
            placeholder="Escreva uma observação simples..."
            className="mt-4 min-h-[110px] w-full resize-none rounded-[22px] border border-[#E7DDD4] bg-white/82 px-4 py-3 text-[1rem] font-semibold text-[#2A2420] outline-none placeholder:text-[#A1968E]"
          />

          <button
            type="button"
            onClick={saveProgress}
            className="mt-3 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[24px] bg-[linear-gradient(90deg,#6C8E2A,#8EB843)] px-4 py-3 text-white shadow-[0_12px_24px_rgba(108,142,42,0.18)]"
          >
            <Save className="h-6 w-6" strokeWidth={2.8} />
            <span className="text-[1rem] font-black">
              {saved ? 'Salvo' : 'Salvar'}
            </span>
          </button>
        </section>

        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,239,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
          <div className="text-sm font-black uppercase tracking-[0.16em] text-[#6C8E2A]">
            Outras opções
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const active = step.id === selectedId;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => navigate(step.route)}
                  className={`min-h-[118px] rounded-[26px] border-2 p-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)] ${
                    active ? 'border-[#4F8FD4]' : 'border-white/80'
                  }`}
                  style={{ backgroundColor: step.bg }}
                >
                  <Icon
                    className="mx-auto h-10 w-10"
                    strokeWidth={2.8}
                    style={{ color: step.color }}
                  />
                  <div className="mt-3 text-[0.92rem] font-black text-[#2A2420]">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}