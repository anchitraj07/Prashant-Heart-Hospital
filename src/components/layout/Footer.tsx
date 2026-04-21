import { MapPin, PhoneCall } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/images/flogo.png"
                alt="Prashant Heart Hospital logo"
                className="h-12 w-[100px] object-contain object-left"
              />
              <div>
                <p className="text-2xl font-black leading-none">Prashant Heart Hospital</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.22em] text-teal-300">Expert cardiac care</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm font-medium leading-7 text-slate-400">
              Specialist cardiac consultation, diagnostics, ICU support, and interventional care for Begusarai and North Bihar.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">Services</p>
            <div className="mt-5 grid gap-3 text-sm font-bold text-slate-400">
              <a href="#services" className="hover:text-white">Heart Consultation</a>
              <a href="#services" className="hover:text-white">Angioplasty & Stenting</a>
              <a href="#services" className="hover:text-white">ECG, Echo, TMT</a>
              <a href="#services" className="hover:text-white">ICU Care</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">Reach Us</p>
            <div className="mt-5 grid gap-4 text-sm font-bold text-slate-400">
              <a href="tel:09431411511" className="flex gap-3 hover:text-white">
                <PhoneCall className="h-5 w-5 text-teal-300" />
                +91 94314 11511
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lohaninagar%20Zero%20Mile%20Begusarai%20Bihar"
                target="_blank"
                rel="noreferrer"
                className="flex gap-3 hover:text-white"
              >
                <MapPin className="h-5 w-5 shrink-0 text-teal-300" />
                Lohaninagar, Zero Mile, Begusarai, Bihar
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} Prashant Heart Hospital. All rights reserved.</p>
          <p>Built for local patients, families, and referrals.</p>
        </div>
      </div>
    </footer>
  );
}
