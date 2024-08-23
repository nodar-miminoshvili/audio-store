'use client';

import { useEffect } from 'react';

const HeroWatcher = () => {
  useEffect(() => {
    const hero = document.querySelector('.hero');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    });

    hero && observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);
  return null;
};

export default HeroWatcher;
