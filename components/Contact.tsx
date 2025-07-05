import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const whatsappLink = `https://wa.me/2348107029351`;
  const mailTo = `mailto:Ekundayomayowa83@gmail.com`;

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-4 text-center">Let’s Connect</h2>
      <p className="text-gray-300 mb-6 text-center max-w-xl">
        Got an idea, opportunity, or feedback? Reach out via this form or connect with me through any of the platforms below.
      </p>

      {/* Contact form */}
      <form
        className="w-full max-w-xl bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const name = (form.elements.namedItem("name") as HTMLInputElement).value;
          const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

          window.open(`https://wa.me/2348107029351?text=Hi Mayowa, my name is ${name}. ${message}`, "_blank");
        }}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-pink-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            required
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Send via WhatsApp
        </button>
      </form>

      {/* Social Icons */}
      <div className="flex gap-6 text-2xl mt-8">
        <a href="https://github.com/mentor08" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaGithub /></a>
        <a href="https://linkedin.com/in/mayowa-ekundayo-david" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
        <a href={mailTo} className="hover:text-green-400"><FaEnvelope /></a>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaWhatsapp /></a>
      </div>
    </motion.section>
  );
}
