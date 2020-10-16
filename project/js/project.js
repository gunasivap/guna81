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
        pick0.href = "../base/css/light.css"
        pick1.href = "css/project-light.css"
    } else {
        pick0.href = "../base/css/dark.css"
        pick1.href = "css/project-dark.css"
    }

}

let theme = localStorage.getItem("theme")
currentTheme(theme)
