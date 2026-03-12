const Services = () => {
  return (
    <section id="services" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex gap-[3px] items-center">
          <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
          <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
        </div>
        <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
          Layanan Kami
        </span>
      </div>

      {/* Baris 1 — Besar kiri + Kecil kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* Besar */}
        <div className="lg:col-span-2 bg-white/3 border border-white/5 rounded-3xl p-10 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Web Development</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Website profesional yang dibangun dengan teknologi modern, cepat, dan siap bersaing di pasar global.
          </p>
        </div>

        {/* Kecil */}
        <div className="bg-white/3 border border-white/5 rounded-3xl p-8 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Mobile App</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Aplikasi mobile Android & iOS yang intuitif dan berperforma tinggi.
          </p>
        </div>

      </div>

      {/* Baris 2 — Kecil kiri + Besar kanan */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Kecil */}
        <div className="bg-white/3 border border-white/5 rounded-3xl p-8 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
          <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm12 0a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">UI/UX Design</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Desain antarmuka yang elegan, modern, dan berpusat pada pengalaman pengguna.
          </p>
        </div>

        {/* Besar */}
        <div className="lg:col-span-2 bg-white/3 border border-white/5 rounded-3xl p-10 hover:bg-white/5 hover:border-white/10 transition-all duration-300 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0077FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="w-12 h-12 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Enterprise System</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Sistem enterprise yang scalable dan aman untuk kebutuhan bisnis skala besar, terintegrasi penuh dengan workflow perusahaan Anda.
          </p>
        </div>

      </div>

    </section>
  );
};

export default Services;