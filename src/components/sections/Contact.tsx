import { CalendarDays, Clock, MapPin, PhoneCall, Send } from "lucide-react";
import { motion } from "motion/react";

const contacts = [
  {
    label: "Call",
    value: "+91 94314 11511",
    href: "tel:09431411511",
    icon: <PhoneCall className="h-5 w-5" />,
  },
  {
    label: "Location",
    value: "Lohaninagar, Zero Mile, Begusarai, Bihar",
    href: "https://www.google.com/maps/search/?api=1&query=Lohaninagar%20Zero%20Mile%20Begusarai%20Bihar",
    icon: <MapPin className="h-5 w-5" />,
  },
  {
    label: "Hours",
    value: "Mon - Sat, 10:00 AM - 8:00 PM",
    href: "#contact",
    icon: <Clock className="h-5 w-5" />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          className="grid overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="bg-slate-950 p-6 text-white sm:p-8 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-300">Contact</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Need heart advice today?
            </h2>
            <p className="mt-5 text-base font-medium leading-7 text-slate-300">
              Call the hospital, share your symptoms, or request a callback. The front desk can guide you toward consultation, diagnostics, or urgent review.
            </p>

            <div className="mt-8 grid gap-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.label === "Location" ? "_blank" : undefined}
                  rel={contact.label === "Location" ? "noreferrer" : undefined}
                  className="flex gap-4 rounded-md border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-300 text-slate-950">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">{contact.label}</p>
                    <p className="mt-1 font-black leading-6 text-white">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-8 lg:p-12">
            <div className="mb-8 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-teal-50 text-brand">
                <CalendarDays className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-normal text-slate-950">Request a callback</h3>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">This form is ready for a future backend or WhatsApp integration.</p>
              </div>
            </div>

            <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Full Name</span>
                <input className="rounded-md border border-slate-200 bg-white px-4 py-4 font-bold outline-none transition focus:border-brand focus:ring-4 focus:ring-teal-100" placeholder="Patient name" required />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Phone Number</span>
                <input type="tel" className="rounded-md border border-slate-200 bg-white px-4 py-4 font-bold outline-none transition focus:border-brand focus:ring-4 focus:ring-teal-100" placeholder="+91 00000 00000" required />
              </label>
              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Need</span>
                <select className="rounded-md border border-slate-200 bg-white px-4 py-4 font-bold outline-none transition focus:border-brand focus:ring-4 focus:ring-teal-100">
                  <option>Cardiology consultation</option>
                  <option>Emergency heart symptoms</option>
                  <option>Echo / TMT / ECG</option>
                  <option>Membership card enquiry</option>
                </select>
              </label>
              <button className="mt-2 inline-flex items-center justify-center gap-3 rounded-md bg-brand px-6 py-4 text-lg font-black text-white shadow-lg shadow-teal-100 transition hover:bg-brand-dark">
                Send Request
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
