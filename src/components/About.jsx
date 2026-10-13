import { personal } from '../data';

const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'Internships', value: '2' },
  { label: 'Tech Skills', value: '20+' },
  { label: 'Months Experience', value: '9+' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <p className="text-primary-400 font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
            <h2 className="section-heading">Passionate Developer &amp;<br/>Digital Marketer</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-cyan-400 rounded-full mb-8" />

            <div className="space-y-4 text-neutral-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Karthikeyan N</span>, a web developer and full-stack engineer
                based in <span className="text-primary-300">Tamil Nadu, India</span>. I specialize in building responsive,
                user-friendly web applications with a strong eye for design and performance.
              </p>
              <p>
                With internship experience at <span className="text-white font-medium">BluonTech</span> and{' '}
                <span className="text-white font-medium">Vibhathi Labs</span>, I've worked on real-world web and database
                projects — ranging from responsive front-end interfaces to SQL database management.
              </p>
              <p>
                Beyond coding, I have a strong interest in <span className="text-cyan-300">Data Analytics</span> (Power BI,
                Advanced Excel) and <span className="text-amber-300">Digital Marketing</span> (SEO, Google Ads, Google Analytics),
                making me a well-rounded professional who understands both technical and business perspectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a href={`mailto:${personal.email}`} className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Let's Connect
              </a>
              <a href={personal.resume} target="_blank" rel="noreferrer" className="btn-outline">
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Stats side */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-6 text-center"
              >
                <p className="text-4xl font-extrabold gradient-text mb-2">{stat.value}</p>
                <p className="text-neutral-400 text-sm">{stat.label}</p>
              </div>
            ))}

            {/* Info card */}
            <div className="glass-card p-6 col-span-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-2xl flex-shrink-0">
                📍
              </div>
              <div>
                <p className="text-white font-medium">{personal.location}</p>
                <p className="text-neutral-400 text-sm">Available for remote &amp; on-site roles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
