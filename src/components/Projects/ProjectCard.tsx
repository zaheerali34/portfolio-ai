import React, { useState } from 'react';
import { Github as GitHub, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl bg-white h-full flex flex-col transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-gray-700 mb-4 flex-1">
          {expanded 
            ? project.description 
            : project.description.length > 120 
              ? `${project.description.substring(0, 120)}...` 
              : project.description
          }
        </p>

        {project.description.length > 120 && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-blue-600 hover:text-blue-800 flex items-center text-sm mb-4"
          >
            {expanded ? 'Show less' : 'Read more'} 
            {expanded ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </button>
        )}

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
          <ul className="space-y-1 text-sm">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex space-x-3 mt-auto">
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors duration-300 text-sm"
          >
            <GitHub className="h-4 w-4 mr-2" />
            GitHub
          </a>
          {project.demoLink && (
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;