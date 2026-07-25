
import { BookOpen, Eye, Target, Sparkles } from "lucide-react";


export default function AboutUs({ t }) {

  const cards = [
    {
      title: t.about.storyTitle,
      desc: t.about.storyDesc,
      icon: <BookOpen className="w-7 h-7 text-med-blue" />,
      accentColor: "from-med-blue/10 to-transparent",
      borderColor: "group-hover:border-med-blue/50",
    },
    {
      title: t.about.visionTitle,
      desc: t.about.visionDesc,
      icon: <Eye className="w-7 h-7 text-med-green" />,
      accentColor: "from-med-green/10 to-transparent",
      borderColor: "group-hover:border-med-green/50",
    },
    {
      title: t.about.missionTitle,
      desc: t.about.missionDesc,
      icon: <Target className="w-7 h-7 text-med-cyan" />,
      accentColor: "from-med-cyan/10 to-transparent",
      borderColor: "group-hover:border-med-cyan/50",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden min-h-screen  flex items-center"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-med-blue/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-green/10 text-med-green text-xs font-black mb-3">
            <Sparkles className="w-4 h-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {t.about.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#F4F8FA] p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden ${card.borderColor}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              ></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-med-blue transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
