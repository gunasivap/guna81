/* input lable animation */

const inputs = document.querySelectorAll('input, textarea')

inputs.forEach(labelAnimation)

function labelAnimation(el) {

    el.addEventListener('input', e => {
        if (e.target.value) {
            e.target.classList.add('has-value')
        } else {
            e.target.classList.remove('has-value')
        }
    })
}