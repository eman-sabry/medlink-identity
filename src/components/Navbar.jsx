import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar({ t, lang, toggleLanguage }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navLinks = [
    { to: "about", label: t.nav.about },
    { to: "services", label: t.nav.services },
    { to: "features", label: t.nav.features },
    { to: "pricing", label: t.nav.pricing },
    { to: "faq", label: t.nav.faq },
    { to: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
       
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer"
        >
          <img
            src="/logo.svg"
            alt="MedLink Identity Logo"
            className="w-20 h-20 rounded-lg group-hover:scale-110 transition-transform"
          />
        </Link>

       
        <div className="hidden lg:flex items-center gap-8 text-base font-extrabold text-slate-700">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-med-blue font-black"
              className="hover:text-med-blue transition cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>

       
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm font-extrabold px-4 py-2.5 rounded-xl border-2 border-slate-200 hover:border-med-blue hover:text-med-blue transition cursor-pointer"
          >
            <Globe className="w-4 h-4 text-med-green" />
            {lang === "ar" ? "English" : "عربي"}
          </button>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-gradient-medlink hover:opacity-95 text-white text-sm font-black px-6 py-3 rounded-xl shadow-md shadow-med-blue/20 hover:shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            {t.nav.demoBtn}
          </Link>
        </div>

       
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleLanguage}
            className="text-xs font-black px-3 py-2 rounded-lg border border-slate-200"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="p-2 text-slate-800"
          >
            {mobileMenu ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      
      {mobileMenu && (
        <div className="lg:hidden bg-white border-b border-slate-100 px-6 py-6 flex flex-col gap-4 font-extrabold text-slate-800">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setMobileMenu(false)}
              className="hover:text-med-blue transition cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
