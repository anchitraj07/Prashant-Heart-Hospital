import { HeartPulse, MapPin, Timer } from "lucide-react";

const items = [
  { label: "Clinical Experience", value: "12+ Years", icon: <HeartPulse className="h-5 w-5" /> },
  { label: "Working Hours", value: "Mon - Sat | 10 AM - 8 PM", icon: <Timer className="h-5 w-5" /> },
  { label: "Hospital Location", value: "Zero Mile, Begusarai", icon: <MapPin className="h-5 w-5" /> },
];

export default function BottomBar() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-5 sm:px-6 md:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4 rounded-md border border-slate-200 bg-slate-50 p-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white text-brand shadow-sm">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              <p className="mt-1 font-black text-slate-950">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
