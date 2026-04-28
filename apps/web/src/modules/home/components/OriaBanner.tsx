import {
  Camera,
  HeartHandshake,
  MessageCircleHeart,
  Mic,
  Store,
  Volume2,
} from 'lucide-react';
import { useMemo } from 'react';

import { OriaLogo } from '../../oria/components/OriaLogo';
import { HOME_CONTENT } from '../home.constants';

export function OriaBanner({ onPrimaryAction }: { onPrimaryAction: () => void }) {
  const items = useMemo(
    () => [
      { icon: Mic, label: 'Falar', color: '#4F8FD4', bg: '#EAF5FF' },
      { icon: Camera, label: 'Foto', color: '#6C8E2A', bg: '#EDF3E3' },
      { icon: Store, label: 'Vender', color: '#C88919', bg: '#FFF0D0' },
      { icon: HeartHandshake, label: 'Ajuda', color: '#E28A57', bg: '#FFF0EA' },
    ],
    [],
  );

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF_0%,#F8FBFF_42%,#F3F7EC_100%)] p-5 shadow-[0_18px_40px_rgba(79,143,212,0.12)]">
      <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-[#CFE7FB]/85 blur-3xl" />
      <div className="absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-[#E4F2DC]/70 blur-3xl" />

      <div className="relative flex items-center gap-4">
        <OriaLogo large />

        <div className="min-w-0 flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#4F8FD4]">
            <MessageCircleHeart className="h-3.5 w-3.5" strokeWidth={2.4} />
            Oriá
          </div>

          <h2 className="mt-3 text-[2rem] font-black leading-[0.98] tracking-tight text-[#2374BE]">
            {HOME_CONTENT.oriaBannerTitle}
          </h2>

          <p className="mt-2 text-[1rem] font-bold leading-6 text-[#245E92]">
            {HOME_CONTENT.oriaBannerSubtitle}
          </p>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-4 gap-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-[20px] border border-white/80 p-3 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]"
              style={{ background: item.bg }}
            >
              <Icon
                className="mx-auto h-8 w-8"
                strokeWidth={2.7}
                style={{ color: item.color }}
              />
              <div className="mt-2 text-[0.72rem] font-black text-[#2E2A27]">
                {item.label}
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onPrimaryAction}
        className="relative mt-4 flex min-h-[64px] w-full items-center justify-center gap-3 rounded-[24px] bg-[linear-gradient(90deg,#3C87D7,#62A9EA,#4F8FD4)] px-5 py-4 text-white shadow-[0_16px_30px_rgba(79,143,212,0.24)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#DCEEFF] active:scale-[0.99]"
        aria-label={HOME_CONTENT.oriaPrimaryCta}
      >
        <Volume2 className="h-7 w-7" strokeWidth={2.8} />
        <span className="text-[1.12rem] font-black tracking-tight">
          {HOME_CONTENT.oriaPrimaryCta}
        </span>
      </button>
    </section>
  );
}