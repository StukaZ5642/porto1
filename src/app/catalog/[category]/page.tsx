// src/app/catalog/[category]/page.tsx
"use client"; // <-- Tambahin ini di paling atas

import Link from "next/link";
import { fastenersData } from "../../../data/fasteners";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation"; // <-- Import ini

export default function CategoryPage() {
  const pathname = usePathname(); // <-- Ambil URL saat ini
  
  // URL-nya misal "/catalog/fasteners". Kita ambil kata terakhirnya aja.
  const currentCategory = pathname.split("/").pop(); 
  
  console.log("Kategori dari URL:", currentCategory); // Cek di terminal

  let items: any[] = [];
  
  // Logika pengecekan
  if (currentCategory === "fasteners") {
    items = fastenersData;
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
        <h1 className="text-2xl font-bold text-slate-500">Data untuk kategori "{currentCategory}" belum tersedia.</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-700 mb-8 transition-colors">
          <ArrowLeft size={18} /> Kembali ke Kategori
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 capitalize mb-2">
            {currentCategory} {/* <-- Pake variabel baru ini */}
          </h1>
          <p className="text-slate-500">Pilih komponen di bawah ini untuk melihat spesifikasi teknis dan Product Identity.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {items.map((item, index) => (
            <Link 
              key={item.id} 
              href={`/catalog/${currentCategory}/${item.id}`} // <-- Pake variabel baru ini
              className={`flex items-center justify-between p-6 hover:bg-teal-50 transition-colors group
                ${index !== items.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {item.productName}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Group: {item.productGroup} • Sub: {item.subCategory}
                </p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-teal-500 transition-colors" />
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}