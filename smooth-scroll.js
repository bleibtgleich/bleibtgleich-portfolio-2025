if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof window.Lenis !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  let lenis;

  const initSmoothScrolling = () => {
    lenis = new window.Lenis({
      lerp: 0.1,
      smoothWheel: true,  // Для десктопного скроллинга колесом мыши
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    console.log('Lenis initialized:', lenis);
  };

  window.addEventListener('load', initSmoothScrolling);
} else {
  console.error('One or more libraries (GSAP, ScrollTrigger, or Lenis) are not loaded.');
}
