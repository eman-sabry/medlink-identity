
import { Check, ShieldCheck } from "lucide-react";

export default function WhyChooseUs({ t }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden  min-h-screen  flex items-center">
     
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-med-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-green/10 text-med-green text-xs font-black mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {t.whyUs.title}
          </h2>
        </div>

    
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.points.map((pt, idx) => (
            <div
              key={idx}
              className="group relative flex items-center gap-4 p-6 rounded-2xl bg-[#F4F8FA] border border-slate-200/70 shadow-sm hover:bg-white hover:border-med-green hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
            >
             
              <div className="w-11 h-11 rounded-xl bg-med-green/15 text-med-green group-hover:bg-med-green group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:scale-110">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>

            
              <span className="font-extrabold text-slate-800 text-base sm:text-lg leading-snug group-hover:text-slate-900 transition-colors">
                {pt}
              </span>

             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
