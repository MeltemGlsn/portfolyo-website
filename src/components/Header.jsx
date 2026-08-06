import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <header className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Sol taraf: İsim */}
      <div className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-2 md:mb-0">
        Meltem Gülşen
      </div>

      {/* Sağ taraf: Menü */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="text-sm border px-3 py-1 rounded-full text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Linkler */}
        <Link to="/" className="text-sm hover:underline text-gray-700 dark:text-gray-200">
          Home
        </Link>
        <Link to="/about" className="text-sm hover:underline text-gray-700 dark:text-gray-200">
          About
        </Link>
        <Link to="/skills" className="text-sm hover:underline text-gray-700 dark:text-gray-200">
          Skills
        </Link>
        <Link to="/projects" className="text-sm hover:underline text-gray-700 dark:text-gray-200">
          Projects
        </Link>
        <Link to="/contact" className="text-sm hover:underline text-gray-700 dark:text-gray-200">
          Contact
        </Link>

        {/* Hire Me */}
        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 text-sm rounded"
        >
          Hire me
        </Link>
      </div>
    </header>
  );
}

export default Header;
