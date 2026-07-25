import  { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-[#F4F8FA] relative  min-h-screen ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-blue/10 text-med-blue text-xs font-black mb-3">
            <HelpCircle className="w-4 h-4 text-med-green" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {t.faq.title}
          </h2>
        </div>

       
        <div className="space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-med-green shadow-xl shadow-med-green/10 -translate-y-1"
                    : "bg-white border-slate-200/80 hover:border-med-blue/40 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-start font-black text-slate-800 flex justify-between items-center gap-4 cursor-pointer select-none"
                >
                  <span
                    className={`text-base sm:text-lg transition-colors ${isOpen ? "text-med-blue" : "text-slate-800"}`}
                  >
                    {item.q}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-med-green text-white rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

             
                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base font-bold text-slate-600 leading-relaxed border-t border-slate-100 pt-4 bg-emerald-50/20">
                    <p className="border-r-4 border-med-green pr-4">{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
