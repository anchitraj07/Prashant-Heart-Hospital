import { Award, BadgeCheck, ChevronLeft, ChevronRight, HeartHandshake, MapPinned } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const profilePoints = [
  {
    title: "Interventional Focus",
    desc: "Evaluation and treatment planning for complex cardiac patients with practical, region-aware guidance.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "North Bihar Access",
    desc: "Specialist care built for Begusarai families who should not have to travel far for every cardiac decision.",
    icon: <MapPinned className="h-5 w-5" />,
  },
  {
    title: "Patient Continuity",
    desc: "Consultation, diagnostics, procedure coordination, recovery, and follow-up kept in one care pathway.",
    icon: <HeartHandshake className="h-5 w-5" />,
  },
];

const doctors = [
  {
    name: "Dr. Seep Sethi",
    role: "Cardiac Care Specialist",
    image: "/images/Doctor1/seepsethi.jpeg",
    focus: "Consultation and patient review",
    objectPosition: "58% 44%",
  },
  {
    name: "Dr. Prashant Kashyap",
    role: "Interventional Cardiologist",
    image: "/images/Doctor2/WhatsApp%20Image%202025-11-24%20at%2010.36.13%20PM.jpeg",
    focus: "Cath lab leadership and procedure planning",
    objectPosition: "50% 45%",
  },
  {
    name: "Dr. Prashant Kashyap",
    role: "Cardiac Procedure Team",
    image: "/images/Doctor2/WhatsApp%20Image%202025-11-24%20at%2010.41.07%20PM.jpeg",
    focus: "Cardiac procedure readiness",
    objectPosition: "50% 45%",
  },
];

export default function About() {
  const [activeDoctor, setActiveDoctor] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveDoctor((current) => (current + 1) % doctors.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const showPreviousDoctor = () => {
    setActiveDoctor((current) => (current - 1 + doctors.length) % doctors.length);
  };

  const showNextDoctor = () => {
    setActiveDoctor((current) => (current + 1) % doctors.length);
  };

  const doctor = doctors[activeDoctor];

  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-100 shadow-sm">
            <img
              src="/images/prashant%20kashyap.png"
              alt="Portrait of Dr. Prashant Kashyap"
              className="h-[560px] w-full object-cover object-[52%_28%]"
              loading="lazy"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <img
              src="/images/drf1.jpeg"
              alt="Senior doctor at Prashant Heart Hospital"
              className="h-52 rounded-md border border-slate-200 object-cover object-[54%_42%]"
              loading="lazy"
            />
            <div className="rounded-md border border-slate-200 bg-slate-950 p-5 text-white">
              <Award className="h-8 w-8 text-red-400" />
              <p className="mt-8 text-4xl font-black">12+</p>
              <p className="mt-1 text-sm font-bold leading-6 text-slate-300">Years of cardiac experience and patient care.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand">Doctor Profile</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal text-slate-950 sm:text-5xl">
            Dr. Prashant Kashyap and his clinical team.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-slate-600">
            The website now puts the doctor and hospital identity first, using the real clinic photography rather than generic medical stock. The tone is confident, direct, and built for families looking for dependable cardiac care.
          </p>

          <div className="mt-8 grid gap-3">
            {profilePoints.map((point) => (
              <article key={point.title} className="flex gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-50 text-brand">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-black text-slate-950">{point.title}</h3>
                  <p className="mt-1 text-sm font-medium leading-6 text-slate-600">{point.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-md border-l-4 border-brand bg-slate-50 p-5">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Care Promise</p>
            <p className="mt-2 text-xl font-black leading-8 text-slate-950">
              Clear diagnosis, timely intervention, and follow-up patients can understand.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-md border border-slate-200 bg-slate-950 text-white shadow-sm">
            <div className="grid sm:grid-cols-[0.88fr_1.12fr]">
              <button
                type="button"
                onClick={showNextDoctor}
                className="relative h-80 overflow-hidden bg-slate-900 text-left sm:h-full"
                aria-label="Show next doctor"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={doctor.image}
                    src={doctor.image}
                    alt={`${doctor.name} at Prashant Heart Hospital`}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectPosition: doctor.objectPosition }}
                    initial={{ opacity: 0, x: 42, scale: 1.08 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -42, scale: 1.04 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
                <span className="absolute bottom-4 right-4 rounded-md bg-white/90 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-950 shadow-sm">
                  Click Next
                </span>
              </button>
              <div className="p-6">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-teal-300">Doctors</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={doctor.name + doctor.image}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.45 }}
                  >
                    <h3 className="mt-4 text-3xl font-black leading-tight">{doctor.name}</h3>
                    <p className="mt-2 font-bold text-slate-300">{doctor.role}</p>
                    <p className="mt-6 text-sm font-medium leading-7 text-slate-400">{doctor.focus}</p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {doctors.map((item, index) => (
                      <button
                        key={item.image}
                        type="button"
                        onClick={() => setActiveDoctor(index)}
                        className={`h-2 rounded-full transition-all ${
                          activeDoctor === index ? "w-8 bg-teal-300" : "w-2 bg-white/30"
                        }`}
                        aria-label={`Show doctor ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={showPreviousDoctor}
                      className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                      aria-label="Show previous doctor"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextDoctor}
                      className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-300 text-slate-950 transition hover:bg-white"
                      aria-label="Show next doctor"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
