import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navigation from './Navigation';
import HeroContent from './HeroContent';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen flex flex-col">
      <div 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <Navigation scrolled={scrolled} />
        </div>
      </div>

      <div 
        className="flex-1 flex items-center justify-center relative"
        style={{
          background: "linear-gradient(135deg, #cee9fd 0%, #009eff 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
        }}
      >
        <HeroContent />
      </div>

      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-3 shadow-lg animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 text-blue-600" />
      </button>
    </header>
  );
};

export default Header;