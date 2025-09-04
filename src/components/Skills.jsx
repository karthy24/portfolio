import { motion } from "framer-motion"
import { profile } from "../data_profile"

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
      >
        {profile.skills.map((s) => (
          <motion.div
            key={s}
            className="glass px-4 py-2 text-center"
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          >
            {s}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
