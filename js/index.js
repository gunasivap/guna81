/* theme picker */
const light = document.querySelector("#light")
const dark = document.querySelector("#dark")
const pick0 = document.querySelector("#theme-pick0")
const pick1 = document.querySelector("#theme-pick1")

light.onclick = () => {
    localStorage.setItem("theme", "light")
    let theme = localStorage.getItem("theme")
    currentTheme(theme)
}
dark.onclick = () => {
    localStorage.setItem("theme", "dark")
    let theme = localStorage.getItem("theme")
    currentTheme(theme)

}

function currentTheme(theme) {
    if (theme === "light") {
        pick0.href = "base/css/light.css"
        pick1.href = "css/home-light.css"
    } else {
        pick0.href = "base/css/dark.css"
        pick1.href = "css/home-dark.css"
    }

}

let theme = localStorage.getItem("theme")
currentTheme(theme)

/* text animation
var j = 0;
const txt_content = ["Hello,", "I am Guna,", "Web Developer"]

for (var i = 0; i < txt_content.length; i++) {

    function typeWriter() {
        if (j < txt_content[i].length) {
            document.getElementById("intro-t").innerHTML += txt_content[i].charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter()
}*/

/* spider moving animation */
const spider = document.querySelector("#move-spider")

function moveSpider(move) {
    if (move === "right") {
        spider.style.transform = "translateX(200px)"
    }
    else {
        spider.style.transform = "translateX(-200px)"
    }
}