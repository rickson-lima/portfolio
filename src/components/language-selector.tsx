import { useTranslation } from "../hooks/useTranslation";
import clsx from "clsx";

interface Props {
  className?: string;
}

export function LanguageSelector({ className }: Props) {
  const { changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = (language: string) => {
    void changeLanguage(language);
  };

  return (
    <div className={clsx("relative", className)}>
      <select
        value={currentLanguage}
        onChange={(e) => {
          handleLanguageChange(e.target.value);
        }}
        className="bg-transparent text-sm text-zinc-400 hover:text-[#dbf24a] transition-colors cursor-pointer appearance-none pl-2 pr-6 outline-none font-medium text-center"
      >
        <option value="pt-BR" className="bg-zinc-900">
          🇧🇷 PT
        </option>
        <option value="en" className="bg-zinc-900">
          🇺🇸 EN
        </option>
      </select>
    </div>
  );
}
