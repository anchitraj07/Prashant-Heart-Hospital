import { Menu, PhoneCall, X } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Facility", href: "#facility" },
  { name: "Doctors", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200 bg-white/95 py-3 shadow-sm backdrop-blur"
          : "bg-white/80 py-5 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-slate-950 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex min-w-0 items-center gap-3 text-left"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to homepage"
        >
          <img
            src="/images/flogo.png"
            alt="Prashant Heart Hospital logo"
            className="h-10 w-[82px] object-contain object-left sm:h-12 sm:w-[100px]"
          />
          <span className="min-w-0">
            <span className="block whitespace-nowrap text-base font-black leading-none tracking-normal text-brand sm:text-xl">
              Prashant Heart Hospital
            </span>
            <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 sm:block">
              Begusarai, Bihar
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 transition-colors hover:text-brand"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:09431411511"
            className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-900 shadow-sm transition hover:border-brand hover:text-brand"
          >
            <PhoneCall className="h-4 w-4" />
            Call Consultant
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-950 shadow-sm md:hidden"
          onClick={() => setIsMobileMenuOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full w-full border-y border-slate-200 bg-white px-4 py-5 shadow-xl md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-md px-3 py-4 text-lg font-black text-slate-900 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09431411511"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-brand px-5 py-4 font-black text-white"
            >
              <PhoneCall className="h-5 w-5" />
              Immediate Call
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
