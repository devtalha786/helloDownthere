import Header from "./Header";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FAQSection from "./FaqSection";
import Footer from "../../components/Footer/Footer";
 const Home = () => {
  return (
    <div>
      <div className="alienn-img">
        <Header />
        <HeroSection />
      </div>
      <div className="landing">
        <AboutSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
