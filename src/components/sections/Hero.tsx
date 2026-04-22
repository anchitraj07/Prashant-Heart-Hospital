import { ArrowRight, BadgeCheck, MapPin, PhoneCall, ShieldPlus } from "lucide-react";
import { motion } from "motion/react";

const heroStats = [
  { value: "12+", label: "Years of cardiac practice" },
  { value: "24/7", label: "Emergency support line" },
  { value: "North Bihar", label: "Specialist cardiac care" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-teal-100 bg-teal-50 px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-brand">
            <ShieldPlus className="h-4 w-4" />
            Heart care in Begusarai
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
            Advanced cardiac care, closer to home.
          </h1>

          <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-slate-600">
            Prashant Heart Hospital brings specialist consultation, diagnostics, ICU care, and interventional cardiology to Begusarai with a patient-first clinical team.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:09431411511"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-slate-950 px-6 py-4 text-base font-black text-white shadow-lg shadow-slate-200 transition hover:bg-slate-800"
            >
              <PhoneCall className="h-5 w-5" />
              Call +91 94314 11511
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-slate-200 bg-white px-6 py-4 text-base font-black text-slate-900 transition hover:border-brand hover:text-brand"
            >
              Book Visit
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-9 flex items-start gap-3 rounded-md border border-slate-200 bg-slate-50 p-4 text-slate-700">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" />
            <p className="text-sm font-bold leading-6">
              Lohaninagar, Zero Mile, Begusarai, Bihar
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: 36, clipPath: "inset(0 0 0 18%)" }}
              animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0 0%)" }}
              transition={{ duration: 0.95, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-md border border-slate-200 bg-gradient-to-b from-white to-slate-50 shadow-xl"
            >
              <motion.img
                src="/images/prashant-kashyap.png"
                alt="Dr. Prashant Kashyap in consultation room"
                className="h-[500px] w-full object-contain object-bottom sm:h-[640px] lg:h-[680px]"
                loading="eager"
                initial={{ scale: 1.14 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.25, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/45 via-slate-950/10 to-transparent"></div>

              <div className="absolute inset-x-4 bottom-4 grid gap-3 sm:inset-x-6 sm:bottom-6 lg:grid-cols-[1.1fr_0.9fr]">
                <motion.div
                  initial={{ opacity: 0, x: -54, y: 42, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-md border border-white/70 bg-white/95 p-4 shadow-2xl backdrop-blur sm:p-5"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <BadgeCheck className="h-5 w-5" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] sm:text-xs">Lead Cardiologist</span>
                  </div>
                  <p className="mt-3 text-2xl font-black leading-[1.06] text-slate-950 sm:text-3xl">
                    Dr. Prashant Kashyap
                  </p>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 sm:text-sm">
                    Interventional cardiology, consultation, and cardiac emergency care.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 54, y: 42, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden rounded-md border border-teal-100 bg-teal-50/95 p-4 shadow-2xl backdrop-blur sm:block"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand sm:text-xs">Known For</p>
                  <div className="mt-3 grid gap-2 text-sm font-black text-slate-800">
                    <span>Angioplasty</span>
                    <span>Pacemaker Care</span>
                    <span>Cardiac ICU</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/10 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-slate-950 px-6 py-6 lg:px-8">
              <p className="text-2xl font-black text-white">{stat.value}</p>
              <p className="mt-1 text-sm font-bold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
