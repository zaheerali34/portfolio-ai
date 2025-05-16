import React, { useEffect, useRef } from 'react';
import { experience } from '../../data/profile';

const ExperienceTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-100"></div>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <div 
            key={index} 
            className="timeline-item relative pl-12 opacity-0 transition-all duration-500 ease-out"
            style={{transform: 'translateY(20px)'}}
          >
            {/* Timeline node */}
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md z-10">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                  <p className="text-blue-600">{exp.company}</p>
                </div>
                <span className="text-gray-500 text-sm md:text-right mt-2 md:mt-0 bg-blue-50 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;