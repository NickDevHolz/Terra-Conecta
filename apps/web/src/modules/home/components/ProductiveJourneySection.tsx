import {
  CalendarDays,
  Droplets,
  Leaf,
  PackageCheck,
  Scissors,
  Sprout,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: CalendarDays,
    title: 'Planejar',
    color: '#8A6A3A',
    bg: '#F6EBDD',
    path: '/production/planejar',
  },
  {
    icon: Sprout,
    title: 'Plantar',
    color: '#6C8E2A',
    bg: '#EDF3E3',
    path: '/production/plantar',
  },
  {
    icon: Leaf,
    title: 'Cuidar',
    color: '#5F7D26',
    bg: '#E8F6D9',
    path: '/production/cuidar',
  },
  {
    icon: Droplets,
    title: 'Molhar',
    color: '#4F8FD4',
    bg: '#EAF5FF',
    path: '/production/molhar',
  },
  {
    icon: Scissors,
    title: 'Colher',
    color: '#A26242',
    bg: '#F6E6DD',
    path: '/production/colher',
  },
  {
    icon: PackageCheck,
    title: 'Organizar',
    color: '#C88919',
    bg: '#FFF0D0',
    path: '/production/organizar',
  },
];

export function ProductiveJourneySection() {
  const navigate = useNavigate();

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(246,251,239,0.78))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#6C8E2A]">
        Producao
      </div>

      <h2 className="mt-2 text-[1.35rem] font-black leading-7 text-[#231E1B]">
        Do quintal a colheita
      </h2>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {steps.map(({ icon: Icon, title, color, bg, path }) => (
          <button
            key={title}
            type="button"
            onClick={() => navigate(path)}
            className="rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(91,64,37,0.04)] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.99]"
            style={{ backgroundColor: bg }}
          >
            <Icon
              className="mx-auto h-11 w-11"
              strokeWidth={2.7}
              style={{ color }}
            />
            <div className="mt-3 text-[1rem] font-black text-[#2A2420]">
              {title}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}