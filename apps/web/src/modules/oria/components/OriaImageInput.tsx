import { CheckCircle2, ImagePlus } from 'lucide-react';

export function OriaImageInput({
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
    <div className="rounded-[24px] border border-white/80 bg-white/78 p-3 shadow-[0_8px_18px_rgba(79,143,212,0.05)]">
      <label className="flex min-h-[156px] cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-[#BDD9F2] bg-[linear-gradient(180deg,#F2F9FF,#FFFDFC)] px-4 py-5 text-center transition-colors duration-200 hover:bg-[linear-gradient(180deg,#EDF7FF,#FFF9F4)]">
        {hasImage ? (
          <CheckCircle2 className="h-12 w-12 text-[#5F7D26]" strokeWidth={2.8} />
        ) : (
          <ImagePlus className="h-12 w-12 text-[#4F8FD4]" strokeWidth={2.8} />
        )}

        <div className="mt-3 text-[1.12rem] font-black text-[#2D2723]">
          {hasImage ? 'Imagem pronta' : 'Escolher imagem'}
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
        <img
          src={selectedImageUrl}
          alt="Pré-visualização da imagem selecionada"
          className="mt-4 h-44 w-full rounded-[22px] object-cover shadow-[0_8px_18px_rgba(91,64,37,0.08)]"
        />
      ) : null}
    </div>
  );
}