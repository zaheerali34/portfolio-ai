import React from "react";
import { socialLinks } from "../../data/profile";
import { Github as GitHub, Linkedin, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GitHub className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "mail":
        return <Mail className="h-5 w-5" />;
      default:
        return <div className="h-5 w-5" />;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold flex items-center">
              Momi
              <span className="text-blue-400">
                <img src="/logo.png" alt="logo" className="w-12" />
              </span>
            </h2>
            <p className="text-gray-400 mt-2">
              Transforming healthcare with innovative AI solutions
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {getIconComponent(link.icon)}
              </a>
            ))}
          
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Momi AI Engineer. All rights
            reserved.
          </p>

          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center"
            >
              Back to top
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
