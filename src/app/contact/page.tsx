import ContactButtons from "./ContactButtons";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-2xl w-full p-8 ">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-sky-100 text-center">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-sky-200 text-center mt-2">
          Let&apos;s connect! Feel free to reach out via email or find me online
        </p>

        <ContactButtons />
        {/* <hr className="my-16 dark:border-sky-900" /> */}

        {/* <h1 className="text-3xl mt-12 font-bold text-gray-900 dark:text-sky-100 text-center">
          Send A Message
        </h1>
        <p className="text-lg text-gray-600 dark:text-sky-200 text-center mt-2">
          Use the form below to message me directly.
        </p> */}
        {/* Contact Form */}
        {/* <form className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 dark:text-sky-100 font-medium">
              Name
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-sky-100 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-sky-100 font-medium">
              Message
            </label>
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
        </form> */}
      </div>
    </main>
  );
}
