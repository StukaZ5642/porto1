import { 
  Settings, Wrench, Gauge, Ruler, Package, 
  Mail, Briefcase, MessageCircle, ArrowRight, Wind
} from "lucide-react"; // Import ikon

import Navbar from "../components/Navbar";

export default function Home() {
  // Data Dummy Material (Nanti lu tinggal ganti)
  const materials = [
    { id: 1, category: "Fastener", title: "Hexagonal Bolt", icon: <Wrench size={40} className="text-[#1E3A8A]" />, desc: "Elemen pengikat mekanis berulir luar untuk menyatukan komponen." },
    { id: 2, category: "Rotating Equipment", title: "Centrifugal Pump", icon: <Settings size={40} className="text-[#1E3A8A]" />, desc: "Pompa sentrifugal untuk memindahkan fluida dengan konversi energi kinetik." },
    { id: 3, category: "Rotating Equipment", title: "Electric Motor", icon: <Settings size={40} className="text-[#1E3A8A]" />, desc: "Motor listrik penggerak utama untuk berbagai aplikasi industri." },
    { id: 4, category: "Valve", title: "Gate Valve", icon: <Gauge size={40} className="text-[#1E3A8A]" />, desc: "Katup gerbang untuk mengatur aliran fluida dengan hambatan minimal." },
    { id: 5, category: "Measuring Tools", title: "Vernier Caliper", icon: <Ruler size={40} className="text-[#1E3A8A]" />, desc: "Jangka sorong presisi untuk mengukur dimensi internal dan eksternal." },
    { id: 6, category: "Pneumatic", title: "Pneumatic Cylinder", icon: <Wind size={40} className="text-[#1E3A8A]" />, desc: "Aktuator mekanis yang menggunakan gas terkompresi untuk menghasilkan gerakan linier." },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-[#1E3A8A] selection:text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-8">
          
          <div className="inline-block bg-blue-50 border border-blue-100 text-[#1E3A8A] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            Data Specialist & Web Developer
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Menstrukturisasi Data Menjadi <span className="text-[#1E3A8A]">Informasi Berharga</span>.
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Spesialis dalam standardisasi data material (SAP MDG) dan klasifikasi teknis. Saya mengubah data mentah yang rumit menjadi sistem yang rapi, mudah dibaca, dan siap digunakan untuk kebutuhan industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a href="#catalog" className="bg-[#1E3A8A] hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-md transition-all shadow-lg shadow-blue-900/20">
              Lihat Katalog Material
            </a>
            <a href="#contact" className="bg-white border-2 border-gray-200 hover:border-slate-300 text-slate-700 font-bold py-4 px-8 rounded-md transition-all">
              Hubungi Saya
            </a>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-[#1E3A8A]">500+</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Material Terklasifikasi</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#1E3A8A]">100%</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Akurasi Standar</p>
          </div>
          <div>
            <p className="text-4xl font-black text-[#1E3A8A]">5+</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Kategori Industri</p>
          </div>
        </div>
      </section>

      {/* --- CATALOG SECTION (Ganti Projects) --- */}
      <section id="catalog" className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-[#1E3A8A] uppercase">Studi Kasus</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Interactive Material Catalog</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Eksplorasi demo klasifikasi data *Master Data* untuk berbagai komponen industri. (Fitur filter akan diaktifkan di tahap *coding* selanjutnya).
            </p>
          </div>

          {/* Tombol Filter (Visual Only untuk sekarang) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md">Semua</button>
            <button className="bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-bold transition-colors">Fastener</button>
            <button className="bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-bold transition-colors">Rotating Equipment</button>
            <button className="bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-bold transition-colors">Valve</button>
            <button className="bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-bold transition-colors">Measuring Tools</button>
            <button className="bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-bold transition-colors">Pneumatic</button>
          </div>

          {/* Grid Material */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((mat) => (
              <div key={mat.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer">
                
                {/* Area Gambar / Icon */}
                <div className="w-full aspect-[4/3] bg-slate-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100 group-hover:bg-blue-50 transition-colors">
                  {mat.icon}
                </div>
                
                {/* Info */}
                <div className="flex-grow">
                  <span className="text-xs font-bold text-[#1E3A8A] bg-blue-50 px-3 py-1 rounded-full mb-4 inline-block">
                    {mat.category}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{mat.title}</h4>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">{mat.desc}</p>
                </div>

                {/* Tombol */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-[#1E3A8A] font-bold text-sm group-hover:text-blue-700">
                  Lihat Spesifikasi <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- FOOTER (Info Kontak + Ikon) --- */}
      <footer id="contact" className="bg-slate-900 text-white pt-20 pb-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="max-w-md">
              <h2 className="text-3xl font-black mb-4">Mari Berkolaborasi.</h2>
              <p className="text-slate-400 text-lg">
                Butuh bantuan untuk menstrukturisasi data material atau membangun aplikasi web untuk bisnis Anda? Mari diskusikan.
              </p>
            </div>
            
            {/* Tombol Kontak dengan Ikon */}
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-lg">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="mailto:email@anda.com" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-bold transition-colors">
                <Mail size={20} /> Email
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-lg">
                <Briefcase  size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 w-full"></div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Nama Anda. All rights reserved.</p>
            <p>Dibangun dengan Next.js & Tailwind CSS.</p>
          </div>

        </div>
      </footer>
    </main>
  );
}