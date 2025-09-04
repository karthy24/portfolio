import { useState } from "react"
import { motion } from "framer-motion"
import { profile } from "../data_profile"
import Modal from "./Modal"

export default function Projects() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const openModal = (p) => { setActive(p); setOpen(true); }

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {profile.projects.map((p) => (
          <motion.button
            key={p.title}
            className="glass p-5 text-left hover:bg-white/10 transition"
            whileHover={{ y: -4 }}
            onClick={() => openModal(p)}
          >
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-1 rounded-full bg-white/10 text-xs">{t}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        <p className="text-neutral-300">{active?.description}</p>
        {active?.media && (
          <div className="mt-4">
            {/* Placeholder for image/video if added later */}
            <img src={active.media} alt={active.title} className="rounded-xl" />
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-2">
          {active?.tags?.map((t) => (
            <span key={t} className="px-2 py-1 rounded-full bg-white/10 text-xs">{t}</span>
          ))}
        </div>
      </Modal>
    </section>
  )
}
