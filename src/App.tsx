import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import BuyNow from "./components/BuyNow/BuyNow";
import Contact from "./components/Contact/Contact";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Roadmap from "./components/Roadmap/Roadmap";
import Tokenomics from "./components/Tokenomics/Tokenomics";
import Preloader from "./components/Preloader/Preloader";

export default function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Preloader />
      <Header />
      <main className="pt-[75px]">
        <Banner />
        <div className="bg-black mt-10">
          <BuyNow />
          <About />
          <Tokenomics />
          <Roadmap />
          <HowItWorks />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
