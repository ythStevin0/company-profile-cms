import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const PageWrapper = ({ children }) => (
  <div className="min-h-screen bg-[#0B0C10] text-white font-sans relative overflow-hidden">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
    {children}
  </div>
);

const Services = () => <PageWrapper><div className="flex items-center justify-center min-h-screen text-4xl font-bold">Services</div></PageWrapper>;
const FAQ      = () => <PageWrapper><div className="flex items-center justify-center min-h-screen text-4xl font-bold">FAQ</div></PageWrapper>;
const Blog     = () => <PageWrapper><div className="flex items-center justify-center min-h-screen text-4xl font-bold">Blog</div></PageWrapper>;
const Contact  = () => <PageWrapper><div className="flex items-center justify-center min-h-screen text-4xl font-bold">Contact</div></PageWrapper>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq"      element={<FAQ />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/contact"  element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;