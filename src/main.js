import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

(function initScrollAnimations() {
  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  gsap.from('.fade-in', {
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
  });

  gsap.set('.zoom-in-fade-in', {
    transformOrigin: 'center center',
    willChange: 'transform, opacity',
    backfaceVisibility: 'hidden',
  });

  gsap.from('.zoom-in-fade-in', {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    stagger: 0.15,
    onComplete: () => gsap.set('.zoom-in-fade-in', { willChange: 'auto' }),
  });
})();
