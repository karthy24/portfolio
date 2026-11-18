import { useState } from 'react';
import { personal } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 px-6 sm:px-12 md:px-16 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Massive Editorial Headline */}
        <div className="pb-16 border-b border-white/10 mb-16">
          <p className="font-mono text-xs text-primary-400 uppercase tracking-[0.25em] mb-4">06 / Connect</p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.05]">
            Let's build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-white to-neutral-500">
              what's next.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Direct Inquiries */}
          <div className="lg:col-span-6 space-y-12">
            <div>
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-2">Direct Contact</p>
              <a
                href={`mailto:${personal.email}`}
                className="text-2xl sm:text-3xl font-mono text-white hover:text-primary-300 transition-colors underline underline-offset-8"
              >
                {personal.email} ↗
              </a>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">Connect on Platforms</p>
              <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 flex items-center justify-between font-mono text-sm text-neutral-300 hover:text-white group"
                >
                  <span className="uppercase tracking-wider">GitHub // @karthy24</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="py-4 flex items-center justify-between font-mono text-sm text-neutral-300 hover:text-white group"
                >
                  <span className="uppercase tracking-wider">LinkedIn // Inquiries &amp; Network</span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </a>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noreferrer"
                  download="Karthikeyan-N-Resume.pdf"
                  className="py-4 flex items-center justify-between font-mono text-sm text-neutral-300 hover:text-white group"
                >
                  <span className="uppercase tracking-wider">Curriculum Vitae (PDF)</span>
                  <span className="group-hover:translate-x-1 transition-transform">↓</span>
                </a>
              </div>
            </div>

            <div className="font-mono text-xs text-neutral-500">
              <p>RESPONSE TIME: USUALLY WITHIN 24 HOURS</p>
              <p className="mt-1">OPEN FOR: FULL-TIME ROLES · FREELANCE CONTRACTS</p>
            </div>
          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-6 p-8 border border-white/10 bg-white/[0.015]">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-6 font-mono text-sm">
              // SEND DISPATCH
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-2">
                  Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Karthikeyan N"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="font-mono text-xs text-neutral-400 uppercase tracking-wider block mb-2">
                  Project Scope or Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your project, timeline, or engineering role..."
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-white text-dark-950 hover:bg-neutral-200 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {sent ? (
                  <span>DISPATCH PREPARED IN CLIENT ✓</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
