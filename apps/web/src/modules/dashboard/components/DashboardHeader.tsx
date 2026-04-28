import { BarChart3, Home, ShieldCheck, Sprout } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function DashboardHeader() {
  const navigate = useNavigate();

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
          <BarChart3 className="h-3.5 w-3.5" strokeWidth={2.5} />
          Painel
        </div>

        <button
          onClick={() => navigate('/')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#A56745] shadow-[0_8px_18px_rgba(91,64,37,0.06)]"
          aria-label="Voltar para início"
        >
          <Home className="h-5 w-5" strokeWidth={2.6} />
        </button>
      </div>

      <div className="mt-4 flex items-start gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#EDF3E3]">
          <Sprout className="h-8 w-8 text-[#5F7D26]" strokeWidth={2.7} />
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-[1.6rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
            Minha produção
          </h1>

          <p className="mt-2 text-[1rem] font-semibold leading-6 text-[#655A53]">
            Veja cuidados, avisos, produção e venda.
          </p>
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#EDF7EA] px-3 py-2 text-[#5F7D26]">
        <ShieldCheck className="h-4 w-4" strokeWidth={2.5} />
        <span className="text-[0.72rem] font-black uppercase tracking-[0.12em]">
          Tudo certo hoje
        </span>
      </div>
    </section>
  );
}