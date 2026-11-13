import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");
    setSuccess(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const notificationTemplate =
      import.meta.env.VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID;
    const autoReplyTemplate =
      import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !notificationTemplate ||
      !autoReplyTemplate ||
      !publicKey
    ) {
      setStatus("Email service is not configured. Please try again later.");
      setLoading(false);
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      // Send the visitor's message to Daisy
      await emailjs.send(
        serviceId,
        notificationTemplate,
        templateParams,
        publicKey
      );

      // Send an automatic acknowledgement to the visitor
      await emailjs.send(
        serviceId,
        autoReplyTemplate,
        templateParams,
        publicKey
      );

      setSuccess(true);
      setStatus(
        "Your message has been sent successfully! Thank you for reaching out. I'll get back to you soon."
      );

      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus(
        "Something went wrong while sending your message. Please try again or email me directly."
      );
    } finally {
      setLoading(false);
    }
  };

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

          {/* LEFT SIDE - Contact Information */}
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

              <a
                href="mailto:daisynmunga@gmail.com"
                className="hover:text-orange-500 transition"
              >
                daisynmunga@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">

              <a
                href="https://github.com/mungad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white text-3xl transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/daisy-munga-3a3b4a239"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white text-3xl transition"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={100}
              autoComplete="name"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={254}
              autoComplete="email"
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              maxLength={5000}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 focus:outline-none focus:border-orange-500 resize-none"
            />

            {/* Success / Error Message */}
            {status && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm leading-relaxed ${
                  success ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-md w-full md:w-auto transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}
