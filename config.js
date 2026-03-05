/**
 * ============================================================
 *  PORTFOLIO CONFIG
 *  ============================================================
 *  This is the ONLY file you need to edit to customize your
 *  entire portfolio. Update the values below and the site
 *  rebuilds itself automatically.
 *
 *  HTML is supported in:  quote, bio[], project.desc
 *  All other fields:      plain text only
 * ============================================================
 */

const CONFIG = {

  /* ----------------------------------------------------------
     THEME — change colors here, no CSS editing needed
  ---------------------------------------------------------- */
  theme: {
    bg:     '#0a0a0a',   // page background
    fg:     '#f0f0ee',   // primary text
    accent: '#c8f135',   // lime green highlight
    muted:  '#555',      // secondary text / borders (light)
    border: '#1c1c1c',   // subtle border
    card:   '#0f0f0f',   // card / alternate section background
  },

  /* ----------------------------------------------------------
     SEO — page title and meta description
  ---------------------------------------------------------- */
  seo: {
    title:       'Hamza Patwa — Software Engineer',
    description: 'CS Student & Software Engineer at CUNY Queens College. Building intelligent, scalable systems.',
  },

  /* ----------------------------------------------------------
     IDENTITY
  ---------------------------------------------------------- */
  name: {
    first: 'HAMZA',   // hero headline line 1
    last:  'PATWA',   // hero headline line 2 (shown as outline/ghost)
  },

  initials: 'HP',     // nav logo — displayed as "HP."

  badge: 'Available · Graduating May 2026 · Open to Full-Time Roles',

  tagline: 'CS Student · Software Engineer · ML Enthusiast',

  /* ----------------------------------------------------------
     CONTACT & LINKS
  ---------------------------------------------------------- */
  email:     'patwahamza02@gmail.com',
  resumeUrl: 'hamzaresume.pdf',  // path/URL to your resume PDF

  /**
   * Supported icon IDs: github | linkedin | twitter | portfolio
   * Add or remove objects to change which icons appear.
   */
  socials: [
    { id: 'github',    label: 'GitHub',    url: 'https://github.com/hamzapatwa' },
    { id: 'linkedin',  label: 'LinkedIn',  url: 'https://www.linkedin.com/in/hamza-patwa/' },
    { id: 'portfolio', label: 'Portfolio', url: 'https://hamzapatwa.vercel.app/' },
  ],

  /* ----------------------------------------------------------
     STATS BAR — numbers count up when scrolled into view
  ---------------------------------------------------------- */
  stats: [
    { value: 4,  suffix: '+', label: 'Projects Shipped' },
    { value: 5,  suffix: '',  label: 'Internships & Fellowships' },
    { value: 20, suffix: '+', label: 'Technologies' },
    { value: 3,  suffix: '+', label: 'Years Coding' },
  ],

  /* ----------------------------------------------------------
     ABOUT
  ---------------------------------------------------------- */
  about: {
    /** Large pull-quote on the left. HTML supported (<em>, <br>, etc.) */
    quote: 'I ship systems that <em>think</em>,<br>scale, and last.',

    /** Bio paragraphs. HTML supported (<strong>, etc.) */
    bio: [
      `Hey — I'm <strong>Hamza Patwa</strong>, a final-year Computer Science student at
       <strong>CUNY Queens College</strong> (GPA 3.4), graduating May 2026. I'm driven by
       the intersection of software engineering and machine learning — building systems that
       are both intelligent and production-ready.`,

      `I've interned at a <strong>private equity firm</strong>, a healthcare startup, and an
       AI fellowship, shipping everything from full-stack allocation tools to real-time vocal
       analysis engines. When I'm not coding, I'm a <strong>Data Science Fellow</strong> at
       CUNY Tech Prep, going deep on model training, deployment, and everything in between.`,
    ],

    /** 4-cell metadata grid below the bio */
    meta: [
      { label: 'University',  value: 'CUNY Queens College' },
      { label: 'Graduation',  value: 'Senior · May 2026' },
      { label: 'Major',       value: 'Computer Science' },
      { label: 'Location',    value: 'New York, NY' },
    ],
  },

  /* ----------------------------------------------------------
     TECH STACK — add/remove groups and tags freely
  ---------------------------------------------------------- */
  skills: [
    {
      group: 'Languages',
      tags:  ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'C++', 'SQL', 'Swift'],
    },
    {
      group: 'Frameworks',
      tags:  ['React', 'Next.js', 'Angular.js', 'Node.js', 'Express', 'ASP.NET', 'PyTorch', 'TensorFlow', 'Streamlit'],
    },
    {
      group: 'Tools',
      tags:  ['Docker', 'Kubernetes', 'Git', 'CI/CD', 'Pandas', 'NumPy', 'Figma'],
    },
    {
      group: 'Cloud & Data',
      tags:  ['AWS', 'GCP', 'Snowflake', 'Firebase', 'PostgreSQL', 'MongoDB', 'Spark', 'Hadoop'],
    },
  ],

  /* ----------------------------------------------------------
     FEATURED PROJECTS
     github / demo can be set to null to hide the link
  ---------------------------------------------------------- */
  projects: [
    {
      num:    '001',
      name:   'PitchPerfectly',
      desc:   'Full-stack karaoke app with real-time vocal analysis. Pitch detection via AudioWorklet &amp; YIN algorithm at &lt;10ms latency. Demucs v4 neural net with GPU acceleration cuts preprocessing by 4&times;.',
      tech:   ['React', 'Node.js', 'Python', 'PyTorch', 'Docker'],
      github: 'https://github.com/hamzapatwa',
      demo:   'https://pitchperfectly.duckdns.org',
    },
    {
      num:    '002',
      name:   'Phishing Detector',
      desc:   'URL classifier trained on 100K URLs using XGBoost, Random Forest, and MLP. Multi-threaded feature extraction runs 20&times; faster; accuracy improved from 87% to 96%+ through iterative hyperparameter tuning.',
      tech:   ['Python', 'XGBoost', 'Scikit-learn', 'Streamlit'],
      github: 'https://github.com/hamzapatwa',
      demo:   'https://hamza-patwa-phishing-site-detection.streamlit.app',
    },
    {
      num:    '003',
      name:   'Telemedicine AI',
      desc:   'Real-time LLM chatbot with RAG-style session context serving 100+ concurrent users. Firebase-backed auth, Firestore session persistence, and auto chat titling for enhanced prompt reliability.',
      tech:   ['Next.js', 'OpenAI API', 'Firebase', 'RAG'],
      github: 'https://github.com/hamzapatwa',
      demo:   'https://telemedappdeployment.vercel.app/',
    },
  ],

  /* ----------------------------------------------------------
     EXPERIENCE — most recent first
  ---------------------------------------------------------- */
  experience: [
    {
      date:    'Jun 2025 — Aug 2025',
      role:    'Technology Development Intern',
      company: 'Centerbridge Partners, L.P. · New York, NY',
      bullets: [
        'Built a full-stack internal allocation tool (C#, Angular.js, SQL Server, Snowflake, Python, PowerBI) to allocate software developer expenses across fund families, streamlining workflows and reducing processing time.',
        'Shipped Angular.js CRUD UI and C# business logic; debugged CI/CD pipelines; collaborated with finance & infrastructure teams on data integrity across PE & Credit.',
        'Presented an internal talk on prompt engineering & model selection; authored a wiki article and reusable prompt library for consistent LLM outputs.',
      ],
    },
    {
      date:    'Jan 2025 — Feb 2025',
      role:    'Software Development Intern',
      company: 'PsychiaTreat · Westbury, NY',
      bullets: [
        'Designed an ETL pipeline in Python to extract, clean, and merge patient payment CSVs into PostgreSQL, reducing processing time by 30% and eliminating manual data entry errors.',
        'Contributed to REST API integrations and documented scalable workflows in Figma to improve data interoperability between healthcare platforms.',
      ],
    },
    {
      date:    'Jul 2024 — Sep 2024',
      role:    'Software Engineering Fellow',
      company: 'Headstarter AI · New York, NY',
      bullets: [
        'Worked in a team of 4 to build 3 AI-powered projects with Next.js, Gemini AI, and OpenAI API; implemented CI/CD pipelines to reduce deployment time.',
        'Integrated Firebase backend services for real-time updates, achieving 99% uptime and reliable functionality across devices.',
      ],
    },
    {
      date:    'Feb 2024 — May 2024',
      role:    'Research Development Software Developer',
      company: 'Research Foundation of CUNY · Queens, NY',
      bullets: [
        'Analyzed and tested AI algorithms for post-quantum computing data encryption.',
        'Led a team building a full-stack generative AI student advisor; conducted research on LLM models to optimize outputs.',
      ],
    },
  ],

  /* ----------------------------------------------------------
     MANIFESTO — large scroll-reveal quote
  ---------------------------------------------------------- */
  manifesto: 'I build software that thinks. Fast, scalable, and built for the real world.',

  /* ----------------------------------------------------------
     MARQUEE TICKER — items are auto-duplicated for the loop
  ---------------------------------------------------------- */
  marquee: [
    'Machine Learning',
    'React',
    'Python',
    'Full Stack',
    'PyTorch',
    'Next.js',
    'Snowflake',
    'Deep Learning',
  ],

  /* ----------------------------------------------------------
     CONTACT SECTION
  ---------------------------------------------------------- */
  contact: {
    subtext: `I'm actively looking for full-time SWE roles starting after May 2026.
              If you have an opportunity — or just want to connect — my inbox is always open.`,
  },

  /* ----------------------------------------------------------
     FOOTER
  ---------------------------------------------------------- */
  footer: '© 2025 Hamza Patwa. Designed & built with intention.',

};

/* ----------------------------------------------------------
   Apply theme CSS variables immediately when this file loads
   (before main.js runs, preventing any flash of wrong color)
---------------------------------------------------------- */
(function applyTheme() {
  const s = document.documentElement.style;
  const t = CONFIG.theme;
  s.setProperty('--bg',     t.bg);
  s.setProperty('--fg',     t.fg);
  s.setProperty('--accent', t.accent);
  s.setProperty('--muted',  t.muted);
  s.setProperty('--border', t.border);
  s.setProperty('--card',   t.card);
}());
