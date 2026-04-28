import {
  BarChart3,
  ClipboardList,
  LineChart,
  ShieldCheck,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    icon: ClipboardList,
    label: 'Anotar',
    color: '#4F8FD4',
    bg: '#EAF5FF',
    path: '/management/anotar',
  },
  {
    icon: LineChart,
    label: 'Acompanhar',
    color: '#6C8E2A',
    bg: '#EDF3E3',
    path: '/management/acompanhar',
  },
  {
    icon: BarChart3,
    label: 'Melhorar',
    color: '#C88919',
    bg: '#FFF0D0',
    path: '/management/melhorar',
  },
  {
    icon: ShieldCheck,
    label: 'Evitar perdas',
    color: '#A26242',
    bg: '#F6E6DD',
    path: '/management/evitar-perdas',
  },
];

export function ProductiveDataSection() {
  const navigate = useNavigate();

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(239,247,255,0.78))] p-4 shadow-[0_12px_30px_rgba(79,143,212,0.06)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#4F8FD4]">
        Gestão
      </div>

      <h2 className="mt-2 text-[1.35rem] font-black leading-7 text-[#231E1B]">
        Acompanhe sem complicar
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {items.map(({ icon: Icon, label, color, bg, path }) => (
          <button
            key={label}
            type="button"
            onClick={() => navigate(path)}
            className="rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.04)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
            style={{ backgroundColor: bg }}
          >
            <Icon
              className="mx-auto h-10 w-10"
              strokeWidth={2.7}
              style={{ color }}
            />
            <div className="mt-3 text-[0.95rem] font-black leading-5 text-[#2A2420]">
              {label}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}