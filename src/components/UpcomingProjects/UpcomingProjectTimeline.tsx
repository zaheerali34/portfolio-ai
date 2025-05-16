import React, { useEffect, useRef } from 'react';
import { Clock, CheckCircle2, CircleDot } from 'lucide-react';
import { UpcomingProject } from '../../types';

interface UpcomingProjectTimelineProps {
  projects: UpcomingProject[];
}

const UpcomingProjectTimeline: React.FC<UpcomingProjectTimelineProps> = ({ projects }) => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = document.querySelectorAll('.upcoming-item');
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

  const getStatusIcon = (status: UpcomingProject['status']) => {
    switch (status) {
      case 'planning':
        return <Clock className="h-full w-full p-2 text-blue-600" />;
      case 'in-progress':
        return <CircleDot className="h-full w-full p-2 text-yellow-500" />;
      case 'near-completion':
        return <CheckCircle2 className="h-full w-full p-2 text-green-500" />;
      default:
        return <Clock className="h-full w-full p-2 text-blue-600" />;
    }
  };

  const getStatusClass = (status: UpcomingProject['status']) => {
    switch (status) {
      case 'planning':
        return 'border-blue-600 bg-blue-50';
      case 'in-progress':
        return 'border-yellow-500 bg-yellow-50';
      case 'near-completion':
        return 'border-green-500 bg-green-50';
      default:
        return 'border-blue-600 bg-blue-50';
    }
  };

  const getStatusLabel = (status: UpcomingProject['status']) => {
    switch (status) {
      case 'planning':
        return 'Planning';
      case 'in-progress':
        return 'In Progress';
      case 'near-completion':
        return 'Near Completion';
      default:
        return 'Planning';
    }
  };

  return (
    <div ref={timelineRef} className="max-w-4xl mx-auto">
      <div className="relative space-y-8">
        {/* Timeline Line */}
        <div className="absolute left-8 -ml-px h-full w-0.5 bg-gray-200"></div>

        {projects.map((project, index) => (
          <div 
            key={project.id}
            className={`upcoming-item relative flex items-start opacity-0 transition-all duration-500 ease-out`}
            style={{transform: 'translateY(20px)'}}
          >
            {/* Timeline node */}
            <div className={`absolute left-8 -ml-6 mt-3 h-12 w-12 rounded-full border-4 ${getStatusClass(project.status)} bg-white flex items-center justify-center shadow-md z-10`}>
              {getStatusIcon(project.status)}
            </div>

            <div className="min-w-0 flex-1 pt-1.5 pl-14">
              <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${getStatusClass(project.status)}`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <div className="flex items-center mt-1">
                      <span className={`text-sm px-2 py-1 rounded-full ${getStatusClass(project.status)}`}>
                        {getStatusLabel(project.status)}
                      </span>
                      <span className="ml-3 text-gray-500 text-sm">{project.estimatedCompletion}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
        >
          Interested in collaboration? Contact me
        </a>
      </div>
    </div>
  );
};

export default UpcomingProjectTimeline;