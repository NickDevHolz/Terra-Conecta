import { Camera, HandHelping, Mic, Sprout } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function WelcomeSection() {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,249,241,0.76))] p-5 shadow-[0_14px_34px_rgba(91,64,37,0.06)]">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#F2DBCE]/60 blur-3xl" />
      <div className="absolute left-0 top-10 h-20 w-20 rounded-full bg-[#DCEEFF]/42 blur-3xl" />

      <div className="relative inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1.5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
        <Sprout className="h-4 w-4" strokeWidth={2.6} />
        {HOME_CONTENT.badge}
      </div>

      <h1 className="relative mt-4 text-[2rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
        {HOME_CONTENT.title}
      </h1>

      <p className="relative mt-3 text-[1.05rem] font-semibold leading-6 text-[#655A53]">
        {HOME_CONTENT.description}
      </p>

      <div className="relative mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-[22px] bg-[#EAF5FF] p-3 text-center">
          <Mic className="mx-auto h-9 w-9 text-[#4F8FD4]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.82rem] font-black text-[#2374BE]">
            Falar
          </div>
        </div>

        <div className="rounded-[22px] bg-[#EDF3E3] p-3 text-center">
          <Camera className="mx-auto h-9 w-9 text-[#5F7D26]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.82rem] font-black text-[#5F7D26]">
            Foto
          </div>
        </div>

        <div className="rounded-[22px] bg-[#FFF0D0] p-3 text-center">
          <HandHelping className="mx-auto h-9 w-9 text-[#C88919]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.82rem] font-black text-[#8A6A3A]">
            Ajuda
          </div>
        </div>
      </div>
    </section>
  );
}