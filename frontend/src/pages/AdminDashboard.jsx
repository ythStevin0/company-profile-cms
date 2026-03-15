import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getMessages, deleteMessage, getServices, getPortfolio } from "../services/api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("messages");
  const [messages, setMessages] = useState([]);
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const adminName = localStorage.getItem("adminName");

  const fetchAll = useCallback(async () => {
    setLoading(true);
    try {
      const [msgRes, svcRes, portRes] = await Promise.all([
        getMessages(),
        getServices(),
        getPortfolio(),
      ]);
      setMessages(msgRes.data.data);
      setServices(svcRes.data.data);
      setPortfolio(portRes.data.data);
    } catch {
      navigate("/admin/login");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const handleDeleteMessage = async (id) => {
    if (!confirm("Hapus pesan ini?")) return;
    await deleteMessage(id);
    setMessages(messages.filter((m) => m._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    navigate("/admin/login");
  };

  const tabs = [
    { id: "messages", label: "Pesan Masuk", count: messages.length },
    { id: "services", label: "Services", count: services.length },
    { id: "portfolio", label: "Portfolio", count: portfolio.length },
  ];

  return (
    <div className="min-h-screen bg-[#000814] text-white font-sans">

      {/* Topbar */}
      <div className="border-b border-white/5 bg-[#000814]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-sm border border-[#0077FF]/50 flex items-center justify-center">
              <span className="text-[#0077FF] font-bold text-sm">L</span>
            </div>
            <span className="text-white font-medium tracking-wider">LuminariStudio</span>
            <span className="text-gray-600 font-mono text-xs">/ dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
              {adminName}
            </span>
            <button
              onClick={handleLogout}
              className="font-mono text-[10px] text-gray-500 hover:text-red-400 tracking-widest uppercase transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 mb-10">
          {tabs.map((tab) => (
            <div key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`bg-white/3 border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-[#0077FF]/30 bg-[#0077FF]/5"
                  : "border-white/5 hover:border-white/10"
              }`}>
              <div className="text-3xl font-bold text-white mb-1">{tab.count}</div>
              <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">{tab.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-mono text-[10px] tracking-widest uppercase transition-colors pb-4 -mb-4 border-b-2 ${
                activeTab === tab.id
                  ? "text-[#0077FF] border-[#0077FF]"
                  : "text-gray-500 hover:text-white border-transparent"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="font-mono text-[10px] text-gray-600 tracking-widest uppercase animate-pulse">
              Memuat data...
            </div>
          </div>
        ) : (
          <>
            {/* Messages Tab */}
            {activeTab === "messages" && (
              <div className="flex flex-col gap-4">
                {messages.length === 0 ? (
                  <p className="text-gray-600 font-mono text-sm text-center py-16">Belum ada pesan masuk.</p>
                ) : (
                  messages.map((msg) => (
                    <div key={msg._id} className="bg-white/3 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-white font-semibold">{msg.name}</h3>
                            <span className="font-mono text-[9px] text-gray-600 tracking-widest">{msg.email}</span>
                            {msg.phone && <span className="font-mono text-[9px] text-gray-600 tracking-widest">{msg.phone}</span>}
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed">{msg.message}</p>
                          <span className="font-mono text-[9px] text-gray-700 tracking-widest mt-3 block">
                            {new Date(msg.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                          </span>
                        </div>
                        <button
                          onClick={() => handleDeleteMessage(msg._id)}
                          className="text-gray-600 hover:text-red-400 transition-colors shrink-0"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Services Tab */}
            {activeTab === "services" && (
              <div className="flex flex-col gap-4">
                {services.map((svc) => (
                  <div key={svc._id} className="bg-white/3 border border-white/5 rounded-2xl p-6 flex items-center justify-between hover:border-white/10 transition-all duration-300">
                    <div>
                      <h3 className="text-white font-semibold mb-1">{svc.title}</h3>
                      <p className="text-gray-400 text-sm">{svc.description}</p>
                    </div>
                    <span className="font-mono text-[9px] text-[#0077FF] tracking-widest uppercase px-3 py-1 rounded-full border border-[#0077FF]/20 bg-[#0077FF]/5">
                      {svc.icon}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === "portfolio" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {portfolio.map((item) => (
                  <div key={item._id} className="bg-white/3 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;