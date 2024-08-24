'use client';

import { useEffect, useState } from 'react';

const AnimateHighlightedWord = () => {
  const words = ['FINE', 'NICE', 'SLIK', 'BEST'];
  const lettersToIterate = words.join('/');
  const [textState, setTextState] = useState({
    text: '',
    letterIdx: 0,
  });
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const aboutSection = document.querySelector('.aboutSection');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          setIsInView(true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.5 }
    );

    aboutSection && observer.observe(aboutSection);

    const callback = () => {
      if (!isInView || textState.letterIdx >= lettersToIterate.length) return;
      setTextState(p => {
        return {
          letterIdx: p.letterIdx + 1,
          text: lettersToIterate[p.letterIdx] === '/' ? '' : p.text + lettersToIterate[p.letterIdx],
        };
      });
    };

    const timeout = setTimeout(() => callback(), 250);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isInView, textState, lettersToIterate]);

  return <>{textState.text}</>;
};

export default AnimateHighlightedWord;
