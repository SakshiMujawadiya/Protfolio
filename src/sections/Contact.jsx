export default function Contact() {
    return (
      <section id="contact" className="bg-sky-600 py-16 text-white text-center">
        <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
        <form className="max-w-xl mx-auto space-y-4 px-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded bg-sky-800 placeholder-white outline-none focus:ring-2 focus:ring-white"
          />
          <textarea
            rows="5"
            placeholder="Your message"
            className="w-full p-3 rounded bg-sky-800 placeholder-white outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-semibold py-2 rounded hover:bg-gray-100 transition"
          >
            Send
          </button>
        </form>
      </section>
    );
  }
  