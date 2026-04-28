import { HandHelping, Repeat2, Sprout } from 'lucide-react';

import { HOME_CONTENT } from '../home.constants';

export function HelpSection() {
  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,249,241,0.72))] p-4 shadow-[0_12px_30px_rgba(91,64,37,0.05)]">
      <div className="text-sm font-black uppercase tracking-[0.16em] text-[#A26242]">
        Terra Conecta
      </div>

      <h2 className="mt-2 text-[1.3rem] font-black leading-7 text-[#231E1B]">
        {HOME_CONTENT.helpTitle}
      </h2>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-[22px] bg-[#EDF3E3] p-3 text-center">
          <Sprout className="mx-auto h-8 w-8 text-[#5F7D26]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.78rem] font-black text-[#2A2420]">
            Família
          </div>
        </div>

        <div className="rounded-[22px] bg-[#EAF5FF] p-3 text-center">
          <HandHelping className="mx-auto h-8 w-8 text-[#4F8FD4]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.78rem] font-black text-[#2A2420]">
            Apoio
          </div>
        </div>

        <div className="rounded-[22px] bg-[#FFF0D0] p-3 text-center">
          <Repeat2 className="mx-auto h-8 w-8 text-[#C88919]" strokeWidth={2.7} />
          <div className="mt-2 text-[0.78rem] font-black text-[#2A2420]">
            Replicar
          </div>
        </div>
      </div>
    </section>
  );
}