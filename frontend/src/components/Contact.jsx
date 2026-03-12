import { useState } from "react";
import { sendMessage } from "../services/api";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState(null); // null | "loading" | "success" | "error"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendMessage(form);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-8 max-w-7xl mx-auto relative z-10">

      {/* Judul Kecil */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex gap-[3px] items-center">
          <div className="w-6 h-1 bg-[#0077FF] rounded-full shadow-[0_0_15px_#0077FF]"></div>
          <div className="w-1.5 h-1 bg-blue-400/50 rounded-full"></div>
        </div>
        <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-[0.4em] uppercase">
          Hubungi Kami
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Kiri — Info */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Siap Memulai<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-blue-200 to-[#0077FF]">
              Proyek Anda?
            </span>
          </h2>
          <div className="relative pl-6 mb-12">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-linear-to-b from-[#0077FF] via-[#0077FF]/50 to-transparent"></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ceritakan kebutuhan Anda kepada kami. Tim kami akan menghubungi Anda dalam 1x24 jam untuk diskusi lebih lanjut.
            </p>
          </div>

          {/* Info Kontak */}
          <div className="flex flex-col gap-5">
            {[
              { label: "Email", value: "hello@luminaristudio.id", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
              { label: "Phone", value: "+62 812 3456 7890", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              { label: "Lokasi", value: "Jakarta, Indonesia", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#0077FF]/10 border border-[#0077FF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#0077FF]/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-[#0077FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <div className="font-mono text-[9px] text-gray-600 tracking-widest uppercase mb-0.5">{item.label}</div>
                  <div className="text-white text-sm font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kanan — Form */}
        <div className="bg-white/3 border border-white/5 rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Nama</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 focus:bg-white/8 transition-all duration-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">No. HP</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+62 812 xxxx"
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 focus:bg-white/8 transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@email.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 focus:bg-white/8 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Ceritakan kebutuhan proyek Anda..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 focus:bg-white/8 transition-all duration-300 resize-none"
              />
            </div>

            {/* Status Messages */}
            {status === "success" && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pesan berhasil dikirim! Kami akan menghubungi Anda segera.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Gagal mengirim pesan. Pastikan backend berjalan dan coba lagi.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="relative px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,119,255,0.7)] hover:-translate-y-1 hover:text-white group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-[#0077FF] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0"></div>
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                {status !== "loading" && (
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;