import { Send } from 'lucide-react';

export function OriaTextInput({
  value,
  disabled,
  onChange,
  onSubmit,
}: {
  value: string;
  disabled: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="rounded-[24px] border border-white/80 bg-white/78 p-3 shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Escreva aqui..."
        className="min-h-[104px] w-full resize-none rounded-[20px] border border-[#E7DDD4] bg-[linear-gradient(180deg,#FFFDFC,#FFF9F4)] px-4 py-3 text-[1rem] font-semibold text-[#2A2420] outline-none placeholder:text-[#A1968E] focus:border-[#A5CDF0]"
      />

      <button
        type="button"
        onClick={onSubmit}
        disabled={disabled || !value.trim()}
        className="mt-3 flex min-h-[56px] w-full items-center justify-center gap-2 rounded-[20px] bg-[linear-gradient(90deg,#4F8FD4,#6AAAE7)] px-4 py-3 text-[1rem] font-black text-white shadow-[0_12px_24px_rgba(79,143,212,0.18)] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-60"
      >
        <Send className="h-5 w-5" strokeWidth={2.8} />
        Enviar
      </button>
    </div>
  );
}