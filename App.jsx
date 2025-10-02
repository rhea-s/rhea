
import React from 'react';
import Header from './components/Header.jsx';
import Section from './components/Section.jsx';
import SkillBadge from './components/SkillBadge.jsx';
import ExperienceItem from './components/ExperienceItem.jsx';
import EducationItem from './components/EducationItem.jsx';
import ActivityItem from './components/ActivityItem.jsx';
import { PROFILE_IMAGE_PATH } from './constants.js';

const resumeData = {
  name: 'Rhea Singh',
  title: 'SEEKING FULFILLING + IMPACTFUL SOFTWARE ENGINEERING ROLES',
  profileImage: PROFILE_IMAGE_PATH,
  contact: {
    email: 'singh.rhea.04@gmail.com',
    linkedin: '/in/rheas',
  },
  education: {
    institution: 'University of Michigan, College of Engineering',
    degree: 'B.S. IN COMPUTER SCIENCE, HISTORY MINOR',
    location: 'Ann Arbor, MI',
    years: '2016 - 2020',
    coursework: [
      'Data Structures & Algorithms', 'Computer Security', 'Discrete Math',
      'Computer Architecture', 'Linear Algebra', 'Probability & Statistics',
      'Differential Equations', 'Microprocessors', 'Web Systems',
      'Operating Systems', 'UI Development'
    ],
  },
  skills: {
    'Back-End': ['C/C++', 'Python', 'SQL', 'REST APIs', 'Objective-C'],
    'Front-End': ['HTML5', 'CSS', 'JavaScript', 'React', 'Swift'],
  },
  experience: [
    {
      role: 'SOFTWARE ENGINEER',
      company: 'Apple',
      location: 'Cupertino, CA',
      dates: 'Aug 2020 - present',
      points: [
        'Designed and implemented unique system architecture to enable new features and improve Health algorithms.',
        'Collaborated with research scientists and cross-functional teams to successfully run clinical validation studies for FDA-regulated iOS and watchOS features.',
        'Developed user study apps to measure performance of various proposed Health and Fitness features.',
        'Helped plan and execute multi-year feature tentpole, continuously evaluating progress and feasibility, meeting strict deadlines to fulfill executive-level vision, with the primary objective of creating useful and necessary advancements in wearable health technology.',
      ],
      projects: [
        {
          name: 'Cycle Tracking Advancements',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
          link: 'https://www.apple.com/healthcare/health-app/'
        },
        {
          name: 'watchOS Fitness+ Integration',
          image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
          link: 'https://www.apple.com/apple-fitness-plus/'
        },
        {
          name: 'Medication Reminders',
          image: 'https://images.unsplash.com/photo-1584515933487-779824d279f9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600',
          link: 'https://www.apple.com/newsroom/2022/06/apple-unveils-new-ways-to-share-and-communicate-in-ios-16/'
        }
      ],
    },
    {
      role: 'TECH INTERN',
      company: 'Capital One',
      location: 'Chicago, IL',
      dates: 'June - August 2019',
      points: [
        'Improved user experience for new partnership application based on feedback from previous rollouts.',
        'Developed metrics for team efficiency in the development process.',
        "Designed a beautiful, easy-to-understand data visualization tool of team's Github pull request process.",
      ],
    },
    {
      role: 'UNDERGRADUATE RESEARCHER',
      company: 'The Bringing together Language and Behavior for Large-scale Analytical Breakthroughs Laboratory (Blablablab), University of Michigan',
      location: 'Ann Arbor, MI',
      dates: '2018 - 2020',
      points: [
        'Scraped Wikipedia for all people with pages and identified gender of each page based on names and pronouns.',
        'Applied Natural Language Processing techniques on each page to derive statistically significant differences in the language used dependent on gender of the subject being written about.',
        'Thought critically in collaboration with professor about data and potential biases and faults with research.',
      ],
    },
  ],
  extracurricular: [
    {
      role: 'PARTICIPANT',
      organization: 'International Collegiate Programming Contest (ICPC)',
      location: 'Ann Arbor, MI',
      dates: 'Sept 2018 - present',
      points: [
        'Qualified for ICPC State Level with team of three',
        'Worked with team members to program solutions for challenging programming questions and placed in top five',
        'Communicated about and worked on code at high-level with team',
      ],
    },
    {
      role: 'PEER MENTOR',
      organization: 'Michigan Research Community',
      location: 'Ann Arbor, MI',
      dates: 'Sept 2016 - May 2018',
      points: [
        'Guided group of first time undergraduate research students in navigating project search, a new school, and their research path',
        'Provided support, monthly meetings, and guidance with research posters',
      ],
    },
  ],
};

const App = () => {
  return (
    <div className="max-w-5xl mx-auto my-8 md:my-16">
        <div className="bg-white rounded-2xl shadow-2xl shadow-gray-300/40 overflow-hidden">
            <Header
                name={resumeData.name}
                title={resumeData.title}
                contact={resumeData.contact}
                profileImage={resumeData.profileImage}
            />
            <main className="p-8 md:p-12">
                <Section title="Skills">
                    <div className="flex flex-wrap">
                        {resumeData.skills['Back-End'].map((skill) => <SkillBadge key={skill} skill={skill} category="Back-End" />)}
                        {resumeData.skills['Front-End'].map((skill) => <SkillBadge key={skill} skill={skill} category="Front-End" />)}
                    </div>
                </Section>
                <Section title="Experience">
                    {resumeData.experience.map((job, index) => <ExperienceItem key={index} {...job} isLast={index === resumeData.experience.length - 1} />)}
                </Section>
                 <Section title="Education">
                    <EducationItem {...resumeData.education} />
                </Section>
                <Section title="Extracurricular Activity">
                     {resumeData.extracurricular.map((activity, index) => <ActivityItem key={index} {...activity} isLast={index === resumeData.extracurricular.length - 1} />)}
                </Section>
            </main>
        </div>
    </div>
  );
};

export default App;
