"use client";

import { getLanguageLabel, useLanguage } from "@/src/lib/i18n";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "en" ? "bg-white text-[#0F2766]" : "text-white/80 hover:text-white"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("am")}
        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${language === "am" ? "bg-white text-[#0F2766]" : "text-white/80 hover:text-white"}`}
      >
        አማ
      </button>
    </div>
  );
}
