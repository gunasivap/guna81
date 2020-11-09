
// create switch image circle
const switchContainer = document.querySelector(".switch-img")

for (let i = 0; i < imgSources.length; i++) {
    
    const imgCircle = document.createElement("span")
    imgCircle.setAttribute("class", "circle");
    (i === 0) ? imgCircle.setAttribute("class", "circle active") :
    imgCircle.dataset.srcIndex = i
    switchContainer.appendChild(imgCircle)
}

// change image source
let currentSource = 0
const currentImg = document.querySelectorAll(".current-img")

// hide single image nav icons
if (imgSources.length <= 1) {
    const nav = document.querySelectorAll(".prev, .next")
    nav.forEach(displayNone)

    function displayNone(el) {
        el.style.display = "none"
    }
}

function changeSoruce(n) {
    currentImg[0].src = "img/"+imgSources[n]
    currentImg[1].src = "img/"+imgSources[n]

    let circles = document.querySelectorAll(".circle")
    for (let i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    
    circles[n].classList.add("active")

}

function navImg(n) {
    currentSource += n
    if (currentSource < 0) {
        currentSource = imgSources.length - 1
    }
    if (currentSource > imgSources.length - 1) {
        currentSource = 0
    }

    changeSoruce(currentSource)
}

switchContainer.addEventListener("click", (e) => {

    if (e.target.tagName.toLowerCase() === 'span') {
        currentSource = parseInt(e.target.dataset.srcIndex)
        changeSoruce(currentSource)
        
    }
})

// pop up model
function popupDisplay(value) {
    const popupModel = document.querySelector("#popup-model")
    popupModel.style.display = value
}
