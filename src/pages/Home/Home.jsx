import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
const Home = () => {
  return (
    <div>
      <div className="alienn-img">
        <Header />
        <HeroSection />
      </div>
      <AboutSection />
      <FAQSection />
    </div>
  );
};

export default Home;
