import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Pricing from "./components/Pricing";
import CtaBand from "./components/CtaBand";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <Process />
        <CtaBand />
        <Testimonials />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
