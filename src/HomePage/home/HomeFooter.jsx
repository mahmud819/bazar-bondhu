import { Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = [
  { label: "হোম", to: "/" },
  { label: "আমাদের সেবা", to: "/#services" },
  { label: "কীভাবে কাজ করে", to: "/#how-it-works" },
  { label: "যোগাযোগ", to: "/contact" },
];

export default function HomeFooter() {
  return (
    <footer className="bg-slate-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-green-400">Bazar</span><span className="text-white">Bondhu</span>
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
            আপনার বাজার, আমাদের দায়িত্ব। সহজে অর্ডার করুন, ঘরে বসে বাজার পান।
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
          {footerLinks.map(({ label, to }) => (
            <Link key={label} to={to} className="text-sm text-slate-200 transition hover:text-green-300">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-3">
          {[Facebook, Instagram, MessageCircle].map((Icon, index) => (
            <a
              key={index}
              href="#"
              aria-label={["Facebook", "Instagram", "Messaging"][index]}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-600"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} BazarBondhu. সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
