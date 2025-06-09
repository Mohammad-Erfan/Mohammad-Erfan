import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import SkillsShowcase from './components/SkillsShowcase';
import PortfolioGallery from './components/PortfolioGallery';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle'; // Import GlobalStyle

function App() {
  return (
    <>
      <GlobalStyle /> {/* Apply GlobalStyle */}
      <Navbar />
      <HeroSection />
      <AboutMe />
      <SkillsShowcase />
      <PortfolioGallery />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
