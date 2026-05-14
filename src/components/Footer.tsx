export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-white">
            Daisy Munga
          </h2>
          <p className="text-sm mt-2">
            Software Engineer | Building modern web applications
          </p>
        </div>

        {/* Center Links */}
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-orange-500">
            About
          </a>
          <a href="#projects" className="hover:text-orange-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Right Side - Socials */}
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Mungad"
            target="_blank"
            className="hover:text-orange-500"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/daisy-munga-3a3b4a239"
            target="_blank"
            className="hover:text-orange-500"
          >
            LinkedIn
          </a>
          <a
            href="mailto:daisynmunga@gmail.com"
            className="hover:text-orange-500"
          >
            Email
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Daisy Munga. All rights reserved.
      </div>
    </footer>
  )
}