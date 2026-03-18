import myPhoto from "../assets/Daisy.png"

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={myPhoto}
            alt="Daisy"
            className="w-72 h-72 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-orange-500">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I'm Daisy Munga, a passionate Software Engineer who enjoys
            building modern web applications and solving real-world problems
            with technology.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            I specialize in full-stack development using technologies like
            React, TypeScript, Node.js, and modern frameworks. I enjoy creating
            responsive and user-friendly applications that deliver great user
            experiences.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Recently, I built an Event Ticketing and Venue Booking System where
            users can discover events, purchase tickets, and manage bookings
            efficiently.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-orange-500 px-4 py-2 rounded-lg text-sm">
              React
            </span>
            <span className="bg-orange-500 px-4 py-2 rounded-lg text-sm">
              TypeScript
            </span>
            <span className="bg-orange-500 px-4 py-2 rounded-lg text-sm">
              Node.js
            </span>
            <span className="bg-orange-500 px-4 py-2 rounded-lg text-sm">
              Tailwind CSS
            </span>
            <span className="bg-orange-500 px-4 py-2 rounded-lg text-sm">
              PostgreSQL
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}