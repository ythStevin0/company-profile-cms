import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../services/api";

const AdminLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await loginAdmin(form);
      localStorage.setItem("adminToken", res.data.data.token);
      localStorage.setItem("adminName", res.data.data.admin.name);
      navigate("/admin");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#000814] flex items-center justify-center px-4 relative overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0077FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0077FF]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-md relative z-10">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="w-8 h-8 rounded-sm bg-transparent border border-[#0077FF]/50 flex items-center justify-center">
            <span className="text-[#0077FF] font-bold text-lg drop-shadow-[0_0_8px_rgba(0,119,255,0.8)]">L</span>
          </div>
          <span className="font-medium text-lg text-white tracking-wider">
            LuminariStudio <span className="text-[#0077FF] text-sm font-mono">/ admin</span>
          </span>
        </div>

        {/* Card */}
        <div className="bg-white/3 border border-white/5 rounded-3xl p-8">
          <h1 className="text-2xl font-bold text-white mb-1">Selamat Datang</h1>
          <p className="text-gray-500 text-sm mb-8">Masuk ke Admin Dashboard</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="admin@luminaristudio.id"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[9px] text-gray-500 tracking-widest uppercase">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#0077FF]/50 transition-all duration-300"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Email atau password salah.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="relative px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-[0.25em] rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,119,255,0.7)] hover:-translate-y-1 hover:text-white group disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              <div className="absolute inset-0 bg-[#0077FF] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0"></div>
              <span className="relative z-10">
                {status === "loading" ? "Memverifikasi..." : "Masuk"}
              </span>
            </button>

          </form>
        </div>

        <p className="text-center text-gray-700 text-xs mt-6 font-mono">
          LUMINARI STUDIO — ADMIN PANEL
        </p>

      </div>
    </div>
  );
};

export default AdminLogin;