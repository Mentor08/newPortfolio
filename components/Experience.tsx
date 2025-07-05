'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    company: "Interswitch Group",
    role: "QA Engineer",
    duration: "Sep 2024 - Present",
    summary: "Led quality automation efforts on payment systems using Cypress, Postman, and JMeter.",
    details: `
- Developed automated tests integrated with Jenkins for CI/CD.
- Collaborated with cross-functional teams to align test strategy.
- Conducted performance and API testing for scalable fintech systems.
- Participated in agile sprints and retrospectives to improve test efficiency.
    `,
  },
  {
    company: "Sterling Bank (QaceTech)",
    role: "QA Analyst",
    duration: "May 2024 - Aug 2024",
    summary: "Delivered comprehensive test coverage for core banking and web applications.",
    details: `
- Validated payment workflows and customer journeys on SEABAAS.
- Built Postman test suites and ensured API contract reliability.
- Performed cross-browser and mobile testing with real devices.
- Collaborated with product owners on UAT success criteria.
    `,
  },
  {
    company: "SilverEdge Projects Ltd.",
    role: "QA Engineer",
    duration: "Feb 2022 - Apr 2024",
    summary: "Automated web and mobile testing pipelines using Selenium and Appium.",
    details: `
- Built Java-based Selenium test frameworks for web apps.
- Led regression test strategy and optimized release confidence.
- Integrated automation into CI/CD pipelines with Git and Jenkins.
- Mentored junior QA engineers and streamlined onboarding.
    `,
  },
  {
    company: "PlansDeck",
    role: "QA Engineer",
    duration: "Mar 2020 - Nov 2021",
    summary: "Enhanced product quality through manual and automated testing.",
    details: `
      - Led exploratory testing and sprint-aligned test planning in a fast-paced product environment. 
      - Delivered detailed test cases and reporting, helping teams rapidly iterate while maintaining 
      - functional integrity and user experience across the platform.
    `,
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
        Professional Experience
      </h2>

      <div className="w-full max-w-4xl space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 bg-opacity-60 rounded-xl shadow-lg p-6"
          >
            <div
              onClick={() => toggle(idx)}
              className="cursor-pointer flex items-center justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-pink-400">{exp.company} • {exp.duration}</p>
                <p className="text-gray-300 mt-2">{exp.summary}</p>
              </div>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                className="text-xl font-bold transition"
              >
                ▾
              </motion.span>
            </div>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4 text-gray-400 whitespace-pre-line"
                >
                  {exp.details}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
