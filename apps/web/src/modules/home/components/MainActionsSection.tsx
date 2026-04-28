import { ChevronRight } from 'lucide-react';

import type { MainAction } from '../home.types';

function MainActionCard({ action }: { action: MainAction }) {
  const Icon = action.icon;

  return (
    <button
      onClick={action.onClick}
      className="group relative w-full overflow-hidden rounded-[30px] border bg-white/90 p-4 text-left shadow-[0_14px_30px_rgba(91,64,37,0.07)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
      style={{ borderColor: action.borderColor }}
      aria-label={action.title}
    >
      <div className="relative flex items-center gap-4">
        <div
          className="flex h-[5rem] w-[5rem] shrink-0 items-center justify-center rounded-[26px]"
          style={{ background: action.iconBg, boxShadow: action.shadowColor }}
        >
          <Icon className="h-10 w-10" strokeWidth={2.7} style={{ color: action.iconColor }} />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[1.28rem] font-black leading-6 tracking-tight text-[#231E1B]">
            {action.title}
          </div>

          <div className="mt-2 inline-flex rounded-full bg-[#F5EEE8] px-3 py-1 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#A16C4E]">
            {action.helper}
          </div>
        </div>

        <ChevronRight
          className="h-7 w-7 shrink-0 text-[#B19887] transition-transform duration-300 group-hover:translate-x-0.5"
          strokeWidth={2.8}
        />
      </div>
    </button>
  );
}

export function MainActionsSection({ actions }: { actions: MainAction[] }) {
  return (
    <section className="flex flex-col gap-4">
      {actions.map((action) => (
        <MainActionCard key={action.title} action={action} />
      ))}
    </section>
  );
}