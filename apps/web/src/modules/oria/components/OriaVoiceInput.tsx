import { Mic, StopCircle, Volume2 } from 'lucide-react';

import type { PermissionStateType } from '../oria.types';

export function OriaVoiceInput({
  voiceRecording,
  voicePermission,
  onStart,
  onStop,
}: {
  voiceRecording: boolean;
  voicePermission: PermissionStateType;
  onStart: () => void;
  onStop: () => void;
}) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/78 p-4 text-center shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] bg-[#EAF5FF]">
        <Volume2 className="h-8 w-8 text-[#4F8FD4]" strokeWidth={2.8} />
      </div>

      <div className="mt-3 text-[1.25rem] font-black text-[#1F1A17]">
        {voiceRecording ? 'Gravando' : 'Falar com Oriá'}
      </div>

      <div className="mt-1 text-[0.9rem] font-bold text-[#72675F]">
        {voicePermission === 'denied'
          ? 'Microfone bloqueado'
          : voicePermission === 'unsupported'
            ? 'Sem microfone'
            : voiceRecording
              ? 'Toque para parar'
              : 'Toque para começar'}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          onClick={voiceRecording ? onStop : onStart}
          className={`relative flex h-28 w-28 items-center justify-center rounded-full border transition-all duration-300 ${
            voiceRecording
              ? 'border-[#F0B3AF] bg-[linear-gradient(180deg,#FDE5E3,#FDF5F4)] shadow-[0_18px_34px_rgba(207,99,89,0.16)]'
              : 'border-white/85 bg-[linear-gradient(180deg,#EAF5FF,#F7FBFF)] shadow-[0_18px_34px_rgba(79,143,212,0.14)]'
          }`}
        >
          <div className="absolute inset-2 rounded-full bg-[linear-gradient(180deg,#FFFFFF,#F6FBFF)]" />

          {voiceRecording ? (
            <StopCircle className="relative z-10 h-12 w-12 text-[#D1695F]" strokeWidth={2.8} />
          ) : (
            <Mic className="relative z-10 h-12 w-12 text-[#4F8FD4]" strokeWidth={2.8} />
          )}
        </button>
      </div>
    </div>
  );
}