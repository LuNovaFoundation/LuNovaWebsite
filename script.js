/* ──────────────────────────────────────────────
   LUNOVA — Script
   ────────────────────────────────────────────── */

// ── STATS CONFIG ─────────────────────────────────
// Edit values here — they sync everywhere on the site automatically.
const STATS = {
  childrenImpacted:   '[x]',
  moneyRaised:        '[x]',
  activeProjects:     '1',
  founded:            '2026',
  communityPartners:  '[x]',
  familiesEngaged:    '[x]',
  educatorsTrained:   '[x]',
  childrenServedGoal: '5000',
};

function populateStats() {
  document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.dataset.stat;
    if (STATS[key] !== undefined) el.textContent = STATS[key];
  });
}

// ── NAV SCROLL ─────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });


// ── PAGE NAVIGATION ─────────────────────────────
function navigateTo(pageId) {
  const pages = document.querySelectorAll('.page');
  const links = document.querySelectorAll('.nav-link');

  // hide all
  pages.forEach(p => {
    p.classList.remove('active', 'visible');
  });

  links.forEach(l => l.classList.remove('active'));

  // show target
  const target = document.getElementById(pageId);
  if (!target) return;

  target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // trigger visible after brief delay (allows display:block to render first)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      target.classList.add('visible');
      // trigger hero image animation
      const heroEl = target.querySelector('.hero');
      if (heroEl) heroEl.classList.add('loaded');
    });
  });

  // active nav link
  const activeLink = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // run scroll reveal for new page
  setTimeout(() => observeReveals(), 80);
}

// Nav link clicks
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    navigateTo(page);
  });
});

// Footer nav links
document.querySelectorAll('.footer-nav a[onclick]').forEach(link => {
  link.addEventListener('click', e => e.preventDefault());
});


