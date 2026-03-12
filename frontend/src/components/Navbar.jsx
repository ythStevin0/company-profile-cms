import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: "Cari Kebutuhan", href: "#services" },
  { name: "Pertanyaan", href: "#faq" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 bg-[#000814]/80 backdrop-blur-xl border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 max-w-7xl mx-auto">

        {/* Logo - Monolithic Style */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 rounded-sm bg-transparent border border-[#0077FF]/50 flex items-center justify-center relative transition-shadow duration-300 group-hover:shadow-[0_0_15px_rgba(0,119,255,0.8)]">
            <span className="text-[#0077FF] font-sans font-bold text-lg drop-shadow-[0_0_8px_rgba(0,119,255,0.8)]">N</span>
          </div>
          <span className="font-sans font-medium text-lg text-white tracking-wider">
            NexoraTech
          </span>
        </a>

        {/* Menu Navigasi - Monolithic */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
        e.preventDefault();
        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
      }}
      className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors text-gray-400 hover:text-white cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Kanan: Tombol Ghost (Monolithic) */}
        <div className="flex items-center gap-4">
        <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:flex relative px-8 py-3 bg-transparent border border-[#0077FF]/50 text-white text-[10px] font-bold tracking-[0.2em] uppercase rounded-full overflow-hidden group transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[#0077FF] scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Get Started</span>
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-white/70 hover:text-white focus:outline-hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

