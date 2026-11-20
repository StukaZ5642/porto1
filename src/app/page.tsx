import Link from "next/link";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { categories } from "../data/categories"; 
import { 
  Mail, Briefcase, MessageCircle 
} from "lucide-react"; // <-- Link dihapus dari sini

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-teal-300 selection:text-teal-900">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl space-y-8">
          
          <div className="inline-block bg-teal-50 border border-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
            Data Specialist & Web Developer
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Menstrukturisasi Data Menjadi <span className="text-teal-700">Informasi Berharga</span>.
          </h1>
          
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Spesialis dalam standardisasi data material (SAP MDG) dan klasifikasi teknis. Saya mengubah data mentah yang rumit menjadi sistem yang rapi, mudah dibaca, dan siap digunakan untuk kebutuhan industri.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {/* Tombol Utama */}
            <a href="#catalog" className="bg-teal-300 hover:bg-teal-400 text-teal-900 hover:text-white font-bold py-4 px-8 rounded-md transition-all shadow-lg shadow-teal-500/20">
              Lihat Katalog Material {/* Ini udah gw benerin */}
            </a>
            <a href="#contact" className="bg-white border-2 border-gray-200 hover:border-teal-300 text-slate-700 font-bold py-4 px-8 rounded-md transition-all shadow-lg shadow-gray-300/50">
              Hubungi Saya
            </a>
          </div>

        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-black text-teal-700">500+</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Material Terklasifikasi</p>
          </div>
          <div>
            <p className="text-4xl font-black text-teal-700">100%</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Akurasi Standar</p>
          </div>
          <div>
            <p className="text-4xl font-black text-teal-700">26</p>
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-2">Kategori Industri</p>
          </div>
        </div>
      </section>

      {/* --- CATALOG SECTION (Grid Kategori) --- */}
      <section id="catalog" className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-widest text-teal-700 uppercase">Studi Kasus</h2>
            <h3 className="text-4xl font-extrabold text-slate-900">Kategori Material Industri</h3>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Pilih kategori di bawah untuk melihat daftar material dan spesifikasi teknisnya.
            </p>
          </div>

          {/* Grid Kategori */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8">
            {categories.map((category, index) => {
              const isLastTwo = index === categories.length - 2;
              const centerLastTwo = isLastTwo ? "md:col-start-2" : "";

              return (
                <Link
                  key={category.id}
                  href={category.isActive ? `/catalog/${category.id}` : "#"} 
                  className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 flex flex-col md:col-span-2 ${centerLastTwo}
                    ${category.isActive 
                      ? 'cursor-pointer hover:shadow-2xl hover:-translate-y-1 hover:border-gray-300' 
                      : 'opacity-60 grayscale cursor-not-allowed'
                    }`}
                >
                  <div className="relative w-full aspect-square bg-slate-100 overflow-hidden">
                    <Image 
                      src={category.image}
                      alt={category.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${category.isActive ? 'group-hover:scale-110' : ''}`}
                    />
                    {!category.isActive && (
                      <div className="absolute inset-0 bg-white/40 flex items-center justify-center">
                        <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full">Coming Soon</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 text-center border-t border-gray-100">
                    <h4 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {category.name}
                    </h4>
                  </div>
                </Link> /* <-- INI YANG DIGANTI */
              );
            })}
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
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-lg">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="mailto:email@anda.com" className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md font-bold transition-colors">
                <Mail size={20} /> Email
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#0A66C2] hover:bg-[#004182] text-white px-8 py-3 rounded-md font-bold transition-colors shadow-lg">
                <Briefcase size={20} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 w-full"></div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Nama Anda. All rights reserved.</p>
            <p>Dibangun dengan Next.js & Tailwind CSS.</p>
          </div>

        </div>
      </footer>
    </main>
  );
}