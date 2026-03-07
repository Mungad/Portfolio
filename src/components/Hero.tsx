import { FaGithub, FaLinkedin } from "react-icons/fa"
import myPhoto from "../assets/Daisy.png"

export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white min-h-screen flex items-center pt-24">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-8 gap-12">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left">

          <p className="text-gray-400 mb-2 text-lg md:text-xl">Hi I am</p>

          <h2 className="text-3xl md:text-4xl text-gray-300 mb-2">
            Daisy Munga
          </h2>

          <h1 className="text-4xl md:text-6xl font-bold text-orange-500 mb-6">
            Software Engineer
          </h1>

          {/* Social Icons */}
          <div className="flex space-x-6 mb-7 justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/daisy-munga-3a3b4a239"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/mungad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-3xl"
            >
              <FaGithub />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md w-full sm:w-auto">
              Hire Me
            </button>

            <button className="border border-gray-400 px-8 py-3 rounded-md hover:border-orange-500 w-full sm:w-auto">
              Download CV
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 mt-10 bg-zinc-800 rounded-md overflow-hidden max-w-md mx-auto md:mx-0">

            <div className="py-4 text-center border-r border-zinc-700">
              <h2 className="text-orange-500 text-lg md:text-xl font-bold">1+</h2>
              <p className="text-white text-xs md:text-sm">Years Experience</p>
            </div>

            <div className="py-4 text-center border-r border-zinc-700">
              <h2 className="text-orange-500 text-lg md:text-xl font-bold">8+</h2>
              <p className="text-white text-xs md:text-sm">Projects Built</p>
            </div>

            <div className="py-4 text-center">
              <h2 className="text-orange-500 text-lg md:text-xl font-bold">5+</h2>
              <p className="text-white text-xs md:text-sm">Technologies</p>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden">

            <img
              src={myPhoto}
              alt="Daisy"
              className="h-full object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  )
}