// ── SCROLL REVEAL ───────────────────────────────
function observeReveals() {
  const elements = document.querySelectorAll('.page.active .reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

// Initial observe
window.addEventListener('scroll', () => observeReveals(), { passive: true });
observeReveals();


// ── SIDEBAR DATA ────────────────────────────────
const sidebarData = {
  mission: {
    tag: 'Our Mission',
    title: 'Designing for Every Mind',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    body: `
      <p>LuNova exists to close the gap between neurodivergent children in Vietnam and the specialized tools they deserve. While many developed nations have robust occupational therapy ecosystems, millions of children in Southeast Asia navigate daily life without access to even basic sensory support.</p>
      <p>We design products and programs with a single focus: meeting children exactly where they are, celebrating how their minds work, and giving them the tools to thrive.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Founded</span><span>2026</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Headquarters</span><span>Ho Chi Minh City, Vietnam</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span>Active Non-Profit</span></div>
      </div>
    `
  },
  gearboard: {
    tag: 'Flagship Project',
    title: 'Gearboards for Neurodivergent Children',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    body: `
      <p>The Gearboard Project is LuNova's first and most active initiative. We design and distribute custom sensory activity boards — "gearboards" — to neurodivergent children across Vietnam who have no access to occupational therapy resources.</p>
      <p>Each board is thoughtfully crafted with age-appropriate sensory components including textured panels, spinning gears, sliding tracks, and tactile elements that promote focus, fine motor skill development, and self-regulation.</p>
      <p>We partner directly with local schools and family networks to distribute boards and provide guidance on how to use them effectively at home and in the classroom.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span style="color:#22c55e;font-weight:600">● Active</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Children Served</span><span data-stat="childrenImpacted"></span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Location</span><span>Ho Chi Minh City & surrounding provinces</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Partners</span><span>3 local schools, 2 family networks</span></div>
      </div>
    `
  },
  'gearboard-full': {
    tag: 'Flagship Project',
    title: 'Gearboards for Neurodivergent Children',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    body: `
      <p>The Gearboard Project is LuNova's first and most active initiative. We design and distribute custom sensory activity boards — "gearboards" — to neurodivergent children across Vietnam who have no access to occupational therapy resources.</p>
      <p>Each board is thoughtfully crafted with age-appropriate sensory components including textured panels, spinning gears, sliding tracks, and tactile elements that promote focus, fine motor skill development, and self-regulation.</p>
      <p>We partner directly with local schools and family networks to distribute boards and provide guidance on how to use them effectively at home and in the classroom.</p>
      <p>Our goal for 2025 is to reach 300 children across at least 5 provinces in Vietnam, while also publishing an open-source design guide so that other organizations can replicate the model in their own regions.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span style="color:#22c55e;font-weight:600">● Active</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Children Served</span><span data-stat="childrenImpacted"></span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Location</span><span>Ho Chi Minh City & surrounding provinces</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">2025 Goal</span><span data-stat="childrenServedGoal"> children, 5 provinces</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Partners</span><span>3 local schools, 2 family networks</span></div>
      </div>
    `
  },
  community: {
    tag: 'Community Impact',
    title: 'Building Lasting Change Together',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80',
    body: `
      <p>LuNova's work doesn't happen in isolation — it grows from within the communities we serve. We believe that sustainable change requires listening first, then designing alongside families and educators rather than for them.</p>
      <p>Our community partnerships connect us to local schools, parent groups, and grassroots organizations who understand the realities on the ground. They help us identify where needs are greatest, test our tools before wide rollout, and share knowledge with families long after we leave.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Community Partners</span><span data-stat="communityPartners"></span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Families Engaged</span><span data-stat="familiesEngaged"></span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Educators Trained</span><span data-stat="educatorsTrained"></span></div>
      </div>
    `
  },
  story: {
    tag: 'Our Story',
    title: 'How LuNova Came to Be',
    img: 'https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=800&q=80',
    body: `
      <p>LuNova began with a conversation between two friends — an educator working in Vietnam and a product designer frustrated by how little of the design world's tools ever reached the children who needed them most.</p>
      <p>After months of research and on-the-ground conversations with families in Ho Chi Minh City, the pattern became clear: parents of neurodivergent children desperately wanted resources but had no access, no guidance, and no community to turn to.</p>
      <p>In 2026, LuNova officially launched with a small seed fund and a big belief: that beautiful, purposeful design could change a child's life. The Gearboard Project was the first proof of that belief.</p>
    `
  },
  'team-chair': {
    tag: 'Meet the Team',
    title: 'Hung Duong — Chair',
    img: 'images/Hungprofile.JPG',
    body: `
      <p>Hung placeholder text.</p>
      <p>He brings a decade of experience in international non-profit management and a deep personal connection to the neurodivergent community.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Role</span><span>Chair</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Based</span><span>Ho Chi Minh City, Vietnam</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Background</span><span>Non-profit management, Education</span></div>
      </div>
    `
  },
  'team-chief executive officer': {
    tag: 'Meet the Team',
    title: 'Ethan Vu — Chief Executive Officer',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    body: `
      <p>Ethan placeholder text.</p>
      <p>As a product designer with roots in accessibility consulting, Ethan leads the design and manufacturing of all LuNova tools, ensuring every product meets both quality and safety standards.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Role</span><span>Chief Executive Officer</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Based</span><span>Hanoi, Vietnam</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Background</span><span>Product design, Accessibility</span></div>
      </div>
    `
  },
  'team-president': {
    tag: 'Meet the Team',
    title: 'Vivian Duong — President',
    img: 'images/vivianprofile.jpeg',
    body: `
      <p>Vivian placeholder text.</p>
      <p>Vivian works directly with families, schools, and community organizations to build and maintain the relationships that make LuNova's work possible.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Role</span><span>President</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Based</span><span>Da Nang, Vietnam</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Background</span><span>Social work, Community organizing</span></div>
      </div>
    `
  },
  'team-secretary': {
    tag: 'Meet the Team',
    title: 'Diem Vu — Secretary/Treasurer',
    img: '',
    body: `
      <p>Diem placeholder text.</p>
      <p>Diem manages LuNova's administrative and financial operations, ensuring the organization runs smoothly and remains accountable to its mission.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Role</span><span>Secretary/Treasurer</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Based</span><span>Vietnam</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Background</span><span>Administration, Finance</span></div>
      </div>
    `
  },
  'coming-edu': {
    tag: 'Coming Soon',
    title: 'Inclusive Learning Kits',
    img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&q=80',
    body: `
      <p>Our next initiative focuses on bringing modular, inclusive learning toolkits to classrooms across rural Vietnam — equipping teachers with the resources and knowledge they need to support students with diverse learning needs.</p>
      <p>Each kit will include tactile learning materials, visual aids, structured activity guides, and access to a digital resource library co-developed with special education experts.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span>In Development</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Target Launch</span><span>2025</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Target Reach</span><span>50 classrooms</span></div>
      </div>
    `
  },
  'coming-tech': {
    tag: 'Coming Soon',
    title: 'Assistive Technology Program',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    body: `
      <p>Assistive technology can be transformative for neurodivergent individuals — but cost and availability put it out of reach for most families in Vietnam. LuNova's Assistive Tech Program aims to bridge that gap.</p>
      <p>Through partnerships with manufacturers and refurbishment programs, we'll source and distribute affordable devices, software licenses, and training to families who qualify based on need.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span>Planning Phase</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Target Launch</span><span>2025–2026</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Focus Area</span><span>Communication & Learning Devices</span></div>
      </div>
    `
  },
  'coming-family': {
    tag: 'Coming Soon',
    title: 'Caregiver Workshops',
    img: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&q=80',
    body: `
      <p>Parents and caregivers of neurodivergent children often feel isolated, overwhelmed, and without support. LuNova's Caregiver Workshop series will create safe, informed spaces for families to learn, connect, and grow together.</p>
      <p>Workshops will cover topics including understanding neurodivergence, sensory strategies at home, navigating the education system, and building a support network.</p>
      <div class="sb-divider"></div>
      <div class="sb-meta">
        <div class="sb-meta-item"><span class="sb-meta-label">Status</span><span>Planning Phase</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Format</span><span>In-person & online</span></div>
        <div class="sb-meta-item"><span class="sb-meta-label">Target Launch</span><span>Mid-2025</span></div>
      </div>
    `
  }
};


// ── SIDEBAR OPEN / CLOSE ────────────────────────
function openSidebar(key) {
  const data = sidebarData[key];
  if (!data) return;

  const content = document.getElementById('sidebar-content');
  content.innerHTML = `
    <div class="sb-img"><img src="${data.img}" alt="${data.title}" loading="lazy" /></div>
    <p class="sb-tag">${data.tag}</p>
    <h2>${data.title}</h2>
    ${data.body}
  `;

  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebar-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  populateStats();
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebar-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// Attach click listeners to all clickable elements
document.querySelectorAll('.clickable[data-sidebar]').forEach(el => {
  el.addEventListener('click', () => {
    openSidebar(el.dataset.sidebar);
  });
});

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSidebar();
});


// ── INIT ─────────────────────────────────────────
(function init() {
  // populate all stats from STATS config
  populateStats();

  // activate home
  navigateTo('home');

  // hero image animation
  setTimeout(() => {
    const hero = document.querySelector('.hero');
    if (hero) hero.classList.add('loaded');
  }, 100);
})();
