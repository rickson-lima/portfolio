import { useTranslation } from "../hooks/useTranslation";

export function LanguageSelector() {
  const { changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = (language: string) => {
    void changeLanguage(language);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentLanguage}
        onChange={(e) => {
          handleLanguageChange(e.target.value);
        }}
        className="bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-1.5 text-sm text-zinc-300 focus:outline-none focus:border-blue-500/50 hover:bg-white/5 transition-colors cursor-pointer"
      >
        <option value="pt-BR">🇧🇷</option>
        <option value="en">🇺🇸</option>
      </select>
    </div>
  );
}
