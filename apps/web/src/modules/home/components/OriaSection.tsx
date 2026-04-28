import {
  Camera,
  ChevronRight,
  MessageCircleHeart,
  Mic,
  Store,
  Volume2,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { HOME_CONTENT } from '../home.constants';

export function OriaSection({
  onVoicePress,
  onListenPress,
  onCameraPress,
}: {
  onVoicePress: () => void;
  onListenPress: () => void;
  onCameraPress: () => void;
}) {
  const navigate = useNavigate();

  const cards = [
    {
      icon: Mic,
      label: 'Falar',
      color: '#4F8FD4',
      bg: '#EAF5FF',
      onClick: () => navigate('/oria'),
    },
    {
      icon: Volume2,
      label: 'Ouvir',
      color: '#4F8FD4',
      bg: '#EAF5FF',
      onClick: () => navigate('/oria'),
    },
    {
      icon: Camera,
      label: 'Foto',
      color: '#6C8E2A',
      bg: '#EDF3E3',
      onClick: onCameraPress,
    },
    {
      icon: Store,
      label: 'Venda',
      color: '#C88919',
      bg: '#FFF0D0',
      onClick: () => navigate('/market/feira'),
    },
  ] as const;

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,251,255,0.82))] p-4 shadow-[0_12px_30px_rgba(79,143,212,0.06)]">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF5FF]">
          <MessageCircleHeart className="h-6 w-6 text-[#4F8FD4]" strokeWidth={2.7} />
        </div>

        <div className="text-[1.1rem] font-black leading-5 text-[#2C2622]">
          {HOME_CONTENT.oriaSectionTitle}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <button
              key={card.label}
              onClick={card.onClick}
              className="flex min-h-[136px] flex-col items-center justify-center rounded-[24px] border border-white/80 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
              style={{ backgroundColor: card.bg }}
              aria-label={card.label}
              type="button"
            >
              <Icon className="h-10 w-10" strokeWidth={2.7} style={{ color: card.color }} />

              <div className="mt-4 flex items-center gap-1 text-[1.05rem] font-black text-[#2A2420]">
                {card.label}
                <ChevronRight className="h-4 w-4 text-[#9A8C80]" strokeWidth={2.8} />
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}