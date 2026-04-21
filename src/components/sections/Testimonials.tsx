import { CheckCircle2, CreditCard, Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Begusarai",
    quote: "The consultation was clear and the staff helped us understand every step before treatment.",
  },
  {
    name: "Suman Devi",
    location: "Barauni",
    quote: "We did not need to travel to a metro city for the first decision. The team was calm and professional.",
  },
  {
    name: "Amit Singh",
    location: "Khagaria",
    quote: "Dr. Prashant explained the reports properly and gave a practical plan for follow-up care.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-20 text-white lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-xs font-black uppercase tracking-[0.24em] text-teal-300">Trust & Membership</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            A hospital brand patients can recognize and return to.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-slate-300">
            The membership card gives the site a real local program feel: practical, memorable, and tied to patient continuity.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {["30% off consultations", "20% off labs", "Member ID ready", "Follow-up friendly"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                <CheckCircle2 className="h-5 w-5 text-teal-300" />
                <span className="text-sm font-black text-white">{item}</span>
              </div>
            ))}
          </div>

          <img
            src="/images/memcard1.png"
            alt="Prashant Health membership card"
            className="mt-8 w-full rounded-md border border-white/10 bg-white shadow-2xl"
            loading="lazy"
          />
        </motion.div>

        <div className="grid content-start gap-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08 }}
              className="rounded-md border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="mb-5 flex gap-1 text-teal-300">
                {[...Array(5)].map((_, itemIndex) => (
                  <Star key={itemIndex} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-lg font-bold leading-8 text-white">"{review.quote}"</p>
              <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-base font-black text-slate-950">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-black text-white">{review.name}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{review.location}</p>
                </div>
              </div>
            </motion.article>
          ))}

          <div className="rounded-md border border-teal-300/30 bg-teal-300/10 p-6">
            <CreditCard className="h-8 w-8 text-teal-300" />
            <p className="mt-4 text-2xl font-black">Membership-led care</p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-300">
              Use the card artwork in campaigns, WhatsApp sharing, and appointment follow-ups for a consistent hospital identity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
