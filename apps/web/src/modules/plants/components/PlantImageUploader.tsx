import { Camera, CheckCircle2, ImagePlus } from 'lucide-react';

export function PlantImageUploader({
  selectedImageName,
  selectedImageUrl,
  onImageSelected,
}: {
  selectedImageName: string;
  selectedImageUrl: string;
  onImageSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const hasImage = Boolean(selectedImageName);

  return (
    <section className="rounded-[28px] border border-white/80 bg-[linear-gradient(180deg,rgba(234,245,255,0.96),rgba(248,251,255,0.90))] p-4 shadow-[0_10px_24px_rgba(79,143,212,0.08)]">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#EAF5FF]">
          <Camera className="h-8 w-8 text-[#4F8FD4]" strokeWidth={2.8} />
        </div>

        <div>
          <div className="text-[1.2rem] font-black leading-6 text-[#2C2622]">
            Foto da planta
          </div>
          <p className="mt-1 text-[0.9rem] font-bold text-[#655A53]">
            Tire ou escolha uma foto.
          </p>
        </div>
      </div>

      <label className="mt-4 flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-[26px] border-2 border-dashed border-[#9CCAF2] bg-[linear-gradient(180deg,#F2F9FF,#FFFDFC)] px-4 py-5 text-center transition-colors duration-200 hover:bg-[linear-gradient(180deg,#EDF7FF,#FFF9F4)]">
        {hasImage ? (
          <CheckCircle2 className="h-12 w-12 text-[#5F7D26]" strokeWidth={2.8} />
        ) : (
          <ImagePlus className="h-12 w-12 text-[#4F8FD4]" strokeWidth={2.8} />
        )}

        <div className="mt-3 text-[1.18rem] font-black text-[#2D2723]">
          {hasImage ? 'Foto escolhida' : 'Escolher foto'}
        </div>

        <div className="mt-1 text-[0.9rem] font-bold text-[#746962]">
          Toque aqui
        </div>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onImageSelected}
        />
      </label>

      {selectedImageUrl ? (
        <div className="mt-4 overflow-hidden rounded-[24px] border border-white/80 bg-white/80 shadow-[0_8px_18px_rgba(91,64,37,0.08)]">
          <img
            src={selectedImageUrl}
            alt="Pré-visualização da planta selecionada"
            className="h-52 w-full object-cover"
          />
        </div>
      ) : null}
    </section>
  );
}