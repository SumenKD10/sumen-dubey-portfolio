import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const animateIn = (
    element: string | Element,
    options: gsap.TweenVars = {}
  ) => {
    const defaults = {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    };
    
    return gsap.fromTo(element, defaults, {
      opacity: 1,
      y: 0,
      ...options,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse",
        ...(options.scrollTrigger || {})
      }
    });
  };

  const animateSlideIn = (
    element: string | Element,
    direction: 'left' | 'right' = 'left',
    options: gsap.TweenVars = {}
  ) => {
    const xValue = direction === 'left' ? -50 : 50;
    
    return gsap.fromTo(element, 
      { opacity: 0, x: xValue },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  };

  const staggerAnimation = (
    elements: string | Element[],
    options: gsap.TweenVars = {}
  ) => {
    return gsap.fromTo(elements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  };

  const fadeIn = (
    element: string | Element,
    options: gsap.TweenVars = {}
  ) => {
    return gsap.fromTo(element,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  };

  const scaleIn = (
    element: string | Element,
    options: gsap.TweenVars = {}
  ) => {
    return gsap.fromTo(element,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        ...options
      }
    );
  };

  return {
    containerRef,
    animateIn,
    animateSlideIn,
    staggerAnimation,
    fadeIn,
    scaleIn,
    gsap,
    ScrollTrigger
  };
};