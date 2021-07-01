// typelt script
new TypeIt("#typing-txt", {
  strings: "Web Developer",
  speed: 100,
  loop: false,
  startDelay: 1000,
  waitUntilVisible: true
}).go();

// tilt
// const tiltValue = {
// 	max: 30,
// 	speed: 600,
//   scale: 1,
//   transition: true,
//   easing: "cubic-bezier(.03,.98,.52,.99)",
//   perspective: 600,
//   glare: true
// }
const element = document.querySelectorAll(".skill");
VanillaTilt.init(element);
// element.addEventListener("tiltChange", callback);
