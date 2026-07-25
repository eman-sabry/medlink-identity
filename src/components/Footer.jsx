
function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.38a6.32 6.32 0 0 0-.85-.06A6.34 6.34 0 0 0 3.15 15.6a6.34 6.34 0 0 0 10.83 4.5 6.28 6.28 0 0 0 1.83-4.5V8.58a8.28 8.28 0 0 0 4.82 1.56V6.69z" />
    </svg>
  );
}
function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function Footer({ t }) {
  const whatsappNumber = "01556217082";
  const emailAddress = "medlinkidentity@gmail.com";

  const socialLinks = {
    instagram:
      "https://www.instagram.com/medlinkidentity?igsh=MTd5Zm10MmFkaXNkdg%3D%3D&utm_source=qr",
    tiktok: "https://www.tiktok.com/@medlinkidentity?_r=1&_t=ZS-98DBXgczQmL",
    linkedin: "https://www.linkedin.com/in/medlink-identity-991a9a423/",
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-r from-med-blue/10 via-med-cyan/10 to-med-green/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="MedLink Identity Logo"
                className="h-20 w-auto object-contain bg-white/5 p-1.5 rounded-xl border border-white/10"
              />
              <span className="font-extrabold text-xl text-white tracking-wide">
                MedLink <span className="text-med-cyan">Identity</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t?.footer?.tagline ||
                "المنصة السحابية المتقدمة لإدارة المنظومات الطبية والعيادات الذكية."}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col sm:flex-row sm:justify-end gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                {t?.footer?.quickContact}
              </h4>
              <div className="flex flex-col gap-2.5 text-xs font-bold">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-slate-300 hover:text-med-green transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <span>WhatsApp Chat</span>
                </a>

                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-2.5 text-slate-300 hover:text-med-blue transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <span>{emailAddress}</span>
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-black text-white uppercase tracking-wider">
                {t?.footer?.followUs || "تابعنا على وسائل التواصل الاجتماعي"}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-med-blue hover:text-white hover:border-med-blue transition-all duration-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center hover:bg-slate-100 hover:text-slate-950 hover:border-white transition-all duration-300"
                >
                  <TikTokIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold text-slate-500">
          <div>
            © {new Date().getFullYear()} MedLink Identity.{" "}
            {t?.footer?.rights || "جميع الحقوق محفوظة."}
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-med-green"></span>
            <span className="text-slate-400">MedLink Systems Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
