// Pequeño JS para interacciones: smooth scroll y mejoras UX
(function(){
  'use strict'
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        history.replaceState(null,'', this.getAttribute('href'));
      }
    });
  });

  // small enhancement: announce JS ready in console for debugging
  console.log('Script cargado — interacciones activas');

  // reveal on scroll for elements with data-reveal
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('[data-reveal]').forEach(function(el){
    el.classList.add('reveal');
    observer.observe(el);
  });
})();

// GSAP / ScrollTrigger: cursor, entrada y animaciones de scroll
if (typeof gsap !== 'undefined') {
  (function(){
    try {
      if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

      // 1. Cursor personalizado
      const cursor = document.querySelector('.custom-cursor');
      if (cursor) {
        document.addEventListener('mousemove', (e) => {
          gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
        });

        document.querySelectorAll('a').forEach(link => {
          link.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(255, 42, 95, 0.2)', border: 'none' });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', border: '2px solid #ff2a5f' });
          });
        });
      }

      // 2. Animación de entrada (Hero)
      const tl = gsap.timeline();
      tl.from('.hero-title .line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      })
      .from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.site-header', {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: 'power2.out'
      }, '-=0.5');

      // 3. ScrollTrigger: animaciones al bajar
      if (typeof ScrollTrigger !== 'undefined') {
        gsap.from('.about-text', {
          scrollTrigger: { trigger: '.about', start: 'top 70%' },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });

        const projects = gsap.utils.toArray('.project-card');
        projects.forEach(project => {
          gsap.from(project, {
            scrollTrigger: { trigger: project, start: 'top 80%' },
            y: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power4.out'
          });

          const img = project.querySelector('.project-image');
          if (img) {
            gsap.to(img, {
              scrollTrigger: {
                trigger: project,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
              },
              y: 30,
              ease: 'none'
            });
          }
        });
      }
    } catch (err) {
      console.warn('GSAP initialization failed:', err);
    }
  })();
}
