import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-sm w-full">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Sol taraf (isim/logo) */}
        <Link to="/" className="text-xl font-bold text-purple-700">
          Almila Su
        </Link>

        {/* Sağ taraf (menü) */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-purple-600">Skills</Link>
          <Link to="/projects" className="hover:text-purple-600">Projects</Link>
          <a href="#contact" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
