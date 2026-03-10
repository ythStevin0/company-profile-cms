import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0F172A]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    }`}>
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#6366F1] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <span className="text-white font-bold text-lg">
            Luminari<span className="text-[#6366F1]">Studio</span>
          </span>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-[#6366F1]"
                  : "text-[#94A3B8] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Kanan: Dark mode toggle + Tombol */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-[#94A3B8] hover:text-white transition-colors text-xl"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <Link
            to="/contact"
            className="bg-[#6366F1] hover:bg-[#4F46E5] text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;