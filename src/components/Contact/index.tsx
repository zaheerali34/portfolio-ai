import React, { useState } from 'react';
import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks, profileInfo } from '../../data/profile';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHub className="h-5 w-5" />;
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'twitter':
        return <Twitter className="h-5 w-5" />;
      case 'mail':
        return <Mail className="h-5 w-5" />;
      default:
        return <div className="h-5 w-5" />;
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interested in collaborating or have questions about my work? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <p className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <span className="font-medium text-gray-700 block">Location</span>
                  <span className="text-gray-600">{profileInfo.location}</span>
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <span className="font-medium text-gray-700 block">Email</span>
                  <a href={`mailto:${profileInfo.email}`} className="text-blue-600 hover:underline">
                    {profileInfo.email}
                  </a>
                </span>
              </p>
              <p className="flex items-start">
                <span className="text-blue-600 mr-3">•</span>
                <span>
                  <span className="font-medium text-gray-700 block">Phone</span>
                  <span className="text-gray-600">{profileInfo.phone}</span>
                </span>
              </p>
            </div>

            <h4 className="text-lg font-medium text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;