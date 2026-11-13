import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Nama */}
        <Link href="/" className="text-xl font-bold text-white tracking-wider">
          MyPortofolio<span className="text-blue-500">.</span>
        </Link>

        {/* Menu Navigasi */}
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-blue-400 transition-colors">Tentang</Link>
          <Link href="#projects" className="hover:text-blue-400 transition-colors">Proyek</Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors">Kontak</Link>
        </div>

      </div>
    </nav>
  );
}