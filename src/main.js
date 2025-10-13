import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

(function initScrollAnimations() {
  ScrollSmoother.create({
    smooth: 1,
    effects: false,
    smoothTouch: 0.1,
  });

  const fadeIn = '.fade-in';
  const rightFadeIn = '.right-fade-in';
  const zoomInFadeIn = '.zoom-in-fade-in';
  const welcome = '.welcome';

  /* Global */

  gsap.set([fadeIn, rightFadeIn, zoomInFadeIn], {
    force3D: true,
    transformPerspective: 1000,
    backfaceVisibility: 'hidden',
  });

  gsap.from(fadeIn, {
    y: -25,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.ease',
  });

  gsap.from(rightFadeIn, {
    x: 25,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power2.ease',
  });

  /* Welcome section */

  const welcomeTl = gsap.timeline({
    scrollTrigger: {
      trigger: welcome,
      start: 'top top',
      scrub: true,
    },
  });

  gsap.from(zoomInFadeIn, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.1,
  });

  welcomeTl.to(zoomInFadeIn, {
    scale: 0.8,
    opacity: 0,
    ease: 'none',
  });

  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });
})();
