import { useNavigate } from 'react-router-dom';

import type { ProductionStep } from '../production.types';

export function ProductionStepGrid({
  steps,
  selectedId,
}: {
  steps: ProductionStep[];
  selectedId: string;
}) {
  const navigate = useNavigate();

  return (
    <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,239,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#6C8E2A]">
        Etapas
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
              className={`min-h-[130px] rounded-[26px] border-2 p-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99] ${
                active ? 'border-[#4F8FD4]' : 'border-white/80'
              }`}
              style={{ backgroundColor: step.bg }}
            >
              <Icon
                className="mx-auto h-12 w-12"
                strokeWidth={2.8}
                style={{ color: step.color }}
              />

              <div className="mt-3 text-[1rem] font-black text-[#2A2420]">
                {step.shortLabel}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}