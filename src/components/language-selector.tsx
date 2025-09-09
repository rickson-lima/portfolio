import { useTranslation } from "../hooks/useTranslation";

export function LanguageSelector() {
  const { changeLanguage, currentLanguage } = useTranslation();

  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={currentLanguage}
        onChange={(e) => {
          handleLanguageChange(e.target.value);
        }}
        className="bg-gray-800 border border-gray-600 rounded px-2 py-1 text-sm text-gray-300 focus:outline-none focus:border-gray-500"
      >
        <option value="pt-BR">🇧🇷</option>
        <option value="en">🇺🇸 </option>
      </select>
    </div>
  );
}
