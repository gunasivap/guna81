// create switch image circle
const switchContainer = document.querySelector(".switch-img")

for (let i = 0; i < imgSources.length; i++) {

    const imgCircle = document.createElement("span")
    imgCircle.setAttribute("class", "circle");
    if (i === 0)  imgCircle.setAttribute("class", "circle active")
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
    currentImg[0].src = "img/" + imgSources[n]
    currentImg[1].src = "img/" + imgSources[n]

    let circles = document.querySelectorAll(".circle")
    for (let i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    console.log(n)
    circles[n].classList.add("active")

}

// + and - nav image
const prevImg = document.querySelectorAll(".prev")
const nextImg = document.querySelectorAll(".next")

prevImg.forEach(prevImage)
nextImg.forEach(nextImage)

function prevImage(el) {
    el.onclick = () => {
        navImg(-1)
    }
}

function nextImage(el) {
    el.onclick = () => {
        navImg(1)
    }
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

// change image with circle
switchContainer.addEventListener("click", (e) => {

    if (e.target.tagName.toLowerCase() === 'span') {
        currentSource = parseInt(e.target.dataset.srcIndex)
        console.log(currentSource)
        changeSoruce(currentSource)


    }
})

// pop up model

const openPic = document.querySelector("#open-pic")
const closePic = document.querySelector("#close-pic")

openPic.onclick = () => {
    popupDisplay("block")
}
closePic.onclick = () => {
    popupDisplay("none")
}

function popupDisplay(value) {
    const popupModel = document.querySelector("#popup-model")
    popupModel.style.display = value
}