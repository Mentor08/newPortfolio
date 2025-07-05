'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

const skills = [
  {
    title: 'Cypress',
    description: 'Automated UI testing for modern web apps. Great for E2E and regression testing.',
  },
  {
    title: 'Postman',
    description: 'API testing with dynamic collections and environments. Used for validating RESTful services.',
  },
  {
    title: 'Selenium',
    description: 'Cross-browser automation for legacy and modern apps. Integrated into CI/CD pipelines.',
  },
  {
    title: 'JMeter',
    description: 'Performance and load testing tool. Simulates thousands of users for backend services.',
  },
  {
    title: 'Git & CI/CD',
    description: 'Version control with Git and seamless deployment pipelines using Jenkins and GitHub Actions.',
  },
  {
    title: 'SQL',
    description: 'Backend data validation and reporting through structured queries in relational databases.',
  },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-12 bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
        Technical Arsenal
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((skill, idx) => (
          <SkillCard key={idx} title={skill.title} description={skill.description} />
        ))}
      </div>
    </motion.section>
  );
}

function SkillCard({ title, description }: { title: string; description: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      className="w-full h-48 perspective"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-full transform-style-preserve-3d"
      >

        {flipped ? (
          // Front
          <div className="absolute w-full h-full bg-pink-500 text-white rounded-xl flex items-center justify-center px-4 text-center shadow-lg backface-hidden transform rotateY-180">
            <p className="text-xl transform -scale-x-100">{description}</p>
          </div>
        ) : (
          // Back
          <div className="absolute w-full h-full bg-white text-black rounded-xl flex items-center justify-center shadow-lg backface-hidden">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        )}
        

        
      </motion.div>
    </motion.div>
  );
}