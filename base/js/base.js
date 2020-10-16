// pr-loader scripts 
window.addEventListener('load', function () {
    document.querySelector('body').classList.add("loaded")
});

// theme local storage
if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark")
}

/* top nav */
function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* theme pack display */
const theme_btn = document.querySelector("#theme-btn")
const theme_pack = document.querySelector("#theme-pack")
const remove_btn = document.querySelector("#the-close")

theme_btn.onclick = () => {
    theme_pack.style.display = "flex"

}
remove_btn.onclick = () => {
    theme_pack.style.display = "none"
    
}

