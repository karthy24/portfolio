import { motion, AnimatePresence } from "framer-motion"

export default function Modal({ open, onClose, children, title }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div
            className="relative glass w-full max-w-2xl p-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{title}</h3>
              <button onClick={onClose} className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20">
                Close
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
