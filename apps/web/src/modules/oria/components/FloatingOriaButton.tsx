import { MessageCircleHeart, Sparkles } from 'lucide-react';

export function FloatingOriaButton({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-4 z-30 sm:right-6">
      <div className="relative animate-float-oria">
        <div className="absolute inset-0 rounded-full bg-[#7DB7EE]/40 blur-2xl" />

        <button
          type="button"
          onClick={onOpen}
          className="pointer-events-auto relative flex flex-col items-center gap-2 rounded-[999px] bg-transparent transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98]"
          aria-label="Abrir Oriá"
        >
          <div className="relative flex h-[5rem] w-[5rem] items-center justify-center rounded-full border border-white/85 bg-[linear-gradient(180deg,#EAF5FF_0%,#D6EBFF_100%)] shadow-[0_18px_36px_rgba(79,143,212,0.28)]">
            <div className="absolute inset-[6px] rounded-full bg-[linear-gradient(180deg,#FFFFFF_0%,#F4FAFF_100%)]" />

            <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7CB6EC,#4F8FD4)] shadow-[0_8px_16px_rgba(79,143,212,0.25)] animate-oria-pulse">
              <Sparkles className="h-4 w-4 text-white" strokeWidth={2.7} />
            </div>

            <div className="relative z-10 flex h-13 w-13 items-center justify-center rounded-full bg-[linear-gradient(135deg,#DCEEFF,#F7FBFF)] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <MessageCircleHeart className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.7} />
            </div>
          </div>

          <div className="rounded-full border border-white/80 bg-[linear-gradient(180deg,#5A98DB,#4F8FD4)] px-4 py-1.5 text-[0.9rem] font-black tracking-tight text-white shadow-[0_12px_24px_rgba(79,143,212,0.24)]">
            Oriá
          </div>
        </button>
      </div>
    </div>
  );
}