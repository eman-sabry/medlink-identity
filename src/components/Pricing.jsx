
function CheckIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Pricing({ t }) {
  const pricingData = t?.pricing;
  const offlineCard = pricingData?.offlineCard;

  return (
    <section id="pricing" className="py-24 bg-slate-50/50 relative overflow-hidden min-h-screen">
     
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-med-blue/10 via-med-cyan/10 to-med-green/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
      
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {pricingData?.title}
          </h2>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 via-emerald-500/15 to-emerald-500/10 text-med-green font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-full border border-emerald-500/30 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-med-green animate-pulse" />
              {pricingData?.offerBadge}
            </span>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
          
         
          {pricingData?.plans?.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/30 ring-2 ring-med-green scale-105 z-20"
                  : "bg-white border border-slate-200/80 text-slate-800 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
                  <span className="bg-gradient-to-r from-med-green to-emerald-600 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-600/30 whitespace-nowrap border border-white/20">
                    Launch Offer ⭐
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-lg font-black mb-4 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-slate-200/20">
                  <span className="text-4xl sm:text-5xl font-black font-poppins tracking-tight">
                    {plan.price}
                  </span>
                  <span className={`text-xs font-bold ${plan.popular ? "text-slate-300" : "text-slate-500"}`}>
                    {pricingData?.currency}
                  </span>
                </div>

                
                <ul className="space-y-4 mb-8 text-xs font-bold">
                  <li className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                      plan.popular ? "bg-med-green/20 text-med-green" : "bg-emerald-50 text-med-green"
                    }`}>
                      <CheckIcon />
                    </div>
                    <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                      {plan.clinics}
                    </span>
                  </li>

                  {pricingData?.commonFeatures?.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
                        plan.popular ? "bg-med-green/20 text-med-green" : "bg-emerald-50 text-med-green"
                      }`}>
                        <CheckIcon />
                      </div>
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-4 rounded-2xl font-black text-center text-xs sm:text-sm transition-all duration-300 shadow-md ${
                  plan.popular
                    ? "bg-gradient-to-r from-med-green to-emerald-600 hover:from-emerald-600 hover:to-med-green text-white shadow-emerald-600/30"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}

        
          <div className="group relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-amber-500/10 via-white to-amber-500/5 border-2 border-amber-400/60 text-slate-900 shadow-lg shadow-amber-500/10 hover:shadow-xl hover:border-amber-400">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
              <span className="bg-amber-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md shadow-amber-500/30 whitespace-nowrap border border-white/20">
                {offlineCard?.badge}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-900 mb-4">
                {offlineCard?.title}
              </h3>

              <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-amber-200/60">
                <span className="text-4xl sm:text-5xl font-black font-poppins text-amber-600 tracking-tight">
                  {offlineCard?.price}
                </span>
                <span className="text-xs font-bold text-slate-600">
                  {offlineCard?.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8 text-xs font-bold text-slate-700">
                {offlineCard?.features?.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                      <CheckIcon />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-4 rounded-2xl font-black text-center text-xs sm:text-sm transition-all duration-300 shadow-md bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/25"
            >
              {offlineCard?.cta}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}