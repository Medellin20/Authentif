import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, BadgeCheck, Clock3, Headphones, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthForm from '../components/AuthForm';
import { useI18n } from '../i18n';

const HomePage: React.FC = () => {
  const { t } = useI18n();
  const methods = [
    { image: '/images/zola.png', title: 'Apple Card', description: t('appleDesc') },
    { image: 'https://s3.eu-central-1.amazonaws.com/strapi.dundle.com/ou_et_comment_acheter_carte_neosurf_en_ligne_image_dundle_169bb11d25.png', title: 'Neosurf', description: t('neosurfDesc') },
    { image: '/images/zero.png', title: 'TransCash', description: t('transcashDesc') },
    { image: '/images/zazi.png', title: 'Steam Card', description: t('steamDesc') },
    { image: '/images/ziza.png', title: 'Google Play', description: t('googleDesc') },
    { image: '/images/zeze.png', title: 'Paysafecard', description: t('paysafeDesc') },
  ];
  const guarantees = [
    { icon: Clock3, text: t('guarantee1') }, { icon: LockKeyhole, text: t('guarantee2') },
    { icon: BadgeCheck, text: t('guarantee3') }, { icon: Headphones, text: t('guarantee4') },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f6f3] text-slate-950">
      <Header />
      <main>
        <section className="hero-grid relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20 lg:pt-24">
          <div className="pointer-events-none absolute -right-32 -top-40 h-[32rem] w-[32rem] rounded-full bg-rose-200/50 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-rose-800 shadow-sm backdrop-blur"><ShieldCheck className="h-4 w-4" /> {t('guarantee2')}</div>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.06] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-7xl">{t('heroTitle')}</h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">{t('heroText')}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#demande" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#991f36] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_35px_rgba(153,31,54,.24)] transition hover:-translate-y-0.5 hover:bg-[#7d172b]">{t('send')} <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
                <a href="#solutions" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-7 py-4 text-sm font-bold text-slate-800 transition hover:bg-white">{t('methodsTitle')}</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-600"><span className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-rose-700" /> {t('guarantee3')}</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-rose-700" /> {t('guarantee4')}</span></div>
            </motion.div>
            <motion.div className="relative mx-auto w-full max-w-[34rem]" initial={{ opacity: 0, scale: .94, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .75, delay: .1 }}>
              <div className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-[#991f36]/10" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(42,26,31,.16)]">
                <img src="/images/zero.png" alt={t('heroAlt')} className="h-[24rem] w-full rounded-[1.45rem] bg-gradient-to-br from-rose-50 to-stone-100 object-contain p-8 sm:h-[30rem]" />
                  <div className="absolute bottom-8 left-8 right-8 flex items-center gap-3 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-lg backdrop-blur"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 text-emerald-700"><ShieldCheck className="h-6 w-6" /></span><div><p className="text-sm font-extrabold">{t('guarantees')}</p><p className="mt-0.5 text-xs text-slate-500">{t('guarantee2')}</p></div></div>
              </div>
              <div className="absolute -right-5 -top-5 hidden rounded-2xl bg-[#1f2937] p-4 text-white shadow-xl sm:block"><Sparkles className="h-6 w-6" /></div>
            </motion.div>
          </div>
        </section>

        <section id="solutions" className="bg-[#151719] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div><span className="text-xs font-bold uppercase tracking-[.25em] text-rose-400">Authentifcash</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{t('methodsTitle')}</h2></div><p className="max-w-md leading-7 text-slate-400">{t('methodsText')}</p></motion.div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{methods.map((method, index) => <motion.article key={method.title} className="group rounded-3xl border border-white/10 bg-white/[.055] p-5 transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white/[.08]" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: index * .06 }} viewport={{ once: true }}><div className="mb-5 grid h-44 place-items-center overflow-hidden rounded-2xl bg-white p-5"><img src={method.image} alt={method.title} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" /></div><div className="flex items-start justify-between gap-4"><div><h3 className="text-lg font-extrabold">{method.title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{method.description}</p></div><span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" /></div></motion.article>)}</div>
          </div>
        </section>

        <section id="demande" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <motion.div className="mx-auto mb-14 max-w-3xl text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="text-xs font-bold uppercase tracking-[.25em] text-rose-700">{t('requestTitle')}</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">{t('formSectionTitle')}</h2><p className="mt-5 leading-7 text-slate-600">{t('formSectionText')}</p></motion.div>
            <div className="grid items-start gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <motion.aside className="overflow-hidden rounded-[2rem] bg-[#991f36] p-7 text-white shadow-[0_25px_60px_rgba(153,31,54,.2)] sm:p-10 lg:sticky lg:top-28" initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><ShieldCheck className="h-10 w-10" /><h3 className="mt-7 text-3xl font-black">{t('guarantees')}</h3><p className="mt-3 text-sm leading-6 text-rose-100">{t('requestIntro')}</p><div className="mt-8 space-y-3">{guarantees.map(({ icon: Icon, text }) => <div key={text} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#991f36]"><Icon className="h-5 w-5" /></span><span className="text-sm font-semibold leading-5">{text}</span></div>)}</div></motion.aside>
              <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><AuthForm /></motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default HomePage;
