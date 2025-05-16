import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Upcoming', href: '#upcoming' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <a 
          href="#home" 
          className={`flex items-center text-xl md:text-2xl font-bold ${scrolled ? 'text-[#009eff]' : 'text-white'}`}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Momin<span className="">
            <img src="/logo.png" alt="logo" className="w-12" />
          </span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href);
            }}
            className={`font-medium transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-purple-200'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
        ) : (
          <Menu className={`h-6 w-6 ${scrolled ? 'text-gray-800' : 'text-white'}`} />
        )}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;