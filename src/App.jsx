import "./App.css";
import AdoptionSection from "./sections/Adoption";
import FooterSection from "./sections/FooterSection";
import HeroSection from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <>
      <div className="w-10/12 mx-auto">
        <Navbar />
        <HeroSection />
        <AdoptionSection />
      </div>
      <FooterSection />
    </>
  );
}

export default App;
