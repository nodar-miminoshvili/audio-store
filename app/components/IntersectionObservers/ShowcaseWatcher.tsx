'use client';

import { useEffect } from 'react';

const ShowcaseWatcher = () => {
  useEffect(() => {
    const sliders = document.querySelectorAll('.slide-in');
    const faders = document.querySelectorAll('.fade-in');
    const options: IntersectionObserverInit = { rootMargin: '0px 0px -100px 0px', threshold: 0.45 };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, options);

    sliders.forEach(slider => {
      observer.observe(slider);
    });
    faders.forEach(fader => {
      observer.observe(fader);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return null;
};

export default ShowcaseWatcher;
