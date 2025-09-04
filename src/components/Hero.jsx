import { motion } from "framer-motion"
import { profile } from "../data_profile"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-30 pointer-events-none" />
      <motion.div
        className="mx-auto max-w-5xl px-6 py-28 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight gradient-text"
          initial={{ letterSpacing: "-0.05em" }}
          animate={{ letterSpacing: "-0.02em" }}
          transition={{ duration: 1.2 }}
        >
          {profile.name}
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-300">{profile.role}</p>
        <p className="mt-6 max-w-3xl mx-auto text-neutral-300">{profile.summary}</p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a href="mailto:{profile.email}" className="glass px-4 py-2">Email</a>
          <a href={profile.linkedin} target="_blank" className="glass px-4 py-2">LinkedIn</a>
          <a href="#projects" className="glass px-4 py-2">View Projects</a>
        </div>
      </motion.div>

      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl bg-violet-500/30" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl bg-emerald-500/30" />
    </section>
  )
}
