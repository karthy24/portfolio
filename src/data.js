// ──────────────────────────────────────────────
//  Portfolio Data — Karthikeyan N
// ──────────────────────────────────────────────

export const personal = {
  name: 'Karthikeyan N',
  title: 'Web Developer & Full-Stack Engineer',
  tagline: 'Building modern web experiences with clean code, smart data, and pixel-perfect design.',
  email: 'karthikeyan@email.com',     // ← update with real email
  location: 'Tamil Nadu, India',
  github: 'https://github.com/karthy24',
  linkedin: 'https://linkedin.com/in/',
  resume: '/Karthikeyan-N-Resume.pdf',
};

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/30',
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Responsive Design', 'UI/UX'],
  },
  {
    category: 'Backend & Database',
    icon: '⚙️',
    color: 'from-cyan-500 to-blue-600',
    border: 'border-cyan-500/30',
    items: ['Node.js', 'Express.js', 'REST APIs', 'SQL', 'MySQL', 'Oracle Apex', 'DBMS'],
  },
  {
    category: 'Data Analytics',
    icon: '📊',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-500/30',
    items: ['Power BI', 'Advanced Excel', 'Data Analytics', 'Data Visualization'],
  },
  {
    category: 'Digital Marketing',
    icon: '📈',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/30',
    items: ['SEO', 'Google Ads', 'Google Analytics', 'Google Search Console', 'Google Tag Manager'],
  },
  {
    category: 'Languages & Tools',
    icon: '🛠️',
    color: 'from-rose-500 to-pink-600',
    border: 'border-rose-500/30',
    items: ['Java', 'Python (Basic)', 'Git', 'GitHub', 'VS Code', 'Figma'],
  },
];

export const projects = [
  {
    title: 'Smart Xerox, Printing & Document Upload Management System',
    description:
      'A modern full-stack document printing and e-governance management platform deployed in production. Customers scan a counter QR code to upload documents (PDF/DOCX/Images) without WhatsApp, receiving unique instant tokens. Features real-time shop admin dashboard with Web Audio alerts and automated 24-hour cloud storage cleanup.',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Realtime', 'Python', 'Vercel'],
    icon: '🖨️',
    color: 'from-orange-500/20 to-amber-600/10',
    border: 'border-orange-500/20',
    accent: '#ff5a00',
    highlights: [
      'Contact-free QR code document upload supporting up to 20 files & 25MB per file',
      'Real-time shop admin dashboard with instant audio chimes and in-browser printing',
      'Automated 24-hour privacy retention policy with background cloud purge',
      'Bilingual interface (English & தமிழ்) optimized for local retail operations',
    ],
    github: 'https://github.com/karthy24',
    demo: 'https://pranav-esevai-centre.vercel.app',
  },
  {
    title: 'Real-Time Fall Detection & Alert System',
    description:
      'Real-time AI fall detection system built with YOLO and OpenCV for elderly care and monitoring. Integrates SMS and email notifications using Twilio and SMTP services.',
    tags: ['Python', 'YOLO', 'OpenCV', 'Twilio', 'SMTP', 'AI/ML'],
    icon: '🧠',
    color: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/20',
    accent: '#8b5cf6',
    highlights: [
      'Real-time AI-based fall detection using YOLO object detection',
      'Automated SMS & email alerts via Twilio and SMTP',
      'Designed for elderly care monitoring and safety',
    ],
    github: '#',
    demo: null,
  },
  {
    title: 'AgriGuide: Intelligent Irrigation Scheduling',
    description:
      'A MERN stack irrigation dashboard providing AI-driven crop-based water recommendations to farmers, with real-time data and RESTful API integration.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'MERN'],
    icon: '🌾',
    color: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/20',
    accent: '#10b981',
    highlights: [
      'MERN stack dashboard with crop-specific irrigation recommendations',
      'RESTful APIs with real-time React.js interface',
      'Helps farmers optimise water usage efficiently',
    ],
    github: '#',
    demo: null,
  },
  {
    title: 'AI Image Generation System',
    description:
      'A MERN stack AI image creation tool powered by OpenAI API. Features secure backend processing with Express.js to prevent API credential exposure.',
    tags: ['React.js', 'Node.js', 'Express.js', 'OpenAI API', 'MERN', 'MongoDB'],
    icon: '🎨',
    color: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/20',
    accent: '#06b6d4',
    highlights: [
      'AI-powered image generation via OpenAI API',
      'Secure Express.js backend hiding API credentials',
      'Full MERN stack with React.js frontend',
    ],
    github: '#',
    demo: null,
  },
];

export const experience = [
  {
    role: 'Web Developer Intern',
    company: 'BluonTech',
    period: 'Jan 2025 – Jun 2025',
    location: 'Kovilpatti',
    icon: '💻',
    color: 'border-primary-500/40',
    accent: '#6366f1',
    description: [
      'Obtained hands-on experience in HTML, CSS, JavaScript, and Bootstrap for designing responsive web pages and interfaces.',
      'Created and designed responsive websites with neat layout and strong front-end capabilities.',
    ],
  },
  {
    role: 'SQL Trainee Intern',
    company: 'Vibhathi Labs',
    period: 'Jul 2024 – Sep 2024',
    location: 'Chennai',
    icon: '🗄️',
    color: 'border-cyan-500/40',
    accent: '#06b6d4',
    description: [
      'Learned core concepts of DBMS including SQL queries, database design, and management.',
      'Acquired knowledge of Oracle Apex and the fundamentals of working with relational databases.',
    ],
  },
];
