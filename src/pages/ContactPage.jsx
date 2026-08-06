function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h1>
      <p className="text-gray-600 dark:text-gray-300">
        I'm open to new opportunities and always happy to talk about frontend
        development. Feel free to reach out.
      </p>
      <div className="flex flex-col items-center gap-3 text-sm font-medium">
        <a
          href="mailto:meltemglseen@gmail.com"
          className="hover:underline text-purple-700 dark:text-purple-400"
        >
          ✉️ meltemglseen@gmail.com
        </a>
        <a
          href="https://github.com/MeltemGlsn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-purple-700 dark:text-purple-400"
        >
          🐙 github.com/MeltemGlsn
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
