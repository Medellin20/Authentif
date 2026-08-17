import React from 'react';
import { Languages, ShieldCheck } from 'lucide-react';
import { languages, Language, useI18n } from '../i18n';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n();
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-[#f8f6f3]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-4 sm:px-8 lg:px-10">
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#991f36] text-white shadow-md sm:h-10 sm:w-10"><ShieldCheck className="h-5 w-5" /></span>
          <h1 className="whitespace-nowrap text-base font-black tracking-tight text-slate-950 sm:text-xl">Authentif<span className="text-[#991f36]">cash</span></h1>
        </div>
        <nav className="flex shrink-0 items-center gap-3">
          <div className="relative flex items-center">
            <Languages className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            <label htmlFor="language-selector" className="sr-only">{t('language')}</label>
            <select id="language-selector" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="w-[4.5rem] cursor-pointer rounded-full border border-slate-200 bg-white py-2.5 pl-8 pr-6 text-xs font-bold text-slate-700 outline-none transition hover:border-slate-300 focus:ring-2 focus:ring-rose-200 sm:w-auto sm:pl-9 sm:pr-8" aria-label={t('language')}>
              {languages.map(({ code, label, short }) => <option key={code} value={code}>{short} — {label}</option>)}
            </select>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
