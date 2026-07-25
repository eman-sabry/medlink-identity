
import {
  CalendarCheck,
  FileSpreadsheet,
  FileText,
  Boxes,
  BadgeDollarSign,
  UserCheck,
  History,
  CloudUpload,
  Lock,
  Building2,
  TrendingUp,
  Cpu,
} from "lucide-react";

export default function Features({ t }) {

  const featureIcons = [
    {
      icon: CalendarCheck,
      color: "text-med-blue",
      bg: "bg-blue-50 group-hover:bg-med-blue group-hover:text-white",
    },
    {
      icon: FileSpreadsheet,
      color: "text-med-green",
      bg: "bg-emerald-50 group-hover:bg-med-green group-hover:text-white",
    },
    {
      icon: FileText,
      color: "text-med-cyan",
      bg: "bg-cyan-50 group-hover:bg-med-cyan group-hover:text-white",
    },
    {
      icon: Boxes,
      color: "text-med-blue",
      bg: "bg-blue-50 group-hover:bg-med-blue group-hover:text-white",
    },
    {
      icon: BadgeDollarSign,
      color: "text-med-green",
      bg: "bg-emerald-50 group-hover:bg-med-green group-hover:text-white",
    },
    {
      icon: UserCheck,
      color: "text-med-cyan",
      bg: "bg-cyan-50 group-hover:bg-med-cyan group-hover:text-white",
    },
    {
      icon: History,
      color: "text-med-blue",
      bg: "bg-blue-50 group-hover:bg-med-blue group-hover:text-white",
    },
    {
      icon: CloudUpload,
      color: "text-med-green",
      bg: "bg-emerald-50 group-hover:bg-med-green group-hover:text-white",
    },
    {
      icon: Lock,
      color: "text-med-cyan",
      bg: "bg-cyan-50 group-hover:bg-med-cyan group-hover:text-white",
    },
    {
      icon: Building2,
      color: "text-med-blue",
      bg: "bg-blue-50 group-hover:bg-med-blue group-hover:text-white",
    },
    {
      icon: TrendingUp,
      color: "text-med-green",
      bg: "bg-emerald-50 group-hover:bg-med-green group-hover:text-white",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-[#F4F8FA] relative overflow-hidden  min-h-screen  flex items-center"
    >
   
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-med-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-cyan/10 text-med-cyan text-xs font-black mb-3">
            <Cpu className="w-4 h-4" />
            <span>{t.features.badge || "إمكانيات النظام"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {t.features.title}
          </h2>
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.features.list.map((feat, idx) => {
            const itemConfig = featureIcons[idx] || {
              icon: CalendarCheck,
              color: "text-med-blue",
              bg: "bg-blue-50 group-hover:bg-med-blue group-hover:text-white",
            };
            const IconComponent = itemConfig.icon;

            return (
              <div
                key={idx}
                className="group relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-center gap-4 cursor-default overflow-hidden"
              >
             
                <div
                  className={`w-12 h-12 rounded-xl ${itemConfig.bg} ${itemConfig.color} flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm group-hover:scale-110`}
                >
                  <IconComponent className="w-6 h-6 transition-colors" />
                </div>

               
                <span className="text-sm sm:text-base font-extrabold text-slate-800 leading-snug group-hover:text-slate-900 transition-colors">
                  {feat}
                </span>

               
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-medlink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
