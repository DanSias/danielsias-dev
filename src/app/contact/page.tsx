import { contactInfo } from "@/constants/contact";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="max-w-2xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900 text-center">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 text-center mt-2">
          Let&apos;s connect! Feel free to reach out via email or the form
          below.
        </p>

        {/* Contact Form */}
        <form className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              rows={4}
              required></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Direct Contact Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-700">Or reach me directly:</p>
          <p className="text-lg font-semibold text-blue-600">
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email}
            </a>
          </p>
          <p className="mt-2">
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline">
              Connect on LinkedIn
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
