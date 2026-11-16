import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link href="/" className="text-2xl font-black text-slate-900 tracking-tighter">
          Data<span className="text-[#1E3A8A]">Craft</span>.
        </Link>

        <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
          <Link href="#catalog" className="hover:text-[#1E3A8A] transition-colors">Katalog</Link>
          <Link href="#contact" className="hover:text-[#1E3A8A] transition-colors">Kontak</Link>
        </div>

        <a href="#contact" className="hidden md:block bg-[#1E3A8A] text-white px-6 py-2.5 rounded-md text-sm font-bold hover:bg-slate-800 transition-colors">
          Hire Me
        </a>
      </div>
    </nav>
  );
}