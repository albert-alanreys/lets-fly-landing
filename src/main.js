import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

(function initScrollAnimations() {
  ScrollSmoother.create({
    smooth: 0.8,
    effects: true,
    smoothTouch: 0.1,
  });

  gsap.from('.fade-in', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: 'power2.out',
  });
})();
