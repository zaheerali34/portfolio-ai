import React from 'react';
import { upcomingProjects } from '../../data/projects';
import UpcomingProjectTimeline from './UpcomingProjectTimeline';

const UpcomingProjects: React.FC = () => {
  return (
    <section id="upcoming" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Upcoming Projects</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring the future of AI in healthcare with these innovative initiatives
          </p>
        </div>

        <UpcomingProjectTimeline projects={upcomingProjects} />
      </div>
    </section>
  );
};

export default UpcomingProjects;