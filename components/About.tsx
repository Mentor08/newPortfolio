'use client';
import { motion } from 'framer-motion';

const text = "I’m Mayowa David Ekundayo, a passionate Quality Assurance Engineer.".split(" ");

const trailVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 py-16 sm:py-12 bg-gradient-to-tr from-indigo-900 via-purple-900 to-black text-white"
    >
      {/* ✨ Trailing Animated Intro */}
      <div className="text-4xl font-extrabold flex flex-wrap justify-center text-center mb-8">
        {text.map((word, index) => (
          <motion.span
            key={index}
            variants={trailVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: index * 0.08,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            className="inline-block mx-1 bg-clip-text text-white"
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* 🧠 Body Text */}
      <div className="max-w-3xl text-center text-lg text-gray-300 leading-loose">
        <p>
          With over <span className="text-blue-400 font-medium">5 years</span> in Quality Assurance, I specialize in breaking software before your users ever do.
          I’ve contributed to <span className="text-pink-400 font-semibold">banking, AI, real estate, e-commerce, fintech, and enterprise platforms</span> across web, mobile, and API layers.
        </p>

        <p className="mt-6">
          I build automated test frameworks, execute high-pressure regression plans, validate critical business logic,
          and align test coverage with real-world risks. My toolkit includes <span className="text-blue-300 font-medium">Cypress, Selenium, Postman, JMeter</span>, and more.
        </p>

        <p className="mt-6 italic text-gray-400">
          My mission? To turn assumptions into assurance - with every click, tap, and call.
        </p>
      </div>
    </section>
  );
}
