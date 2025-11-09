import { useEffect } from 'react';

export default function useScrollReveal(selector = '.reveal', options = {}) {
  useEffect(() => {
    const elems = document.querySelectorAll(selector);
    if (!('IntersectionObserver' in window)) {
      // If no support, reveal all
      elems.forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      }
    }, { threshold: 0.12, ...options });

    elems.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selector, options]);
}
