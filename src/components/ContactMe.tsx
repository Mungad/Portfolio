import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function ContactMe() {
  return (
    <section className="bg-zinc-900 text-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
            Contact Me
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Feel free to reach out if you'd like to collaborate,
            discuss a project, or just say hello.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE - Contact Info */}
          <div className="space-y-6">

            <h2 className="text-2xl font-semibold">
              Let's talk
            </h2>

            <p className="text-gray-400">
              I'm currently open to new opportunities and collaborations.
              If you have a question or just want to connect, send me a message.
            </p>

            {/* Email */}
            <div className="flex items-center space-x-4 text-gray-300">
              <FaEnvelope color="#f97316" size="1.25rem" />
              <span>daisynmunga@gmail.com</span>
            </div>

            {/* Socials */}
            <div className="flex space-x-6 pt-4">

              <a
                href="https://github.com/mungad"
                target="_blank"
                className="text-gray-400 hover:text-white text-3xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/daisy-munga-3a3b4a239"
                target="_blank"
                className="text-gray-400 hover:text-white text-3xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* RIGHT SIDE - Contact Form */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md w-full md:w-auto"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  )
}