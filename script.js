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
