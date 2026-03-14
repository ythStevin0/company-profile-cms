import { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";

// Skeleton card
const SkeletonCard = ({ large, style }) => (
  <div
    className={`${large ? "lg:col-span-2" : ""} rounded-3xl border border-white/5 bg-white/3 animate-pulse`}
    style={style}
  />
);

// Project card komponen
const ProjectCard = ({ project, large, style }) => (
  <div
    className={`${large ? "lg:col-span-2" : ""} group relative rounded-3xl overflow-hidden border border-white/5 bg-white/3 hover:border-white/10 transition-all duration-500 cursor-pointer`}
    style={style}
  >
    {project.image && (
      <img
        src={project.image}
        alt={project.title}
        className={`absolute inset-0 w-full h-full object-cover ${large ? "opacity-40 group-hover:opacity-60" : "opacity-30 group-hover:opacity-50"} group-hover:scale-105 transition-all duration-700`}
        referrerPolicy="no-referrer"
      />
    )}
    <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/60 to-transparent" />
    <div className={`relative z-10 h-full flex flex-col justify-end ${large ? "p-8" : "p-6"}`}>
      <span className="font-mono text-[9px] text-[#0077FF] tracking-[0.3em] uppercase mb-2">
        {project.category || "Project"}
      </span>
      <h3 className={`${large ? "text-2xl" : "text-lg"} font-bold text-white mb-2`}>{project.title}</h3>
      {(large || project.description) && (
        <p className="text-gray-400 text-sm mb-4 max-w-sm">{project.description}</p>
      )}
      {project.technologies?.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {project.technologies.map((t) => (
            <span
              key={t}
              className={`px-${large ? "3" : "2"} py-${large ? "1" : "0.5"} rounded-full bg-white/5 border border-white/10 text-gray-300 text-[10px] font-mono tracking-wider`}
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await getPortfolio();
        setProjects(res.data.data);
      } catch (err) {
        console.error("Gagal memuat portfolio:", err);
        setError("Gagal memuat portfolio. Pastikan server backend berjalan.");
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <section id="portfolio" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-4">
          <div className="flex gap-[3px] items-center">
            <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]" />
            <div className="w-1.5 h-1 bg-blue-400/50 rounded-full" />
          </div>
          <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
            Portfolio
          </span>
        </div>

        {!loading && !error && (
          <span className="font-mono text-[10px] text-gray-600 tracking-widest uppercase">
            {projects.length} Projects
          </span>
        )}
      </div>

      {/* Error state */}
      {error && (
        <div className="text-center py-16">
          <p className="text-red-400 text-sm font-mono">{error}</p>
        </div>
      )}

      {/* Loading state */}
      {loading && !error && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <SkeletonCard large style={{ minHeight: "380px" }} />
          <div className="flex flex-col gap-5">
            <SkeletonCard style={{ minHeight: "180px" }} />
            <SkeletonCard style={{ minHeight: "180px" }} />
          </div>
          <SkeletonCard style={{ minHeight: "280px" }} />
          <SkeletonCard large style={{ minHeight: "280px" }} />
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && projects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 text-sm font-mono">Belum ada data portfolio.</p>
        </div>
      )}

      {/* Grid Portfolio — layout menyesuaikan jumlah data */}
      {!loading && !error && projects.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* Item pertama: large */}
          {projects[0] && (
            <ProjectCard project={projects[0]} large style={{ minHeight: "380px" }} />
          )}

          {/* Item 2 & 3: small kolom kanan */}
          {(projects[1] || projects[2]) && (
            <div className="flex flex-col gap-5">
              {[projects[1], projects[2]].filter(Boolean).map((p) => (
                <ProjectCard key={p._id} project={p} style={{ minHeight: "180px", flex: 1 }} />
              ))}
            </div>
          )}

          {/* Item 4: small */}
          {projects[3] && (
            <ProjectCard project={projects[3]} style={{ minHeight: "280px" }} />
          )}

          {/* Item 5: large */}
          {projects[4] && (
            <ProjectCard project={projects[4]} large style={{ minHeight: "280px" }} />
          )}

          {/* Item ke-6 dst: tampil full width */}
          {projects.slice(5).map((p) => (
            <ProjectCard key={p._id} project={p} style={{ minHeight: "280px" }} />
          ))}

        </div>
      )}

    </section>
  );
};

export default Portfolio;