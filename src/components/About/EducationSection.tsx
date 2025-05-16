import React from 'react';
import { Award, BookOpen } from 'lucide-react';
import { education, certifications } from '../../data/profile';

const EducationSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-8">
      <div>
        <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
          Education
        </h4>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index} className="border-l-2 border-blue-200 pl-4 pb-4">
              <h5 className="font-semibold text-gray-800">{edu.degree}</h5>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
              {edu.description && (
                <p className="text-gray-600 mt-1 text-sm">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-medium text-gray-700 mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-blue-600" />
          Certifications
        </h4>
        <div className="space-y-3">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-start">
              <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
              <div>
                <h5 className="font-medium text-gray-800">
                  {cert.link ? (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition-colors"
                    >
                      {cert.title}
                    </a>
                  ) : (
                    cert.title
                  )}
                </h5>
                <p className="text-gray-600 text-sm">{cert.issuer} | {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;