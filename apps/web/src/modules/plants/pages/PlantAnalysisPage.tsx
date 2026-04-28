import {
  Camera,
  Home,
  Leaf,
  MessageCircleHeart,
  Mic,
  Sparkles,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FloatingAgroBackground } from '../../home/components/FloatingAgroBackground';
import { PageLoader } from '../../home/components/PageLoader';
import { OriaAssistantModal } from '../../oria/components/OriaAssistantModal';
import type { OriaTab } from '../../oria/oria.types';
import { PlantImageUploader } from '../components/PlantImageUploader';
import { PlantSymptomsForm } from '../components/PlantSymptomsForm';
import { usePlants } from '../usePlants';

export function PlantAnalysisPage() {
  const navigate = useNavigate();

  const [selectedProblemId, setSelectedProblemId] = useState('nao-sei');
  const { stats, steps, problemOptions, results } = usePlants(selectedProblemId);

  const [selectedImageName, setSelectedImageName] = useState('');
  const [selectedImageUrl, setSelectedImageUrl] = useState('');
  const [oriaModalOpen, setOriaModalOpen] = useState(false);
  const [oriaTab, setOriaTab] = useState<OriaTab>('voz');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleImageSelected = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (selectedImageUrl) {
      URL.revokeObjectURL(selectedImageUrl);
    }

    const objectUrl = URL.createObjectURL(file);
    setSelectedImageName(file.name);
    setSelectedImageUrl(objectUrl);
  };

  const handleOpenVoice = () => {
    setOriaTab('voz');
    setOriaModalOpen(true);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#F6EFE3_0%,#EFE3D3_100%)] px-5 py-4 text-stone-800 sm:px-6">
      <FloatingAgroBackground />
      <PageLoader visible={isLoading} />

      <OriaAssistantModal
        open={oriaModalOpen}
        activeTab={oriaTab}
        onChangeTab={setOriaTab}
        onClose={() => setOriaModalOpen(false)}
      />

      <div className="relative z-10 mx-auto w-full max-w-[27rem] space-y-4">
        <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.90),rgba(255,249,241,0.78))] p-4 shadow-[0_12px_28px_rgba(91,64,37,0.05)]">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F6E6DD] px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] text-[#A56745]">
              <Leaf className="h-3.5 w-3.5" strokeWidth={2.5} />
              Planta
            </div>

            <button
              onClick={() => navigate('/')}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-[#A56745] shadow-[0_8px_18px_rgba(91,64,37,0.06)]"
              aria-label="Voltar para início"
            >
              <Home className="h-5 w-5" strokeWidth={2.6} />
            </button>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#EAF5FF] shadow-[0_8px_18px_rgba(79,143,212,0.08)]">
              <MessageCircleHeart className="h-8 w-8 text-[#4F8FD4]" strokeWidth={2.8} />
            </div>

            <div>
              <h1 className="text-[1.6rem] font-black leading-[1.02] tracking-tight text-[#1F1A17]">
                Cuide da planta
              </h1>
              <p className="mt-2 text-[1rem] font-semibold leading-6 text-[#655A53]">
                Tire foto, toque no desenho ou fale com Oriá.
              </p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            <button
              type="button"
              className="rounded-[22px] bg-[#EAF5FF] p-3 text-center"
            >
              <Camera className="mx-auto h-8 w-8 text-[#4F8FD4]" strokeWidth={2.8} />
              <div className="mt-2 text-[0.8rem] font-black text-[#245E92]">
                Foto
              </div>
            </button>

            <button
              type="button"
              onClick={handleOpenVoice}
              className="rounded-[22px] bg-[#EDF3E3] p-3 text-center"
            >
              <Mic className="mx-auto h-8 w-8 text-[#5F7D26]" strokeWidth={2.8} />
              <div className="mt-2 text-[0.8rem] font-black text-[#5F7D26]">
                Falar
              </div>
            </button>

            <div className="rounded-[22px] bg-[#FFF0D0] p-3 text-center">
              <Sparkles className="mx-auto h-8 w-8 text-[#C88919]" strokeWidth={2.8} />
              <div className="mt-2 text-[0.8rem] font-black text-[#8A6A3A]">
                Ajuda
              </div>
            </div>
          </div>
        </section>

        <PlantImageUploader
          selectedImageName={selectedImageName}
          selectedImageUrl={selectedImageUrl}
          onImageSelected={handleImageSelected}
        />

        <PlantSymptomsForm
          stats={stats}
          steps={steps}
          problemOptions={problemOptions}
          selectedProblemId={selectedProblemId}
          onSelectProblem={setSelectedProblemId}
          onOpenVoice={handleOpenVoice}
          results={results}
        />
      </div>
    </div>
  );
}