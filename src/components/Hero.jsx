
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  FileText,
  CalendarCheck,
  BadgeDollarSign,
} from "lucide-react";

export default function Hero({ t, lang }) {
  const isAr = lang === "ar";

  return (
    <section className="relative pt-12 pb-24 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50/60 via-emerald-50/20 to-transparent min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-med-green/30 shadow-sm text-med-green text-xs sm:text-sm font-extrabold mb-6 animate-soft-pulse">
            <Sparkles className="w-4 h-4 text-med-green" />
            <span>{t.hero.badge}</span>
          </div>

          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.25] mb-6">
            {t.hero.titlePart1}{" "}
            <span className="text-gradient-medlink">
              {t.hero.titleHighlight}
            </span>
          </h1>

          <p className="text-slate-700 text-base sm:text-xl font-medium leading-relaxed mb-8 max-w-2xl">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-gradient-medlink hover:opacity-95 text-white font-black text-base px-8 py-4 rounded-2xl shadow-lg shadow-med-blue/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <span>{t.hero.requestDemo}</span>
              {isAr ? (
                <ArrowLeft className="w-5 h-5" />
              ) : (
                <ArrowRight className="w-5 h-5" />
              )}
            </a>
            <a
              href="#contact"
              className="bg-white border-2 border-med-blue/20 hover:border-med-blue text-med-blue font-black text-base px-8 py-4 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {t.hero.contactUs}
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
           
            <div className="absolute -inset-2 bg-gradient-medlink rounded-[3rem] blur-2xl opacity-30 animate-pulse"></div>

            <div className="relative bg-white/85 backdrop-blur-2xl rounded-[2.5rem] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,67,149,0.12)] border border-white/80 space-y-4">
          
              <div className="space-y-3.5">
               
                <div className="p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-med-blue flex items-center justify-center font-bold shrink-0 group-hover:bg-med-blue group-hover:text-white transition-all shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-med-blue transition-colors">
                        {t.hero?.moduleRecordsTitle}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400">
                        {t.hero?.moduleRecordsSub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-3 py-1 rounded-full bg-blue-50 text-med-blue border border-blue-100/50">
                    {t.hero?.moduleRecordsStatus}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-med-green flex items-center justify-center font-bold shrink-0 group-hover:bg-med-green group-hover:text-white transition-all shadow-sm">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-med-green transition-colors">
                        {t.hero?.moduleBookingTitle}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400">
                        {t.hero?.moduleBookingSub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-3 py-1 rounded-full bg-emerald-50 text-med-green border border-emerald-100/50">
                    {t.hero?.moduleBookingStatus}
                  </span>
                </div>

             
                <div className="p-4 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between group cursor-default">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 text-med-cyan flex items-center justify-center font-bold shrink-0 group-hover:bg-med-cyan group-hover:text-white transition-all shadow-sm">
                      <BadgeDollarSign className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-black text-slate-800 group-hover:text-med-cyan transition-colors">
                        {t.hero?.moduleFinanceTitle}
                      </div>
                      <div className="text-[11px] font-semibold text-slate-400">
                        {t.hero?.moduleFinanceSub}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-black px-3 py-1 rounded-full bg-cyan-50 text-med-cyan border border-cyan-100/50">
                    {t.hero?.moduleFinanceStatus}
                  </span>
                </div>
              </div>

             
              <div className="absolute -top-6 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100/80 flex items-center gap-3 transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-med-blue/10 text-med-blue flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-800">
                    {t.hero?.securityTitle}
                  </div>
                  <div className="text-[11px] font-bold text-med-blue">
                    {t.hero?.securitySub}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-slate-100/80 flex items-center gap-3 transition-transform hover:scale-105">
                <div className="w-10 h-10 rounded-xl bg-med-green/10 text-med-green flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-800">
                    {t.hero?.bookingTitle}
                  </div>
                  <div className="text-[11px] font-bold text-med-green">
                    {t.hero?.bookingSub}
                  </div>
                </div>
              </div>

        
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-100/80 items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-med-cyan animate-pulse"></span>
                <span className="text-xs font-black text-slate-700">
                  {t.hero?.tagCloud || "تطبيق سحابي ☁️"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
