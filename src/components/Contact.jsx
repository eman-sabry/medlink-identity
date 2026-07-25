import  { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ t }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

   
    const SERVICE_ID = "service_rm3tpte";
    const TEMPLATE_ID = "template_ooznfi4";
    const PUBLIC_KEY = "UqKYLkLreg_7udX2x";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setStatus("success");
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        setStatus("error");
      },
    );
  };

  const contactCards = [
    {
      icon: <Phone className="w-5 h-5 text-med-blue" />,
      bg: "bg-blue-50 ",
      label: t.contact.phoneLabel || "الهاتف",
      value: t.contact.phone,
      href: `tel:${t.contact.phone}`,
    },
    {
      icon: <Mail className="w-5 h-5 text-med-green" />,
      bg: "bg-emerald-50",
      label: t.contact.emailLabel || "البريد الإلكتروني",
      value: t.contact.email,
      href: `mailto:${t.contact.email}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-med-cyan" />,
      bg: "bg-cyan-50",
      label: t.contact.locationLabel || "العنوان",
      value: t.contact.location,
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden  min-h-screen  flex items-center"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-med-blue/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-med-green/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-med-green/10 text-med-green text-xs font-black mb-4">
              <MessageSquare className="w-4 h-4" />
              <span>{t.contact.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              {t.contact.title}
            </h2>

            <p className="text-slate-600 font-bold text-base leading-relaxed mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-4">
              {contactCards.map((card, idx) => (
                <a
                  key={idx}
                  href={card.href}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-[#F4F8FA] border border-slate-200/80 hover:bg-white hover:border-med-blue hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm`}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-400 block mb-0.5">
                      {card.label}
                    </span>
                    <span className="font-black text-slate-800 text-sm sm:text-base dir-ltr inline-block">
                      {card.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-[#F4F8FA] p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xl relative overflow-hidden">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-med-blue focus:ring-4 focus:ring-med-blue/10 bg-white font-bold text-slate-800 text-sm transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="user_phone"
                      required
                      placeholder={t.contact.phonePlaceholder}
                      className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-med-blue focus:ring-4 focus:ring-med-blue/10 bg-white font-bold text-slate-800 text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-med-blue focus:ring-4 focus:ring-med-blue/10 bg-white font-bold text-slate-800 text-sm transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder={t.contact.msgPlaceholder}
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-med-blue focus:ring-4 focus:ring-med-blue/10 bg-white font-bold text-slate-800 text-sm resize-none transition-all"
                  ></textarea>
                </div>

                {status === "success" && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-med-green/30 text-med-green font-black text-sm flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>{t.contact.successMsg}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-600 font-black text-sm flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{t.contact.errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-medlink hover:opacity-95 text-white font-black py-4 rounded-2xl shadow-lg shadow-med-blue/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 text-base flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t.contact.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.sendBtn}</span>
                      <Send className="w-5 h-5 rtl:rotate-180" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
