export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 text-center bg-sky-600 text-white dark:bg-gray-900 dark:text-white transition-colors duration-500"
    >
      <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
      <form className="max-w-xl mx-auto space-y-4 px-4">
        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 rounded bg-sky-800 placeholder-white outline-none focus:ring-2 focus:ring-white dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:ring-purple-500 transition-colors duration-300"
        />
        <textarea
          rows="5"
          placeholder="Your message"
          className="w-full p-3 rounded bg-sky-800 placeholder-white outline-none focus:ring-2 focus:ring-white dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:ring-purple-500 transition-colors duration-300"
        />
        <button
          type="submit"
          className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700"
        >
          Send
        </button>
      </form>
    </section>
  );
}
