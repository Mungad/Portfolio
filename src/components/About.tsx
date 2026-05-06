
export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2 className="text-5xl font-bold mb-12 text-gray-200">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT: Work Experience */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">
              Work Experience
            </h3>

            <div className="relative border-l border-gray-700 pl-6 space-y-10">

              {/* Item 1 */}
              <div className="relative">
                <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full"></span>
                <p className="text-orange-400 text-sm mb-1">March 2026 - Present</p>
                <h4 className="font-semibold">
                  Attachee · DSAIL
                </h4>
                <p className="text-gray-400 text-sm">
                  Web Developer 
                </p>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full"></span>
                <p className="text-orange-400 text-sm mb-1">May. - Aug. 2025</p>
                <h4 className="font-semibold">
                  Trainee · Teach2Give
                </h4>
                <p className="text-gray-400 text-sm">
                  QA/QE Engineer 
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT: Bio */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col justify-between">

            <div>
              <h3 className="text-2xl font-semibold mb-6">Bio</h3>

              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a graduate from <span className="text-white font-medium">United States International University-Africa </span> 
                I don't just design screens; I build systems.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My background in Informations Systems and Technology allows me to speak the language 
                of developers, ensuring that my designs are not just beautiful, 
                but feasible and scalable.
              </p>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-orange-500 px-4 py-2 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}