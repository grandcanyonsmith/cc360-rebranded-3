// c360-reviews-boot-local.js - Local version for fast loading
const R = document.querySelector('#c360-reviews');
const L = () => import('./cc360-reviews-vlite.js');

// Use IntersectionObserver for lazy loading if available, otherwise load immediately
'IntersectionObserver' in window
  ? new IntersectionObserver(([e], o) => {
      if (e.isIntersecting) {
        o.disconnect();
        L();
      }
    }, {
      rootMargin: '150px'
    }).observe(R)
  : L(); 