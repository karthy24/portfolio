import { motion } from "framer-motion"
import { profile } from "../data_profile"

function Item({ t, i }) {
  return (
    <motion.div
      className="relative pl-6"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
    >
      <div className="absolute left-2 top-2 h-full w-0.5 bg-white/10" />
      <div className="glass p-4">
        <div className="text-sm text-neutral-400">{t.period}</div>
        <div className="font-semibold">{t.title}</div>
        <div className="text-neutral-300">{t.place}</div>
        {t.notes && <div className="mt-1 text-sm text-neutral-300">{t.notes}</div>}
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Education & Internships</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="mb-3 font-semibold text-neutral-200">Education</h3>
          <div className="space-y-4">
            {profile.education.map((t, i) => <Item key={i} t={t} i={i} />)}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-semibold text-neutral-200">Internships</h3>
          <div className="space-y-4">
            {profile.internships.map((t, i) => <Item key={i} t={t} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
