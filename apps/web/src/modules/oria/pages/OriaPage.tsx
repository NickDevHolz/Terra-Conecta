import {
  Camera,
  Home,
  MessageCircleHeart,
  Mic,
  Sparkles,
  Volume2,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FloatingAgroBackground } from '../../home/components/FloatingAgroBackground';
import { PageLoader } from '../../home/components/PageLoader';
import type { OriaTab } from '../oria.types';
import { OriaAssistantModal } from '../components/OriaAssistantModal';
import { OriaLogo } from '../components/OriaLogo';

export function OriaPage() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<OriaTab>('voz');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  const openOria = (tab: OriaTab) => {
    setActiveTab(tab);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />

      <OriaAssistantModal
        open={modalOpen}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
        onClose={() => setModalOpen(false)}
      />

      <div className="relative z-10 mx-auto w-full max-w-[27rem] space-y-4">
        <section className="rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF5FF] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#4F8FD4]">
              <MessageCircleHeart className="h-3.5 w-3.5" strokeWidth={2.6} />
              Oriá
            </div>

            <button
              onClick={() => navigate('/')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#A56745] shadow-[0_8px_18px_rgba(91,64,37,0.06)]"
              aria-label="Voltar para início"
            >
              <Home className="h-5 w-5" strokeWidth={2.6} />
            </button>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <OriaLogo large />

            <div className="min-w-0 flex-1">
              <h1 className="text-[2rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                Fale com Oriá
              </h1>

              <p className="mt-2 text-[1rem] font-bold leading-6 text-[#655A53]">
                Use voz, foto ou texto.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4">
          <button
            type="button"
            onClick={() => openOria('voz')}
            className="flex min-h-[112px] items-center gap-4 rounded-[30px] border border-white/80 bg-[#EAF5FF] p-4 text-left shadow-[0_12px_28px_rgba(79,143,212,0.08)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,#4F8FD4,#77B4EB)]">
              <Mic className="h-11 w-11 text-white" strokeWidth={2.8} />
            </div>

            <div>
              <div className="text-[1.45rem] font-black text-[#1F1A17]">
                Falar
              </div>
              <div className="mt-1 text-[0.95rem] font-bold text-[#4F6F8E]">
                Toque e conte o problema.
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => openOria('imagem')}
            className="flex min-h-[112px] items-center gap-4 rounded-[30px] border border-white/80 bg-[#EDF3E3] p-4 text-left shadow-[0_12px_28px_rgba(95,125,38,0.08)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,#6C8E2A,#8EB843)]">
              <Camera className="h-11 w-11 text-white" strokeWidth={2.8} />
            </div>

            <div>
              <div className="text-[1.45rem] font-black text-[#1F1A17]">
                Mostrar
              </div>
              <div className="mt-1 text-[0.95rem] font-bold text-[#5F7D26]">
                Envie foto da planta.
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => openOria('texto')}
            className="flex min-h-[112px] items-center gap-4 rounded-[30px] border border-white/80 bg-[#FFF0D0] p-4 text-left shadow-[0_12px_28px_rgba(200,137,25,0.08)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[26px] bg-[linear-gradient(135deg,#C88919,#E8BD61)]">
              <Volume2 className="h-11 w-11 text-white" strokeWidth={2.8} />
            </div>

            <div>
              <div className="text-[1.45rem] font-black text-[#1F1A17]">
                Escrever
              </div>
              <div className="mt-1 text-[0.95rem] font-bold text-[#8A6A3A]">
                Digite uma dúvida.
              </div>
            </div>
          </button>
        </section>

        <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,#EAF5FF,#F8FBFF)] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-white/80">
              <Sparkles className="h-7 w-7 text-[#4F8FD4]" strokeWidth={2.8} />
            </div>

            <div>
              <div className="text-[1.15rem] font-black text-[#1F1A17]">
                Ajuda simples
              </div>
              <div className="text-[0.9rem] font-bold text-[#5D7792]">
                Produção, planta, água, colheita e venda.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}