import  { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { content } from "./data/content";

export default function App() {
  const [lang, setLang] = useState("ar");
  const t = content[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  return (
    <div
      dir={t.dir}
      className="bg-[#F8FAFC] text-slate-800 font-inter min-h-screen selection:bg-primary selection:text-white"
    >
      <Navbar t={t} lang={lang} toggleLanguage={toggleLanguage} />
      <Home t={t} />
      <Footer t={t} />
    </div>
  );
}