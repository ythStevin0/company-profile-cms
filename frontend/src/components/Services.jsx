import { useEffect, useState } from "react";
import { getServices } from "../services/api";

// Mapping nama icon dari backend ke SVG path
const iconPaths = {
  code:    "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  mobile:  "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  design:  "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  shield:  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  cloud:   "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  chart:   "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
};

const getIconPath = (icon) => iconPaths[icon] || iconPaths["code"];

// Kartu layanan
const ServiceCard = ({ service, large }) => (
  <div
    className={`${large ? "lg:col-span-2" : ""} bg-white/3 border border-white/5 rounded-3xl ${large ? "p-10" : "p-8"} hover:bg-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden`}
  >
    {large && (
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077FF]/5 rounded-full blur-[80px] pointer-events-none" />
    )}
    <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center mb-6">
      <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={getIconPath(service.icon)} />
      </svg>
    </div>
    <h3 className={`${large ? "text-2xl" : "text-xl"} font-bold text-white mb-3`}>{service.title}</h3>
    <p className={`text-gray-400 text-sm leading-relaxed ${large ? "max-w-md" : ""}`}>
      {service.description}
    </p>
  </div>
);

// Skeleton loading card
const SkeletonCard = ({ large }) => (
  <div className={`${large ? "lg:col-span-2" : ""} bg-white/3 border border-white/5 rounded-3xl ${large ? "p-10" : "p-8"} animate-pulse`}>
    <div className="w-12 h-12 rounded-xl bg-white/10 mb-6" />
    <div className="h-5 bg-white/10 rounded-full w-2/5 mb-3" />
    <div className="h-3 bg-white/5 rounded-full w-4/5 mb-2" />
    <div className="h-3 bg-white/5 rounded-full w-3/5" />
  </div>
);

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await getServices();
        setServices(res.data.data);
      } catch (err) {
        console.error("Gagal memuat data services:", err);
        setError("Gagal memuat layanan. Pastikan server backend berjalan.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  // Bagi services menjadi baris 1 (besar kiri, kecil kanan) dan baris 2 (kecil kiri, besar kanan)
  const row1Large = services[0];
  const row1Small = services[1];
  const row2Small = services[2];
  const row2Large = services[3];

  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex gap-[3px] items-center">
          <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]" />
          <div className="w-1.5 h-1 bg-blue-400/50 rounded-full" />
        </div>
        <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
          Layanan Kami
        </span>
      </div>

      {/* Error state */}
      {error && (
        <div className="text-center py-16">
          <p className="text-red-400 text-sm font-mono">{error}</p>
        </div>
      )}

      {/* Loading / Content */}
      {!error && (
        <>
          {/* Baris 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {loading ? (
              <>
                <SkeletonCard large />
                <SkeletonCard />
              </>
            ) : (
              <>
                {row1Large && <ServiceCard service={row1Large} large />}
                {row1Small && <ServiceCard service={row1Small} />}
              </>
            )}
          </div>

          {/* Baris 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard large />
              </>
            ) : (
              <>
                {row2Small && <ServiceCard service={row2Small} />}
                {row2Large && <ServiceCard service={row2Large} large />}
              </>
            )}
          </div>

          {/* Jika tidak ada data sama sekali */}
          {!loading && services.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-sm font-mono">Belum ada data layanan.</p>
            </div>
          )}
        </>
      )}

    </section>
  );
};

export default Services;