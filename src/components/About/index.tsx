import React from "react";
import { DownloadCloud } from "lucide-react";
import { profileInfo } from "../../data/profile";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceTimeline from "./ExperienceTimeline";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {profileInfo.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Professional Experience
            </h3>
            <ExperienceTimeline />
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Skills
              </h3>
              <SkillsSection />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Education & Certifications
              </h3>
              <EducationSection />
            </div>

            <div className="text-center pt-4">
              <a
                href={profileInfo.cvLink}
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadCloud className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
