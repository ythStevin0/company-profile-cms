const projects = [
  {
    id: 1,
    title: "Batik Nusantara E-Commerce",
    category: "Web Development",
    description: "Platform penjualan batik premium dengan sistem manajemen inventori real-time.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "FinTrack Mobile App",
    category: "Mobile App",
    description: "Aplikasi manajemen keuangan personal untuk Android & iOS.",
    tech: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "MedCore Enterprise System",
    category: "Enterprise",
    description: "Sistem manajemen rumah sakit terintegrasi untuk 5 cabang.",
    tech: ["Vue.js", "Laravel", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    title: "Archipelago Export Portal",
    category: "Web Development",
    description: "Portal B2B untuk koneksi eksportir Indonesia dengan buyer internasional.",
    tech: ["Next.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    title: "Lumina Design System",
    category: "UI/UX Design",
    description: "Design system komprehensif untuk ekosistem produk digital skala enterprise.",
    tech: ["Figma", "Storybook", "Tailwind"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    size: "large"
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-4">
          <div className="flex gap-[3px] items-center">
            <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
            <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
          </div>
          <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
            Portfolio
          </span>
        </div>

        {/* Total project */}
        <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">
          {projects.length} Projects
        </span>
      </div>

      {/* Grid Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Baris 1 — Large kiri + Small kanan (2 kartu) */}
        <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/5 bg-white/3 hover:border-white/10 transition-all duration-500 cursor-pointer"
          style={{ minHeight: "380px" }}>
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/60 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <span className="font-mono text-[9px] text-[#0077FF] tracking-[0.3em] uppercase mb-3">{projects[0].category}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{projects[0].title}</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">{projects[0].description}</p>
            <div className="flex gap-2 flex-wrap">
              {projects[0].tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {[projects[1], projects[2]].map((project) => (
            <div key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/3 hover:border-white/10 transition-all duration-500 cursor-pointer flex-1"
              style={{ minHeight: "180px" }}>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/50 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="font-mono text-[9px] text-[#0077FF] tracking-[0.3em] uppercase mb-2">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Baris 2 — Small kiri (2 kartu) + Large kanan */}
        <div className="flex flex-col gap-5">
          {[projects[3]].map((project) => (
            <div key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-white/5 bg-white/3 hover:border-white/10 transition-all duration-500 cursor-pointer"
              style={{ minHeight: "280px" }}>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/50 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <span className="font-mono text-[9px] text-[#0077FF] tracking-[0.3em] uppercase mb-2">{project.category}</span>
                <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-400 text-xs mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 group relative rounded-3xl overflow-hidden border border-white/5 bg-white/3 hover:border-white/10 transition-all duration-500 cursor-pointer"
          style={{ minHeight: "280px" }}>
          <img
            src={projects[4].image}
            alt={projects[4].title}
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/60 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end p-8">
            <span className="font-mono text-[9px] text-[#0077FF] tracking-[0.3em] uppercase mb-3">{projects[4].category}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{projects[4].title}</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-sm">{projects[4].description}</p>
            <div className="flex gap-2 flex-wrap">
              {projects[4].tech.map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono tracking-wider">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Portfolio;