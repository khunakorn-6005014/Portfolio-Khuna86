// src/app/contact/page.tsx
export default function ContactPage() {
  return (
    <section className="max-w-md mx-auto space-y-6">
      <h2 className="text-4xl font-bold">Get In Touch</h2>
      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}