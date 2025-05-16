import { Skill, Education, Certification, Experience, SocialLink } from '../types';

export const skills: Skill[] = [
  { name: 'Python', level: 95, category: 'technical' },
  { name: 'TensorFlow', level: 90, category: 'ai' },
  { name: 'Machine Learning', level: 92, category: 'ai' },
  { name: 'Natural Language Processing', level: 88, category: 'ai' },
  { name: 'Computer Vision', level: 85, category: 'ai' },
  { name: 'React', level: 80, category: 'technical' },
  { name: 'Flask', level: 82, category: 'technical' },
  { name: 'SQL', level: 78, category: 'technical' },
  { name: 'Project Management', level: 85, category: 'soft' },
  { name: 'Research & Development', level: 90, category: 'soft' },
];

export const education: Education[] = [
  {
    degree: 'MSc in Computer Science',
    institution: 'National University',
    year: '2018',
    description: 'Focus on deep learning and neural networks.'
  },
  {
    degree: 'BSc in Computer Science',
    institution: 'Regional Institute of Technology',
    year: '2016'
  }
];

export const certifications: Certification[] = [
  {
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    year: '2023',
    link: 'https://www.tensorflow.org/certificate'
  },
  {
    title: 'AWS Machine Learning Specialty',
    issuer: 'Amazon Web Services',
    year: '2022',
    link: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/'
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    year: '2021',
    link: 'https://www.deeplearning.ai/deep-learning-specialization/'
  }
];

export const experience: Experience[] = [
  {
    title: 'Lead AI Engineer',
    company: 'HealthTech Innovations',
    period: '2024 - Present',
    description: [
      'Lead a team of 5 engineers developing AI solutions for healthcare providers',
      'Designed and implemented ML models with 95% diagnostic accuracy',
      'Reduced diagnostic time by 40% through automated image analysis',
      'Collaborated with medical professionals to ensure clinical relevance'
    ]
  },
  {
    title: 'AI Research Scientist',
    company: 'MedAI Research Lab',
    period: '2023 - 2025',
    description: [
      'Conducted research on novel ML approaches for medical diagnostics',
      'Published 5 papers in top-tier AI and healthcare journals',
      'Developed prototype systems for early disease detection',
      'Mentored junior researchers and graduate students'
    ]
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Tech Solutions Inc.',
    period: '2024 - 2025',
    description: [
      'Built and deployed production ML systems for various clients',
      'Implemented NLP solutions for automated customer service',
      'Optimized ML models for edge device deployment',
      'Collaborated with cross-functional teams to integrate AI solutions'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Momindiyar',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/momiaidev',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/momiaidev',
    icon: 'twitter'
  },
  {
    name: 'Email',
    url: 'momindiyar55@gmail.com',
    icon: 'mail'
  }
];

export const profileInfo = {
  name: 'Momin',
  title: 'AI Engineer',
  tagline: 'Transforming healthcare with innovative AI solutions',
  bio: 'Specialized in developing cutting-edge AI solutions for healthcare, combining expertise in machine learning, data science, and medical informatics to create systems that improve patient outcomes and clinical efficiency.',
  location: 'Swabi, KPK, Pakistan',
  email: 'momindiyar55@gmail.com',
  phone: '+92 300 1234567',
  cvLink: '/cv.pdf'
};