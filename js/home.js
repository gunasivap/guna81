// spider moving animation
const spider = document.querySelector("#spider-section")

function moveSpider(move) {
  if (move === "right") {
    spider.style.transform = "translateX(200px)"
  } else {
    spider.style.transform = "translateX(-200px)"
  }
}

/* type writer */
var i = 0;
var txt = 'Web Developer';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type-writing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, 1500)

// tablet perspective animation
let el = document.getElementById('tilt')
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', handleMove)

function handleMove(e) {

  const xVal = e.layerX
  const yVal = e.layerY

  const yRotation = 4 * ((xVal - width / 2) / width)
  const xRotation = -4 * ((yVal - height / 2) / height)

  const string = 'perspective(500px) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  el.style.transform = string
}

el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) rotateX(0) rotateY(0)'
})

/* active nav link changer */
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
  let index = sections.length;

  while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);