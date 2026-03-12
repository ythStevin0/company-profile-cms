import Services from "../components/Services";

const Home = () => {
  // Organic blob border radius configs for animation
  const blob1Shape = "40% 60% 70% 30% / 40% 50% 60% 50%";
  const blob2Shape = "60% 40% 30% 70% / 50% 60% 40% 50%";

  return (
    // Background: Deep Navy (#000814) to Obsidian Black (#050505) gradient
    <div className="min-h-screen bg-linear-to-b from-[#000814] to-[#050505] text-white font-sans relative overflow-hidden">
      
      {/* --- 1. AMBIENT BACKGROUND (CSS Animated Particle Net) --- */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, #0077FF 1px, transparent 0),
            linear-gradient(to right, rgba(0,119,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,119,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 80px 80px, 80px 80px',
          animationDuration: '8s'
        }}
      ></div>

      {/* --- 2. HERO CONTENT --- */}
      <main id="home" className="pt-32 pb-20 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 min-h-screen h-full">

        {/* --- LEFT: REDESIGNED PREMIUM TYPOGRAPHY --- */}
        <div className="flex flex-col justify-center w-full max-w-xl z-20">
          
          {/* Subtle Accent Line & Monospace Label */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-[3px] items-center">
              <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
              <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
            </div>
            <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase drop-shadow-sm">
              Mitra Ekspansi Global
            </span>
          </div>

          {/* Massive Typography */}
          <h1 className="text-6xl md:text-[5rem] lg:text-[6.5rem] font-serif leading-[1.05] tracking-tight mb-8">
            <span className="block text-white/95 drop-shadow-lg">Website Ekspor</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-[#0077FF] drop-shadow-2xl">
              Kelas Dunia.
            </span>
          </h1>
 
          {/* Glassmorphism Sub-headline Box */}
          <div className="relative mb-14 pl-6">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-linear-to-b from-[#0077FF] via-[#0077FF]/50 to-transparent"></div>
            <p className="text-gray-300 text-base lg:text-lg font-light tracking-wide leading-loose">
              Tingkatkan kredibilitas bisnis Anda di mata <strong className="text-white font-medium">buyer internasional</strong>. Kami merancang website B2B profesional yang terpercaya untuk membantu produk Anda menembus pasar global.
            </p>
          </div>

          {/* Buttons: Premium Hover States */}
          <div className="flex flex-wrap gap-6 items-center">
            {/* 1. KONSULTASI - Premium Glow Pill Button */}
            <button className="relative px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(0,119,255,0.7)] hover:-translate-y-1 hover:text-white group">
              {/* Expanding Blue Background on Hover */}
              <div className="absolute inset-0 bg-[#0077FF] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 z-0"></div>
              <span className="relative z-10 flex items-center gap-3">
                Konsultasi Ekspor
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-4 4m4-4H3" /></svg>
              </span>
            </button>
            
            {/* 2. PORTOFOLIO - Frosted Glass Button */}
            <a href="#" className="flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.25em] uppercase text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 ease-out group">
              Lihat Portofolio
              {/* Arrow circle that changes color on hover */}
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
              </div>
            </a>
          </div>

        </div>


        {/* --- RIGHT: ORGANIC FLUID BLOBS WITH VIDEO --- */}
        <div className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center pointer-events-none">
          
          {/* Ambient Glow behind blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0077FF]/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '6s' }}></div>

          <div className="relative w-full h-full flex items-center justify-center pointer-events-auto group">
            
            {/* Back Blob (Offset & Darker Duotone) */}
            <div 
              className="absolute top-[10%] left-[10%] w-[350px] h-[450px] lg:w-[450px] lg:h-[550px] overflow-hidden isolate transform-gpu transition-all duration-[10s] ease-in-out mix-blend-screen opacity-50"
              style={{ 
                borderRadius: blob2Shape,
                animation: 'morph 12s ease-in-out infinite alternate',
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop" 
                alt="Data Center Core" 
                className="w-full h-full object-cover grayscale mix-blend-multiply"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#000814]/80 mix-blend-overlay"></div>
            </div>

            {/* Front Main Blob (Bright Duotone) */}
            <div 
              className="absolute top-[20%] right-[10%] w-[400px] h-[500px] lg:w-[500px] lg:h-[600px] overflow-hidden isolate transform-gpu shadow-[0_0_50px_rgba(0,119,255,0.3)] transition-all duration-[8s] ease-in-out backdrop-blur-xl border border-white/5"
              style={{ 
                 borderRadius: blob1Shape,
                 animation: 'morph 8s ease-in-out infinite alternate-reverse',
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop" 
                alt="IT Engineering Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Duotone Filter Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-[#000814]/90 to-[#0077FF]/40 mix-blend-hard-light pointer-events-none"></div>
              
              {/* Floating Stat Box */}
              <div className="absolute bottom-16 -left-8 md:left-8 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-sm shadow-2xl flex items-center gap-4 transition-transform duration-500 hover:-translate-y-2 pointer-events-auto cursor-default z-10">
                <span className="font-mono text-3xl font-bold text-white tracking-tighter">10+</span>
                <span className="font-mono text-xs text-[#0077FF] uppercase tracking-widest leading-tight">Ahli IT <br/> Tersertifikasi</span>
              </div>
            </div>
            
          </div>
        </div>

      </main>

      <Services />

      {/* Embedded style for morphing blobs */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes morph {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
          34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
          67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        }
      `}} />
    </div>
  );
};

export default Home;


