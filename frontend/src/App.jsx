import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center"><h1 className="text-4xl font-bold">Home Page</h1></div>;
const Services = () => <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center"><h1 className="text-4xl font-bold">Services Page</h1></div>;
const Portfolio = () => <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center"><h1 className="text-4xl font-bold">Portfolio Page</h1></div>;
const About = () => <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center"><h1 className="text-4xl font-bold">About Page</h1></div>;
const Contact = () => <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center"><h1 className="text-4xl font-bold">Contact Page</h1></div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;