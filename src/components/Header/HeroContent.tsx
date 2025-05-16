import React, { useEffect, useRef } from 'react';
import { profileInfo } from '../../data/profile';

const HeroContent: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const animateText = (element: HTMLElement | null, delay: number) => {
      if (!element) return;
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    };
    
    animateText(titleRef.current, 300);
    animateText(taglineRef.current, 600);
  }, []);

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <div className="mb-8 relative inline-block">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Momi AI Engineer" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <h1 
        ref={titleRef}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 transform translate-y-8 transition-all duration-700"
      >
        {profileInfo.name} <span className="text-purple-200">{profileInfo.title}</span>
      </h1>
      
      <p 
        ref={taglineRef}
        className="text-xl md:text-2xl text-white opacity-0 transform translate-y-8 transition-all duration-700 max-w-2xl mx-auto"
      >
        {profileInfo.tagline}
      </p>
      
      <div className="mt-12 flex justify-center gap-4">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300"
        >
          Get in Touch
        </a>
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default HeroContent;