/* ================================================================
   MAIN.JS — Render + Animations
   Reads everything from CONFIG (config.js). No hardcoded content.
================================================================ */

/* ----------------------------------------------------------------
   SVG ICON LIBRARY
   Keys match CONFIG.socials[].id
---------------------------------------------------------------- */
const ICONS = {
  github: `<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>`,

  linkedin: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,

  twitter: `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.735-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,

  portfolio: `<path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>`,
};

/* ----------------------------------------------------------------
   RENDER HELPERS — each returns an HTML string
---------------------------------------------------------------- */

function renderNav() {
  const { initials, resumeUrl } = CONFIG;
  const links = ['About', 'Projects', 'Experience', 'Contact']
    .map((l) => `<li><a href="#${l.toLowerCase()}">${l}</a></li>`)
    .join('');

  return `
    <nav class="nav" id="nav">
      <a href="#hero" class="nav-logo">${initials}<span>.</span></a>
      <ul class="nav-links">
        ${links}
        <li><a href="${resumeUrl}" class="nav-resume" target="_blank" rel="noopener">Resume ↗</a></li>
      </ul>
    </nav>`;
}

function renderHero() {
  const { name, badge, tagline } = CONFIG;
  return `
    <section class="hero" id="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          ${badge}
        </div>
        <h1 class="hero-name">
          <span class="hero-name-row"><span class="hero-name-inner">${name.first}</span></span>
          <span class="hero-name-row"><span class="hero-name-inner">${name.last}</span></span>
        </h1>
        <div class="hero-sub">
          <p class="hero-tagline">${tagline}</p>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-line"></div>
      </div>
    </section>`;
}

function renderStats() {
  const items = CONFIG.stats
    .map(
      (s) => `
      <div class="stat-item">
        <span class="stat-number" data-target="${s.value}" data-suffix="${s.suffix}">0</span>
        <span class="stat-label">${s.label}</span>
      </div>`
    )
    .join('');

  return `
    <section class="stats" aria-label="Quick stats">
      <div class="stats-grid">${items}</div>
    </section>`;
}

function renderAbout() {
  const { about, resumeUrl } = CONFIG;
  const bio  = about.bio.map((p) => `<p class="about-bio">${p}</p>`).join('');
  const meta = about.meta
    .map(
      (m) => `
      <div class="about-meta-item">
        <span class="about-meta-label">${m.label}</span>
        <span class="about-meta-value">${m.value}</span>
      </div>`
    )
    .join('');

  return `
    <section class="about" id="about">
      <div class="about-left">
        <span class="section-eyebrow">About Me</span>
        <blockquote class="about-quote">${about.quote}</blockquote>
      </div>
      <div class="about-right">
        ${bio}
        <div class="about-meta">${meta}</div>
        <a href="${resumeUrl}" class="btn btn-accent" target="_blank" rel="noopener">Download Resume ↓</a>
      </div>
    </section>`;
}

function renderSkills() {
  const groups = CONFIG.skills
    .map(
      (g) => `
      <div class="skill-group">
        <span class="skill-group-label">${g.group}</span>
        <div class="skill-tags">
          ${g.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>`
    )
    .join('');

  return `
    <section class="skills" id="skills">
      <div class="skills-inner">
        <span class="section-eyebrow">01 — What I Work With</span>
        <h2 class="section-title">Tech Stack</h2>
        <div class="skills-groups">${groups}</div>
      </div>
    </section>`;
}

function renderProjects() {
  const cards = CONFIG.projects
    .map((p) => {
      const githubLink = p.github
        ? `<a href="${p.github}" class="project-link" target="_blank" rel="noopener">GitHub ↗</a>`
        : '';
      const demoLink = p.demo
        ? `<a href="${p.demo}" class="project-link" target="_blank" rel="noopener">Live Demo ↗</a>`
        : '';

      return `
      <article class="project-card">
        <span class="project-num">${p.num}</span>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map((t) => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">${githubLink}${demoLink}</div>
      </article>`;
    })
    .join('');

  return `
    <section class="projects" id="projects">
      <div class="projects-inner">
        <span class="section-eyebrow">02 — Selected Work</span>
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">${cards}</div>
      </div>
    </section>`;
}

function renderExperience() {
  const items = CONFIG.experience
    .map(
      (e) => `
      <div class="timeline-item">
        <span class="timeline-date">${e.date}</span>
        <h3 class="timeline-role">${e.role}</h3>
        <p class="timeline-company">${e.company}</p>
        <ul class="timeline-bullets">
          ${e.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
      </div>`
    )
    .join('');

  return `
    <section class="experience" id="experience">
      <div class="experience-inner">
        <span class="section-eyebrow">03 — Work History</span>
        <h2 class="section-title">Experience</h2>
        <div class="timeline">${items}</div>
      </div>
    </section>`;
}

function renderManifesto() {
  return `
    <section class="manifesto">
      <div class="manifesto-inner">
        <span class="manifesto-eyebrow">— A note on craft</span>
        <p class="manifesto-text" id="manifestoText">${CONFIG.manifesto}</p>
      </div>
    </section>`;
}

function renderMarquee() {
  // Duplicate items so the CSS infinite loop is seamless
  const doubled = [...CONFIG.marquee, ...CONFIG.marquee];
  const items   = doubled.map((t) => `<span class="marquee-item">${t}</span>`).join('');

  return `
    <div class="marquee-section" aria-hidden="true">
      <div class="marquee-track">${items}</div>
    </div>`;
}

function renderContact() {
  const { contact, email, socials } = CONFIG;

  const socialLinks = socials
    .map(
      (s) => `
      <a href="${s.url}" class="social-link" aria-label="${s.label}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          ${ICONS[s.id] ?? ''}
        </svg>
      </a>`
    )
    .join('');

  return `
    <section class="contact" id="contact">
      <div class="contact-inner">
        <span class="section-eyebrow">04 — Get In Touch</span>
        <h2 class="contact-heading">Let's<br>Talk.</h2>
        <p class="contact-sub">${contact.subtext}</p>
        <a href="mailto:${email}" class="contact-email">${email}</a>
        <div class="contact-socials">${socialLinks}</div>
        <a href="mailto:${email}" class="btn btn-accent">Say Hello →</a>
      </div>
    </section>`;
}

function renderFooter() {
  return `
    <footer class="footer">
      <p class="footer-copy">${CONFIG.footer}</p>
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="#hero">Top ↑</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </footer>`;
}

/* ----------------------------------------------------------------
   RENDER — build full page HTML from CONFIG
---------------------------------------------------------------- */
function render() {
  // Update SEO
  document.title = CONFIG.seo.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', CONFIG.seo.description);

  // Inject all sections into #app
  document.getElementById('app').innerHTML = [
    renderNav(),
    renderHero(),
    renderStats(),
    renderAbout(),
    renderSkills(),
    renderProjects(),
    renderExperience(),
    renderManifesto(),
    renderMarquee(),
    renderContact(),
    renderFooter(),
  ].join('');
}

/* ----------------------------------------------------------------
   LENIS smooth scroll
---------------------------------------------------------------- */
function setupLenis() {
  const lenis = new Lenis({
    duration: 1.2,
    easing:   (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  // Smooth anchor clicks
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const sel = anchor.getAttribute('href');
    if (sel === '#') return;
    const target = document.querySelector(sel);
    if (target) {
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80, duration: 1.6 });
    }
  });

  return lenis;
}

/* ----------------------------------------------------------------
   CUSTOM CURSOR
---------------------------------------------------------------- */
function setupCursor() {
  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    gsap.to(dot, { x: mx, y: my, duration: 0.08, ease: 'none' });
  });

  (function tickRing() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    gsap.set(ring, { x: rx, y: ry });
    requestAnimationFrame(tickRing);
  }());

  // Inflate ring on hover over interactive elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, .project-card, .skill-tag')) {
      document.body.classList.add('cursor-hover');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, .project-card, .skill-tag')) {
      document.body.classList.remove('cursor-hover');
    }
  });
}

/* ----------------------------------------------------------------
   LOADER — count 0→100, then sweep off-screen
---------------------------------------------------------------- */
function startLoader(onComplete) {
  gsap.registerPlugin(ScrollTrigger);

  const loaderEl      = document.getElementById('loader');
  const loaderCount   = document.getElementById('loaderCount');
  const loaderBarFill = document.getElementById('loaderBarFill');
  const counter       = { val: 0 };

  gsap.to(counter, {
    val:      100,
    duration: 2.4,
    ease:     'power2.inOut',
    onUpdate() {
      const v = Math.round(counter.val);
      loaderCount.textContent = v;
      loaderBarFill.style.right = (100 - v) + '%';
    },
    onComplete() {
      gsap.to(loaderEl, {
        yPercent:  -100,
        duration:  0.85,
        ease:      'power3.inOut',
        delay:     0.25,
        onComplete() {
          loaderEl.style.display = 'none';
          onComplete();
        },
      });
    },
  });
}

/* ----------------------------------------------------------------
   SCROLL ANIMATIONS — runs after loader exits
---------------------------------------------------------------- */
function initScrollAnimations() {

  /* NAV — scrolled class */
  ScrollTrigger.create({
    start: 'top -60px',
    end:   99999,
    onUpdate(self) {
      document.getElementById('nav').classList.toggle('scrolled', self.progress > 0);
    },
  });

  /* HERO name lines — slide up from clip */
  gsap.from('.hero-name-inner', {
    yPercent: 110,
    duration: 1.1,
    ease:     'power3.out',
    stagger:  0.14,
  });
  gsap.from(['.hero-badge', '.hero-sub'], {
    opacity:  0,
    y:        24,
    duration: 0.9,
    ease:     'power2.out',
    stagger:  0.16,
    delay:    0.3,
  });

  /* STATS — count up on enter */
  document.querySelectorAll('.stat-number').forEach((el) => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    ScrollTrigger.create({
      trigger: el,
      start:   'top 88%',
      once:    true,
      onEnter() {
        const obj = { val: 0 };
        gsap.to(obj, {
          val:      target,
          duration: 1.8,
          ease:     'power2.out',
          onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
        });
      },
    });
  });

  /* ABOUT */
  gsap.from('.about-left > *', {
    scrollTrigger: { trigger: '.about', start: 'top 78%' },
    opacity: 0, y: 44, duration: 0.8, ease: 'power2.out', stagger: 0.12,
  });
  gsap.from('.about-right > *', {
    scrollTrigger: { trigger: '.about-right', start: 'top 80%' },
    opacity: 0, y: 44, duration: 0.8, ease: 'power2.out', stagger: 0.1,
  });

  /* SKILLS */
  gsap.from('.skill-group', {
    scrollTrigger: { trigger: '.skills', start: 'top 75%' },
    opacity: 0, y: 36, duration: 0.7, ease: 'power2.out', stagger: 0.1,
  });
  gsap.from('.skill-tag', {
    scrollTrigger: { trigger: '.skills-groups', start: 'top 65%' },
    opacity: 0, scale: 0.75, duration: 0.35, ease: 'back.out(1.6)', stagger: 0.03,
  });

  /* SECTION eyebrow + title pairs */
  document.querySelectorAll('.section-eyebrow').forEach((eye) => {
    const title = eye.nextElementSibling;
    gsap.from([eye, title].filter(Boolean), {
      scrollTrigger: { trigger: eye, start: 'top 88%' },
      opacity: 0, y: 24, duration: 0.7, ease: 'power2.out', stagger: 0.1,
    });
  });

  /* PROJECTS */
  gsap.from('.project-card', {
    scrollTrigger: { trigger: '.projects-grid', start: 'top 82%' },
    opacity: 0, y: 64, duration: 0.8, ease: 'power2.out', stagger: 0.15,
  });

  /* EXPERIENCE */
  gsap.from('.timeline-item', {
    scrollTrigger: { trigger: '.timeline', start: 'top 80%' },
    opacity: 0, x: -28, duration: 0.7, ease: 'power2.out', stagger: 0.18,
  });

  /* MANIFESTO — word-by-word scrub */
  const manifestoEl = document.getElementById('manifestoText');
  if (manifestoEl) {
    const raw = manifestoEl.textContent.trim();
    manifestoEl.innerHTML = raw
      .split(/\s+/)
      .map((w) => `<span class="word"><span class="word-inner">${w}</span></span>`)
      .join(' ');

    gsap.from('.word-inner', {
      scrollTrigger: {
        trigger: '.manifesto',
        start:   'top 72%',
        end:     'bottom 24%',
        scrub:   0.6,
      },
      opacity: 0.07,
      y:       28,
      stagger: 0.05,
      ease:    'power1.out',
    });
  }

  /* CONTACT */
  gsap.from([
    '.contact .section-eyebrow',
    '.contact-heading',
    '.contact-sub',
    '.contact-email',
    '.contact-socials',
    '.contact .btn',
  ], {
    scrollTrigger: { trigger: '.contact', start: 'top 72%' },
    opacity: 0, y: 48, duration: 0.9, ease: 'power2.out', stagger: 0.1,
  });
}

/* ----------------------------------------------------------------
   PROJECT CARD — 3-D tilt on mouse move
---------------------------------------------------------------- */
function initCardTilt() {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const r  = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -8;
      const ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  8;
      gsap.to(card, {
        rotationX: rx, rotationY: ry, scale: 1.025,
        duration: 0.4, ease: 'power1.out', transformPerspective: 1000,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotationX: 0, rotationY: 0, scale: 1,
        duration: 0.6, ease: 'power2.out',
      });
    });
  });
}

/* ----------------------------------------------------------------
   INIT
---------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  render();        // populate DOM from CONFIG
  setupCursor();   // cursor needs cursor-dot / cursor-ring (static in HTML)
  setupLenis();    // smooth scroll + anchor clicks

  startLoader(() => {
    initScrollAnimations();   // GSAP ScrollTrigger — runs after loader
    initCardTilt();           // project card 3D tilt
  });
});
