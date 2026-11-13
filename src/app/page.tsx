import React from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      
      <Navbar />

      {/* Kontainer Utama */}
      <div className="max-w-2xl text-center space-y-6 mt-16">
        
        {/* Foto Profil (Placeholder) */}
        <div className="w-32 h-32 mx-auto rounded-full bg-slate-700 border-4 border-blue-500 shadow-lg flex items-center justify-center text-sm text-gray-400">
          [Foto Lu]
        </div>

        {/* Judul & Deskripsi */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Halo, gue <span className="text-blue-500">Developer</span> Web.
        </h1>
        <p className="text-lg text-slate-400">
          Selamat datang di portofolio pertama gue yang dibangun pakai Next.js dan Tailwind CSS. Mari kita bikin sesuatu yang keren!
        </p>

        {/* Tombol CTA */}
        <div className="flex gap-4 justify-center pt-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all">
            Lihat Proyek
          </button>
          <button className="bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white font-semibold py-3 px-6 rounded-lg transition-all">
            Hubungi Saya
          </button>
        </div>

      </div>
    </main>
  );
}