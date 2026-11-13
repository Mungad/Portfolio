export default function About() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "REST APIs",
    "Git & GitHub",
    "Drizzle ORM",
    "Jest",
    "Cypress",
    "Docker",
    "Kubernetes",
    "Linux",
    "CI/CD",
    "Terraform",
  ];

  return (
    <section id="about" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-orange-400 font-medium tracking-widest uppercase text-sm mb-3">
            Get to know me
          </p>

          <h2 className="text-5xl font-bold text-gray-200">
            About Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl leading-relaxed">
            A little about my background, experience, education,
            and the technologies I enjoy working with.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* Bio */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Who I Am
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm <span className="text-white font-semibold">Daisy Munga</span>,
                  an Information Systems and Technology graduate from
                  <span className="text-white font-medium">
                    {" "}United States International University-Africa (USIU-Africa).
                  </span>
                  I have a strong interest in software development,
                  technology, and building practical solutions to
                  real-world problems.
                </p>

                <p>
                  My technical background spans both frontend and
                  backend development. I enjoy working across the
                  development process, from creating responsive
                  user interfaces to developing server-side
                  applications, designing databases, and integrating
                  REST APIs.
                </p>

                <p>
                  Beyond software development, I've explored
                  quality assurance, software testing, and DevOps.
                  These experiences have helped me appreciate
                  the importance of writing maintainable code,
                  testing applications, automating workflows,
                  and building reliable systems.
                </p>

                <p>
                  I'm a curious and continuously learning
                  developer who enjoys tackling challenges,
                  exploring new technologies, collaborating
                  with others, and turning ideas into functional
                  applications.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Education & Professional Training
              </h3>

              <div className="relative border-l border-gray-700 pl-6 space-y-8">

                {/* Moringa School */}
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full" />

                  <p className="text-orange-400 text-sm mb-2">
                    May 2026 – August 2026
                  </p>

                  <h4 className="text-lg font-semibold">
                    DevOps Training
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Moringa School
                  </p>

                  <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                    Gained practical knowledge in DevOps practices,
                    CI/CD pipelines, automation, containerization,
                    cloud infrastructure, Linux, Docker, Kubernetes,
                    Terraform, and infrastructure management.
                  </p>
                </div>

                {/* USIU-Africa */}
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full" />

                  <p className="text-orange-400 text-sm mb-2">
                    2021 – 2025
                  </p>

                  <h4 className="text-lg font-semibold">
                    Bachelor of Science in Information Systems and Technology
                  </h4>

                  <p className="text-gray-400 mt-2">
                    United States International University-Africa
                  </p>

                  <p className="text-gray-400 text-sm mt-3">
                    Concentration: Applications
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* Work Experience */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-8">
                Experience & Training
              </h3>

              <div className="relative border-l border-gray-700 pl-6 space-y-10">

                {/* DSAIL */}
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full" />

                  <p className="text-orange-400 text-sm mb-1">
                    March 2026 – Present
                  </p>

                  <h4 className="font-semibold text-lg">
                    Attachee · DSAIL
                  </h4>

                  <p className="text-gray-400 text-sm mb-3">
                    Web Development & AI Data Projects
                  </p>

                  <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                    <li>
                      Contributing to web development and user
                      experience reviews.
                    </li>

                    <li>
                      Working on English-to-Swahili website
                      translation and localization.
                    </li>

                    <li>
                      Participating in forestry image annotation
                      and English-to-Kikuyu transcription tasks.
                    </li>

                    <li>
                      Preparing technical documentation,
                      research updates, and project reports.
                    </li>
                  </ul>
                </div>

                {/* Teach2Give */}
                <div className="relative">
                  <span className="absolute -left-[34px] top-1 w-4 h-4 bg-orange-500 rounded-full" />

                  <p className="text-orange-400 text-sm mb-1">
                    May 2025 – August 2025
                  </p>

                  <h4 className="font-semibold text-lg">
                    Trainee · Teach2Give
                  </h4>

                  <p className="text-gray-400 text-sm mb-3">
                    Software Development & QA/QE Engineering
                  </p>

                  <ul className="text-gray-300 text-sm space-y-2 list-disc pl-5">
                    <li>
                      Gained practical experience in software
                      development and quality engineering.
                    </li>

                    <li>
                      Worked with JavaScript, TypeScript,
                      React, Node.js, and Express.
                    </li>

                    <li>
                      Learned database management using
                      PostgreSQL and Drizzle ORM.
                    </li>

                    <li>
                      Practiced API testing, unit testing,
                      and end-to-end testing using Postman,
                      Jest, and Cypress.
                    </li>

                    <li>
                      Collaborated on development projects
                      using Git and GitHub.
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Technical Skills
              </h3>

              <p className="text-gray-400 text-sm mb-5">
                Technologies and tools I have worked with
                through training and practical projects.
              </p>

              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-700 border border-gray-600
                    hover:border-orange-500 hover:text-orange-400
                    transition-colors px-4 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
