// קריפטו וועלט — אינטראקציות ואנימציות
// vanilla JS בלבד: IntersectionObserver + rAF, בלי תלויות

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = window.matchMedia('(hover: none)').matches;

  /* מצב ללא אנימציות (לצילומי מסך אוטומטיים / דיבוג): ?noanim */
  if (location.search.includes('noanim')) {
    document.body.classList.add('no-anim');
  }


  /* --- הדר: צל בגלילה + פס התקדמות קריאה --- */
  const header = document.getElementById('siteHeader');
  const progress = document.getElementById('scrollProgress');
  let scrollTicking = false;
  const onScroll = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('scrolled', window.scrollY > 30);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? (window.scrollY / max) : 0})`;
      }
      scrollTicking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- תפריט מובייל --- */
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.main-nav a').forEach(a => {
      a.addEventListener('click', () => {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- פיצול כותרות למילים (אנימציית הרכבה) --- */
  const splitWords = (el) => {
    let wi = 0;
    const walk = (node) => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
            } else {
              const w = document.createElement('span');
              w.className = 'w';
              w.style.setProperty('--wi', wi++);
              w.textContent = part;
              frag.appendChild(w);
            }
          });
          child.replaceWith(frag);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(el);
    el.classList.add('wsplit');
  };
  document.querySelectorAll('.hero-text h1, main .section-head h2, main .section-header-row h2, .about-title h2, .community h2, .contact-card h2')
    .forEach(splitWords);

  /* --- אנימציית כניסה בגלילה (עם stagger לקבוצות) --- */
  document.querySelectorAll('[data-stagger]').forEach(group => {
    group.querySelectorAll('.reveal').forEach((el, i) => {
      if (!el.style.getPropertyValue('--rd')) {
        el.style.setProperty('--rd', (i * 0.09).toFixed(2) + 's');
      }
    });
  });

  const revealEls = document.querySelectorAll('.reveal, .pop');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* --- מונה סטטיסטיקות --- */
  const counters = document.querySelectorAll('[data-count]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const prefix = el.dataset.prefix || '';
      if (reducedMotion) {
        el.textContent = prefix + target;
        countObserver.unobserve(el);
        return;
      }
      const duration = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = prefix + Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(el => countObserver.observe(el));

  /* --- פרלקסה בגלילה (מטבעות ואלמנטים דקורטיביים) --- */
  const parallaxEls = [...document.querySelectorAll('[data-parallax]')];
  if (parallaxEls.length && !reducedMotion) {
    let ticking = false;
    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > vh + 200) return;
        const factor = parseFloat(el.dataset.parallax);
        const offset = (rect.top + rect.height / 2 - vh / 2) * factor;
        el.style.setProperty('--py', offset.toFixed(1) + 'px');
      });
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateParallax);
      }
    }, { passive: true });
    updateParallax();
  }

  /* --- הירו: הטיית מוקאפ + עומק מטבעות לפי העכבר (דסקטופ) --- */
  const heroVisual = document.getElementById('heroVisual');
  const heroTilt = document.getElementById('heroTilt');
  if (heroVisual && heroTilt && !isTouch && !reducedMotion) {
    const heroCard = heroVisual.closest('.hero-card');
    const heroCoins = [...heroCard.querySelectorAll('.coin')];
    let raf = null;
    heroCard.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        heroTilt.style.transform =
          `perspective(1200px) rotateY(${(-dx * 6).toFixed(2)}deg) rotateX(${(dy * 5).toFixed(2)}deg)`;
        heroCoins.forEach(c => {
          const f = parseFloat(c.dataset.parallax || 0) * 240;
          c.style.setProperty('--px', (dx * f).toFixed(1) + 'px');
        });
      });
    });
    heroCard.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      heroTilt.style.transition = 'transform .6s cubic-bezier(.22,1.2,.36,1)';
      heroTilt.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
      heroCoins.forEach(c => c.style.setProperty('--px', '0px'));
      setTimeout(() => { heroTilt.style.transition = ''; }, 600);
    });
  }

  /* --- ספוטלייט על כרטיסי הבנטו --- */
  const bento = document.querySelector('.bento');
  if (bento && !isTouch && !reducedMotion) {
    bento.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.bento-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left).toFixed(0) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top).toFixed(0) + 'px');
    });
  }


  /* --- טופס יצירת קשר: הכפתור הופך ל"נשלח" --- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    const sendBtn = form.querySelector('button[type="submit"]');
    const sendLabel = sendBtn.querySelector('span');
    const original = sendLabel.textContent;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      note.classList.add('show');
      sendBtn.classList.add('sent');
      sendLabel.textContent = '✓ נשלח!';
      form.reset();
      setTimeout(() => {
        note.classList.remove('show');
        sendBtn.classList.remove('sent');
        sendLabel.textContent = original;
      }, 4500);
    });
  }

  /* --- כפתור חזרה למעלה --- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 700);
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' }));
  }
});
