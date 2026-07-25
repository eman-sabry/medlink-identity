
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Features from "../components/Features";

import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home({ t }) {
  return (
    <main>
      <Hero t={t} />
      <AboutUs t={t} />
      <Services t={t} />

      <Features t={t} />

      <Pricing t={t} />
      <FAQ t={t} />
      <WhyChooseUs t={t} />

      <Contact t={t} />
    </main>
  );
}
