import { Activity, Ambulance, ClipboardCheck, HeartPulse, MonitorCheck, Stethoscope } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "Heart Consultation",
    desc: "Focused evaluation for chest pain, breathlessness, palpitations, hypertension, and complex cardiac history.",
    icon: <Stethoscope className="h-6 w-6" />,
  },
  {
    title: "Interventional Cardiology",
    desc: "Specialist-led angiography, angioplasty, stenting, and pacemaker planning with hospital-based monitoring.",
    icon: <HeartPulse className="h-6 w-6" />,
  },
  {
    title: "Diagnostics",
    desc: "ECG, Echo, TMT, Doppler, and lab coordination designed for fast decision-making and clear follow-up.",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    title: "ICU & Emergency",
    desc: "Rapid cardiac assessment and ICU support for urgent heart symptoms and post-procedure observation.",
    icon: <Ambulance className="h-6 w-6" />,
  },
  {
    title: "Preventive Packages",
    desc: "Risk screening, routine cardiac checkups, and structured advice for long-term heart protection.",
    icon: <ClipboardCheck className="h-6 w-6" />,
  },
  {
    title: "Follow-Up Care",
    desc: "Medication review, recovery guidance, lifestyle counseling, and continued monitoring after treatment.",
    icon: <MonitorCheck className="h-6 w-6" />,
  },
];

const chips = ["Angioplasty", "Pacemaker", "2D Echo", "TMT", "ECG", "Doppler", "ICU", "Cardiac Checkup"];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand">Clinical Services</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl">
              Complete cardiac care under one roof.
            </h2>
            <p className="mt-6 text-lg font-medium leading-8 text-slate-600">
              The site experience now follows the hospital journey: consult, investigate, treat, monitor, and follow up.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-black text-slate-700">
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.05 }}
                className="rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:border-teal-200 hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-teal-50 text-brand">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black tracking-normal text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
