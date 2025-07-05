'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "QA Portfolio Website",
    description: "Fully responsive animated portfolio built using Next.js, TailwindCSS, and Framer Motion.",
    stack: "Next.js • TailwindCSS • Framer Motion",
    link: "https://mentor08.github.io/Ekundayo-mayowa-QA-portfolio/"
  },
  {
    title: "Cypress Automation Suite",
    description: "Reusable automation test scripts covering login, payment, and dashboard components for a fintech platform.",
    stack: "Cypress • Mocha • JavaScript",
    link: "https://github.com/Mentor08/automationTestExerciseCypress"
  },
  {
    title: "Postman API Test Collection",
    description: "Collection of REST API test cases for user registration, login, and transaction validation with dynamic environments.",
    stack: "Postman • Newman • JSON",
    link: "https://github.com/Mentor08/Mentor08-Reqres.in_APITestingUsingPostMan"
  },
  {
    title: "JMeter Load Testing Suite",
    description: "Simulates concurrent users for payment and login endpoints, providing CSV export for performance analysis.",
    stack: "Apache JMeter • Java • CSV Analysis",
    link: "https://github.com/Mentor08/UI_Automation_Framework_With_Selenium_Java"
  },
  {
    title: "Banking App Test Plan & Test Cases",
    description: "Comprehensive test scenarios and expected results for mobile banking app UAT phase.",
    stack: "Manual Testing • Excel • Jira",
    link: "https://github.com/Mentor08/automationTestExerciseSelenium"
  },
  {
    title: "CI/CD Integration with Jenkins",
    description: "Integrated Cypress test runner into Jenkins pipeline for daily test automation with email report delivery.",
    stack: "Jenkins • Git • Cypress",
    link: "https://github.com/Mentor08/automationexercise"
  }
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen px-4 py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
        My Work & Contributions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-gray-800 rounded-xl p-6 overflow-hidden shadow-lg group hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            {/* Background overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-10 transition duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
            />

            {/* Title */}
            <h3 className="text-xl font-semibold text-white z-10 relative mb-2 group-hover:text-pink-400 transition">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-300 z-10 relative mb-4">{project.description}</p>

            {/* Stack */}
            <div className="text-xs font-mono text-blue-300 z-10 relative">
              {project.stack}
            </div>

            {/* Arrow link (optional) */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition text-pink-400 text-sm">
              View →
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
