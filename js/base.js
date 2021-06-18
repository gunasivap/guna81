// theme funtions

if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light")
}

const body = document.querySelector("body")
let currentTheme = localStorage.getItem("theme")
body.classList.add(currentTheme)


// change current theme
const light = document.querySelector("#light")
const dark = document.querySelector("#dark")

light.onclick = () => {
    changeTheme("light")
}
dark.onclick = () => {
    changeTheme("dark")
}

function changeTheme(theme) {
    localStorage.setItem("theme", theme)
    body.className = theme + " loaded"

}

// theme pack visibility
const themeBtn = document.querySelector("#theme-btn")
const themes = document.querySelector("#themes")
const Overlay = document.querySelector(".overlay")

themeBtn.onclick = () => {
    themesVisibility()
}
Overlay.onclick = () => {
    themesVisibility()
}

function themesVisibility() {
    themes.classList.toggle("visible")
    Overlay.classList.toggle("visible")
}

// sticky resize top bar 
const headerHeight = document.querySelector("header").offsetHeight
window.addEventListener("scroll", function () {
    const topBar = document.querySelector(".top-bar"),
        scroll = window.pageYOffset | document.body.scrollTop;

    if (scroll > headerHeight) {
        topBar.classList.add("scrolled")
    } else if (scroll + 20 < headerHeight) {
        topBar.className = topBar.className.replace("scrolled", "")
    }
});

// mobile menu 

const menuBar = document.querySelector(".menu-bar")
const navContainer = document.querySelector(".navigations")

menuBar.onclick = () => {
    menuFunction()
}

const internalNavs = document.querySelectorAll(".link")
internalNavs.forEach(closeNav)

function closeNav(el) {
    el.onclick = () => {
        menuFunction()
    }
}

function menuFunction() {
    menuBar.classList.toggle("close-bar");
    navContainer.classList.toggle("mob-navigations")
}