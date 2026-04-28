import { BRAND } from '../home.constants';

export function Footer() {
  return (
    <footer className="mt-4 flex flex-col items-center gap-1 pb-2 text-center">
      <div className="text-[0.84rem] font-bold text-[#7A6E66]">
        Terra Conecta • produ\u00e7\u00e3o ao mercado
      </div>
      <div className="text-[0.72rem] font-medium text-[#9B8D82]">
        {BRAND.copyright}
      </div>
    </footer>
  );
}