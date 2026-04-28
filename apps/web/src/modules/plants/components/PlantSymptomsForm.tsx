import {
  CheckCircle2,
  Droplets,
  Leaf,
  Mic,
  Search,
  Sparkles,
  Sun,
  Volume2,
} from 'lucide-react';

import type {
  PlantProblemOption,
  PlantQuickStat,
  PlantResultCard,
  PlantStepCard,
} from '../plants.types';

function problemTone(index: number, active: boolean) {
  const tones = [
    { bg: '#EAF5FF', color: '#4F8FD4', border: 'rgba(79,143,212,0.36)' },
    { bg: '#EDF3E3', color: '#5F7D26', border: 'rgba(108,142,42,0.36)' },
    { bg: '#FFF0D0', color: '#C88919', border: 'rgba(200,137,25,0.36)' },
    { bg: '#F6E6DD', color: '#A26242', border: 'rgba(162,98,66,0.36)' },
  ];

  const tone = tones[index % tones.length];

  return {
    backgroundColor: tone.bg,
    borderColor: active ? tone.color : tone.border,
    color: tone.color,
  };
}

function VisualStats({ stats }: { stats: PlantQuickStat[] }) {
  const icons = [Leaf, Droplets, Sun];

  return (
    <section className="grid grid-cols-3 gap-3">
      {stats.slice(0, 3).map((item, index) => {
        const Icon = icons[index] ?? Leaf;

        return (
          <article
            key={item.title}
            className="rounded-[22px] border border-white/80 bg-white/88 p-3 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)]"
          >
            <Icon className="mx-auto h-8 w-8 text-[#6C8E2A]" strokeWidth={2.8} />

            <p className="mt-2 text-[1.3rem] font-black leading-none text-[#1F1A17]">
              {item.value}
            </p>

            <p className="mt-1 truncate text-[0.72rem] font-black uppercase tracking-[0.08em] text-[#A56745]">
              {item.title}
            </p>
          </article>
        );
      })}
    </section>
  );
}

function VisualSteps({ steps }: { steps: PlantStepCard[] }) {
  const fallback = steps.length
    ? steps
    : [
        { icon: '1', title: 'Foto', description: 'Mostre a planta' },
        { icon: '2', title: 'Problema', description: 'Toque no desenho' },
        { icon: '3', title: 'Ajuda', description: 'Fale com Oriá' },
      ];

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,239,0.78))] p-4 shadow-[0_10px_24px_rgba(91,64,37,0.05)]">
      <div className="text-[1.15rem] font-black text-[#1F1A17]">
        Como usar
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {fallback.slice(0, 3).map((item) => (
          <article
            key={item.title}
            className="rounded-[22px] border border-white/80 bg-white/78 p-3 text-center"
          >
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#EDF3E3] text-[1.2rem] font-black text-[#5F7D26]">
              {item.icon}
            </div>

            <div className="mt-2 text-[0.85rem] font-black leading-4 text-[#2A2420]">
              {item.title}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProblemPicker({
  problemOptions,
  selectedProblemId,
  onSelectProblem,
}: {
  problemOptions: PlantProblemOption[];
  selectedProblemId: string;
  onSelectProblem: (problemId: string) => void;
}) {
  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_10px_24px_rgba(91,64,37,0.05)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-[#EDF3E3]">
          <Search className="h-7 w-7 text-[#5F7D26]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#1F1A17]">
            O que aparece?
          </div>
          <div className="text-[0.9rem] font-bold text-[#7A6E66]">
            Toque no desenho
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {problemOptions.map((item, index) => {
          const active = item.id === selectedProblemId;
          const style = problemTone(index, active);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectProblem(item.id)}
              className="min-h-[118px] rounded-[26px] border-2 px-3 py-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
              style={style}
            >
              <div className="text-[2.2rem]">{item.icon}</div>
              <div className="mt-2 text-[1rem] font-black leading-5 text-[#2A2420]">
                {item.label}
              </div>

              {active ? (
                <CheckCircle2
                  className="mx-auto mt-2 h-5 w-5"
                  strokeWidth={2.8}
                  style={{ color: style.color }}
                />
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function VoiceHelpButton({ onOpenVoice }: { onOpenVoice: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpenVoice}
      className="flex min-h-[68px] w-full items-center justify-center gap-3 rounded-[26px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-4 text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/18">
        <Mic className="h-7 w-7" strokeWidth={2.8} />
      </div>
      <span className="text-[1.12rem] font-black">Falar com Oriá</span>
    </button>
  );
}

function VisualResults({ results }: { results: PlantResultCard[] }) {
  const visible = results.slice(0, 3);

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/80">
          <Sparkles className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#245E92]">
            Oriá observou
          </div>
          <div className="text-[0.9rem] font-bold text-[#5D7792]">
            Veja os próximos passos
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {visible.map((item) => (
          <article
            key={item.title}
            className="flex items-center gap-3 rounded-[24px] border border-white/75 bg-white/82 p-3.5 shadow-[0_6px_14px_rgba(79,143,212,0.05)]"
          >
            <CheckCircle2 className="h-9 w-9 shrink-0 text-[#5F7D26]" strokeWidth={2.8} />

            <div className="min-w-0 flex-1">
              <p className="truncate text-[1rem] font-black text-[#231E1B]">
                {item.title}
              </p>
              <p className="mt-0.5 line-clamp-2 text-[0.82rem] font-semibold leading-5 text-[#6B6058]">
                {item.description}
              </p>
            </div>

            <Volume2 className="h-6 w-6 shrink-0 text-[#4F8FD4]" strokeWidth={2.7} />
          </article>
        ))}
      </div>
    </section>
  );
}

export function PlantSymptomsForm({
  stats,
  steps,
  problemOptions,
  selectedProblemId,
  onSelectProblem,
  onOpenVoice,
  results,
}: {
  stats: PlantQuickStat[];
  steps: PlantStepCard[];
  problemOptions: PlantProblemOption[];
  selectedProblemId: string;
  onSelectProblem: (problemId: string) => void;
  onOpenVoice: () => void;
  results: PlantResultCard[];
}) {
  return (
    <div className="space-y-4">
      <VisualStats stats={stats} />
      <VisualSteps steps={steps} />
      <ProblemPicker
        problemOptions={problemOptions}
        selectedProblemId={selectedProblemId}
        onSelectProblem={onSelectProblem}
      />
      <VoiceHelpButton onOpenVoice={onOpenVoice} />
      <VisualResults results={results} />
    </div>
  );
}