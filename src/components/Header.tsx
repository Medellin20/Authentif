import React from 'react';
import { Languages, ShieldCheck } from 'lucide-react';
import { languages, Language, useI18n } from '../i18n';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f8f6f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#991f36] text-white shadow-md"><ShieldCheck className="h-5 w-5" /></span>
          <h1 className="truncate text-lg font-black tracking-tight text-slate-950 sm:text-xl">Authentif<span className="text-[#991f36]">cash</span></h1>
        </div>
        <nav className="flex shrink-0 items-center gap-3">
          <div className="relative flex items-center">
            <Languages className="pointer-events-none absolute left-3 h-4 w-4 text-slate-500" aria-hidden="true" />
            <label htmlFor="language-selector" className="sr-only">{t('language')}</label>
            <select id="language-selector" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="cursor-pointer rounded-full border border-slate-200 bg-white py-2.5 pl-9 pr-8 text-xs font-bold text-slate-700 outline-none transition hover:border-slate-300 focus:ring-2 focus:ring-rose-200" aria-label={t('language')}>
              {languages.map(({ code, label, short }) => <option key={code} value={code}>{short} — {label}</option>)}
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
