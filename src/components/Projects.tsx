export default function Projects() {
  const projects = [
    {
      title: "Event Ticketing System",
      description:
        "A full-stack application where users can browse events, book tickets, and make payments. Includes admin dashboard for managing events and venues.",
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
      github: "https://github.com/yourusername/event-ticketing",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my projects, skills, and contact information.",
      tech: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      demo: "#",
    },
    {
      title: "Task Management App",
      description:
        "A task manager that allows users to create, update, and delete tasks with a clean UI.",
      tech: ["React", "TypeScript"],
      github: "https://github.com/yourusername/task-app",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-orange-500 mb-12">
          My Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-orange-500 text-sm px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-orange-500 hover:underline"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="text-orange-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}