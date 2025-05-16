import React, { useEffect, useRef } from 'react';
import { skills } from '../../data/profile';

const SkillsSection: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = document.querySelectorAll('.skill-progress-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                (bar as HTMLElement).style.width = `${(bar as HTMLElement).dataset.level}%`;
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // Group skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const aiSkills = skills.filter(skill => skill.category === 'ai');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const renderSkillCategory = (categorySkills: typeof skills, title: string) => (
    <div className="mb-8">
      <h4 className="text-lg font-medium text-gray-700 mb-3">{title}</h4>
      <div className="space-y-4">
        {categorySkills.map((skill) => (
          <div key={skill.name} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-gray-700">{skill.name}</span>
              <span className="text-gray-500 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="skill-progress-bar h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
                data-level={skill.level}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={skillsRef} className="bg-white rounded-lg shadow-md p-6">
      {renderSkillCategory(aiSkills, "AI & Machine Learning")}
      {renderSkillCategory(technicalSkills, "Technical")}
      {renderSkillCategory(softSkills, "Soft Skills")}
    </div>
  );
};

export default SkillsSection;