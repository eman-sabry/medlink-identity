
import { Package, Globe, BarChart2, Cpu, Sparkles } from "lucide-react";

export default function Services({ t }) {

  const serviceConfigs = [
    {
      icon: <Package className="w-6 h-6" />,
      colorClass: "text-med-blue bg-blue-50 group-hover:bg-med-blue",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      colorClass: "text-med-green bg-emerald-50 group-hover:bg-med-green",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      colorClass: "text-med-cyan bg-cyan-50 group-hover:bg-med-cyan",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      colorClass: "text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-[#F4F8FA] relative overflow-hidden min-h-screen  flex items-center"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-med-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-med-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-blue/10 text-med-blue text-xs font-black mb-3">
            <Sparkles className="w-4 h-4 text-med-green" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {t.services.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((item, idx) => {
            const config = serviceConfigs[idx % serviceConfigs.length];

            return (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:shadow-lg ${config.colorClass}`}
                  >
                    {config.icon}
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-med-blue transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-slate-600 font-bold text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
