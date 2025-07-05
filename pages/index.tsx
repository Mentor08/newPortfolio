
import Head from 'next/head'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mayowa David Ekundayo | QA Portfolio</title>
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
         <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white">

        {/* 🎨 Animated Background Blobs */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-500 rounded-full opacity-30 blur-2xl z-0"
          animate={{ x: [0, 100, -100, 0], y: [0, 80, -80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl z-0"
          animate={{ x: [0, -120, 120, 0], y: [0, -100, 100, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[30%] right-[20%] w-60 h-60 bg-purple-600 rounded-full opacity-25 blur-2xl z-0"
          animate={{ x: [0, 40, -40, 0], y: [0, -60, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* 👤 Foreground Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-400">
            Hi, I’m Mayowa David Ekundayo
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-6">
            QA Engineer | Automation Specialist | API Tester
          </p>

          <div className="flex justify-center gap-6 text-3xl mb-6">
            <a href="https://github.com/mentor08" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/mayowa-ekundayo-david" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><FaLinkedin /></a>
            <a href="https://web.whatsapp.com/send/?phone=2348107029351" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition"><FaWhatsapp /></a>
          </div>

          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Let’s Work Together
          </a>
        </motion.div>
      </section>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
