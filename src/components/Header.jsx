import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full px-6 py-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-300 bg-white dark:bg-gray-900">
      {/* Sol taraf: İsim */}
      <div className="text-xl font-bold text-purple-700 mb-2 md:mb-0">
        Meltem Gülşen
      </div>

      {/* Sağ taraf: Menü */}
      <div className="flex items-center gap-4 flex-wrap justify-center">
        {/* Dark mode toggle (şimdilik placeholder) */}
        <button className="text-sm border px-3 py-1 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
          🌙 Dark Mode
        </button>

        {/* Dil seçici */}
        <button className="text-sm border px-3 py-1 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
          🇹🇷 Türkçe
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
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 text-sm rounded">
          Hire me
        </button>
      </div>
    </header>
  );
}

export default Header;
