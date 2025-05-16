import { Project, UpcomingProject } from '../types';

export const projects: Project[] = [
  {
    id: 'my-ai-doctor',
    title: 'My AI Doctor',
    description: 'AI-powered healthcare solution for Doctor Pharmacy Swabi KPK Clinic, providing intelligent diagnostic assistance and treatment recommendations to healthcare professionals.',
    technologies: ['Python', 'TensorFlow', 'Natural Language Processing', 'Flask', 'React'],
    features: [
      'Symptom analysis and preliminary diagnosis',
      'Medical record integration',
      'Treatment recommendation engine',
      'Patient follow-up system'
    ],
    demoLink: 'https://mydoctor-ai.example.com',
    githubLink: 'https://github.com/Momindiyar/My_Doctor_Artifiacal_intellegenc',
    image: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'next-word-prediction',
    title: 'Next Word Prediction',
    description: 'Android keyboard enhancement using LSTM neural networks to predict the next word in a sentence, improving typing efficiency and accuracy for mobile users.',
    technologies: ['Python', 'TensorFlow', 'LSTM', 'Android Studio', 'Kotlin'],
    features: [
      'Context-aware word predictions',
      'Personalized language model adaptation',
      'Multilingual support',
      'Low-latency inference engine'
    ],
    githubLink: 'https://github.com/Momindiyar/Next_Word_Predication_On_LSTM_Project',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction',
    description: 'Machine learning-based diagnostic tool for Doctor Pharmacy clinic that identifies potential heart disease cases with high accuracy using patient health data.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'D3.js'],
    features: [
      '95% prediction accuracy on test data',
      'Interactive visualization dashboard',
      'Patient risk stratification',
      'Integration with electronic health records'
    ],
    githubLink: 'https://github.com/Momindiyar/Heat_Disease_predication',
    image: 'https://images.pexels.com/photos/8910440/pexels-photo-8910440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

export const upcomingProjects: UpcomingProject[] = [
  {
    id: 'medical-image-analysis',
    title: 'Medical Image Analysis System',
    description: 'Deep learning system for automated analysis of medical images including X-rays, MRIs, and CT scans to assist in early diagnosis of conditions.',
    status: 'in-progress',
    estimatedCompletion: 'Q3 2025'
  },
  {
    id: 'predictive-healthcare-analytics',
    title: 'Predictive Healthcare Analytics Platform',
    description: 'Healthcare analytics platform that uses machine learning to predict patient readmission risks and optimize resource allocation in hospitals.',
    status: 'planning',
    estimatedCompletion: 'Q4 2025'
  },
  {
    id: 'ai-drug-discovery',
    title: 'AI-Powered Drug Discovery Pipeline',
    description: 'Leveraging AI to accelerate the drug discovery process by predicting molecular interactions and identifying potential therapeutic compounds.',
    status: 'planning',
    estimatedCompletion: 'Q1 2026'
  },
  {
    id: 'virtual-health-assistant',
    title: 'Virtual Health Assistant',
    description: 'Conversational AI assistant for patients to monitor chronic conditions, provide medication reminders, and offer basic health advice.',
    status: 'near-completion',
    estimatedCompletion: 'Q2 2025'
  }
];