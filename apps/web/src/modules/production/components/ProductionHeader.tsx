import { Home, MessageCircleHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import type { ProductionStep } from '../production.types';

export function ProductionHeader({ selectedStep }: { selectedStep: ProductionStep }) {
  const navigate = useNavigate();
  const Icon = selectedStep.icon;

  return (
    <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
          <Icon className="h-3.5 w-3.5" strokeWidth={2.6} />
          Producao
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#A56745] shadow-[0_8px_18px_rgba(91,64,37,0.06)]"
          aria-label="Voltar para inicio"
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
          <Icon className="h-11 w-11" strokeWidth={2.8} style={{ color: selectedStep.color }} />
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
  );
}