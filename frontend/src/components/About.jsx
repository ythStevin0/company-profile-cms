const stats = [
  { value: "50+", label: "Projects Selesai" },
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "20+", label: "Klien Puas" },
  { value: "4", label: "Ahli Tersertifikasi" },
];

const team = [
  {
    name: "Andi Pratama",
    role: "Founder & Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sari Dewi",
    role: "Lead UI/UX Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Rizky Fadillah",
    role: "Mobile App Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Maya Salsabila",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex gap-[3px] items-center">
          <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
          <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
        </div>
        <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
          Tentang Kami
        </span>
      </div>

      {/* Cerita Perusahaan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

        {/* Kiri — Teks */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Kami Membangun<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-[#0077FF]">
              Masa Depan Digital
            </span>
          </h2>
          <div className="relative pl-6 mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-linear-to-b from-[#0077FF] via-[#0077FF]/50 to-transparent"></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Luminari Studio lahir dari visi sederhana — membantu bisnis Indonesia tampil profesional di panggung digital global. Kami bukan sekadar vendor teknologi, kami adalah mitra strategis yang tumbuh bersama bisnis Anda.
            </p>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Dengan tim yang berpengalaman di bidang web, mobile, dan enterprise system, kami telah membantu puluhan bisnis dari berbagai industri bertransformasi secara digital — dari UMKM lokal hingga perusahaan ekspor skala nasional.
          </p>
        </div>

        {/* Kanan — Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i}
              className="bg-white/3 border border-white/5 rounded-2xl p-6 hover:bg-white/5 hover:border-[#0077FF]/20 transition-all duration-300 group">
              <div className="text-4xl font-bold text-white mb-1 group-hover:text-[#0077FF] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-24"></div>

      {/* Tim */}
      <div>
        <div className="flex items-center gap-4 mb-12">
          <div className="flex gap-[3px] items-center">
            <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
            <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
          </div>
          <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
            Tim Kami
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer"
              style={{ minHeight: "280px" }}>
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000814] via-[#000814]/40 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col justify-end p-5">
                <h4 className="text-white font-bold text-sm mb-1">{member.name}</h4>
                <span className="font-mono text-[9px] text-[#0077FF] tracking-widest uppercase">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;