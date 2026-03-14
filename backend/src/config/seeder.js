import dotenv from "dotenv";
import connectDB from "./db.js";
import Service from "../modules/services/services.model.js";
import Portfolio from "../modules/portfolio/portfolio.model.js";

dotenv.config();

const services = [
  { title: "Web Development", description: "Website profesional yang dibangun dengan teknologi modern, cepat, dan siap bersaing di pasar global.", icon: "code" },
  { title: "Mobile App", description: "Aplikasi mobile Android & iOS yang intuitif dan berperforma tinggi.", icon: "mobile" },
  { title: "UI/UX Design", description: "Desain antarmuka yang elegan, modern, dan berpusat pada pengalaman pengguna.", icon: "design" },
  { title: "Enterprise System", description: "Sistem enterprise yang scalable dan aman untuk kebutuhan bisnis skala besar.", icon: "shield" },
];

const portfolios = [
  { title: "Batik Nusantara E-Commerce", description: "Platform penjualan batik premium dengan sistem manajemen inventori real-time.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", technologies: ["React", "Node.js", "MongoDB"], link: "#" },
  { title: "FinTrack Mobile App", description: "Aplikasi manajemen keuangan personal untuk Android & iOS.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", technologies: ["React Native", "Firebase"], link: "#" },
  { title: "MedCore Enterprise System", description: "Sistem manajemen rumah sakit terintegrasi untuk 5 cabang.", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800", technologies: ["Vue.js", "Laravel", "PostgreSQL"], link: "#" },
  { title: "Archipelago Export Portal", description: "Portal B2B untuk koneksi eksportir Indonesia dengan buyer internasional.", image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=800", technologies: ["Next.js", "Express", "MongoDB"], link: "#" },
  { title: "Lumina Design System", description: "Design system komprehensif untuk ekosistem produk digital skala enterprise.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800", technologies: ["Figma", "Storybook", "Tailwind"], link: "#" },
];

const seedDB = async () => {
  await connectDB();
  await Service.deleteMany();
  await Portfolio.deleteMany();
  await Service.insertMany(services);
  await Portfolio.insertMany(portfolios);
  console.log("✅ Data berhasil di-seed!");
  process.exit();
};

seedDB();
