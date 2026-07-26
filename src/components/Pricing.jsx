function CheckIcon({ className = "w-3.5 h-3.5" }) {
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
    <section
      id="pricing"
      className="py-16 sm:py-20 bg-slate-50/50 relative overflow-hidden min-h-screen"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-med-blue/10 via-med-cyan/10 to-med-green/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {pricingData?.title}
          </h2>
          <div className="pt-1">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 via-emerald-500/15 to-emerald-500/10 text-med-green font-extrabold text-xs sm:text-sm px-5 py-2 rounded-full border border-emerald-500/30 shadow-sm backdrop-blur-md">
              {pricingData?.offerBadge}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {pricingData?.plans?.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                plan.popular
                  ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20 ring-2 ring-med-green scale-[1.02] lg:scale-105 z-20"
                  : "bg-white border border-slate-200/80 text-slate-800 shadow-md shadow-slate-200/40 hover:shadow-lg hover:border-slate-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
                  <span className="bg-gradient-to-r from-med-green to-emerald-600 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md shadow-emerald-600/30 whitespace-nowrap border border-white/20">
                    {t.pricing.popularBadge }
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3
                    className={`text-base font-black ${
                      plan.popular ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.discount && (
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full whitespace-nowrap ${
                        plan.popular
                          ? "bg-med-green/20 text-med-green border border-med-green/30"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {plan.discount}
                    </span>
                  )}
                </div>

                <div className="mb-4 pb-4 border-b border-slate-200/20">
                  {plan.originalPrice && (
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-bold line-through text-slate-400">
                        {plan.originalPrice}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {t.pricing.originalPriceLabel}
                      </span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black font-poppins tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-[11px] font-bold ${
                        plan.popular ? "text-slate-300" : "text-slate-500"
                      }`}
                    >
                      {pricingData?.currency}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6 text-[11px] sm:text-xs font-bold">
                  {plan.features?.map((feat, fIdx) => (
                    <li key={`pf-${fIdx}`} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-med-green/20 text-med-green"
                            : "bg-emerald-50 text-med-green"
                        }`}
                      >
                        <CheckIcon />
                      </div>
                      <span
                        className={
                          plan.popular ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}

                  {plan.clinics && (
                    <li className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-med-green/20 text-med-green"
                            : "bg-emerald-50 text-med-green"
                        }`}
                      >
                        <CheckIcon />
                      </div>
                      <span
                        className={
                          plan.popular ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {plan.clinics}
                      </span>
                    </li>
                  )}

                  {pricingData?.commonFeatures?.map((feat, fIdx) => (
                    <li key={`cf-${fIdx}`} className="flex items-start gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.popular
                            ? "bg-med-green/20 text-med-green"
                            : "bg-emerald-50 text-med-green"
                        }`}
                      >
                        <CheckIcon />
                      </div>
                      <span
                        className={
                          plan.popular ? "text-slate-200" : "text-slate-700"
                        }
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`w-full py-3 rounded-xl font-black text-center text-xs transition-all duration-300 shadow-sm ${
                  plan.popular
                    ? "bg-gradient-to-r from-med-green to-emerald-600 hover:from-emerald-600 hover:to-med-green text-white shadow-emerald-600/20"
                    : "bg-slate-900 hover:bg-slate-800 text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}

          <div className="group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 bg-gradient-to-b from-amber-500/10 via-white to-amber-500/5 border-2 border-amber-400/60 text-slate-900 shadow-md shadow-amber-500/10 hover:shadow-lg hover:border-amber-400">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30">
              <span className="bg-amber-500 text-white text-[10px] sm:text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md shadow-amber-500/20 whitespace-nowrap border border-white/20">
                {offlineCard?.badge}
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-black text-slate-900">
                  {offlineCard?.title}
                </h3>
                {offlineCard?.discount && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 whitespace-nowrap">
                    {offlineCard?.discount}
                  </span>
                )}
              </div>

              <div className="mb-4 pb-4 border-b border-amber-200/60">
                {offlineCard?.originalPrice && (
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs font-bold text-slate-400 line-through">
                      {offlineCard?.originalPrice}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {t.pricing.originalPriceLabel}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black font-poppins text-amber-600 tracking-tight">
                    {offlineCard?.price}
                  </span>
                  <span className="text-[11px] font-bold text-slate-600">
                    {offlineCard?.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-2.5 mb-6 text-[11px] sm:text-xs font-bold text-slate-700">
                {offlineCard?.features?.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-md bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckIcon />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="w-full py-3 rounded-xl font-black text-center text-xs transition-all duration-300 shadow-sm bg-amber-500 hover:bg-amber-600 text-white shadow-amber-500/20"
            >
              {offlineCard?.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
