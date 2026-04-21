import { Camera, ShieldCheck, UsersRound } from "lucide-react";
import { motion } from "motion/react";

const gallery = [
  {
    src: "/images/op1.jpeg",
    alt: "Dr. Prashant Kashyap with clinical team in operation area",
    title: "Procedure Team",
    note: "Coordinated cardiac care with trained OT and support staff.",
  },
  {
    src: "/images/dr1.jpeg",
    alt: "Consultation room at Prashant Heart Hospital",
    title: "Consultation Room",
    note: "Doctor-led diagnosis with clear patient communication.",
  },
  {
    src: "/images/st1.jpeg",
    alt: "Dr. Prashant Kashyap at hospital branding wall",
    title: "Hospital Identity",
    note: "A dedicated cardiac centre for Begusarai and nearby districts.",
  },
];

const features = [
  { label: "Cath Lab Coordination", icon: <ShieldCheck className="h-5 w-5" /> },
  { label: "Trained Cardiac Staff", icon: <UsersRound className="h-5 w-5" /> },
  { label: "Real Hospital Photography", icon: <Camera className="h-5 w-5" /> },
];

export default function Staff() {
  return (
    <section id="facility" className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand">Facility & Team</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl">
              Care that looks like the place patients actually visit.
            </h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:w-[520px]">
            {features.map((feature) => (
              <div key={feature.label} className="rounded-md border border-slate-200 bg-white p-4">
                <div className="mb-3 text-brand">{feature.icon}</div>
                <p className="text-sm font-black leading-5 text-slate-900">{feature.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={`${index === 0 ? "h-[430px]" : "h-[430px]"} w-full object-cover`}
                  loading="lazy"
                />
                <div className="border-t border-slate-200 bg-white p-5">
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{item.note}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
