// section a

gsap.registerPlugin(ScrollTrigger);
gsap.to(".mobileImg", {
  duration: 1,
  x: 120,

  scrollTrigger: {
    trigger: ".mobileImg",
    toggleActions: "restart none none none",
    scrub: true,
  },
});

gsap.to(".mobileImg2", {
  duration: 3,
  y: -120,

  scrollTrigger: {
    trigger: ".mobileImg2",
    toggleActions: "restart none none none",
    scrub: true,
  },
});
// section -b
gsap.registerPlugin(ScrollTrigger);
gsap.to(".mobileImg21", {
  y: -170,

  scrollTrigger: {
    trigger: ".mobileImg21",
    toggleActions: "restart none none none",
    scrub: true,
  },
});

gsap.to(".mobileImg22", {
  y: 130,

  scrollTrigger: {
    trigger: ".mobileImg22",
    toggleActions: "restart none none none",
    scrub: true,
  },
});
// section c
gsap.registerPlugin(ScrollTrigger);
gsap.to(".mobileImg31", {
  y: -170,

  scrollTrigger: {
    trigger: ".mobileImg31",
    toggleActions: "restart none none none",
    scrub: true,
  },
});

gsap.to(".mobileImg32", {
  y: 200,

  scrollTrigger: {
    trigger: ".mobileImg32",
    toggleActions: "restart none none none",
    scrub: true,
  },
});
// section d
gsap.to(".mobileImg41", {
  x: 200,

  scrollTrigger: {
    trigger: ".mobileImg41",
    toggleActions: "restart none none none",
    scrub: true,
  },
});

// section-e

// gsap.to(".mobileImg21", {
//   y: 300,

//   scrollTrigger: {
//     trigger: ".mobileImg21",
//     toggleActions: "restart none none none",
//     scrub: true,
//   },
// });
gsap.to(".mobileImg22last", {
  x: 200,

  scrollTrigger: {
    trigger: ".mobileImg22last",
    toggleActions: "restart none none none",
    scrub: true,
  },
});
