

let switches = document.querySelectorAll(".supply>div");
let button = document.querySelectorAll(".button")
let paragraph = document.querySelector(".screen>p")
let power = document.querySelector('.power>div')
let welcome = document.querySelector('.screen>h1')
let screen = document.querySelector(".screen")


switches[0].addEventListener('click', () => {
    if(button[1].classList.contains('green-shadow') == false) {
        switches[0].classList.add("shadow");
        switches[1].classList.remove("shadow")

        button[0].classList.remove("red-shadow");
        button[1].classList.add("green-shadow")

        paragraph.classList.remove("none")
    }
})


switches[1].addEventListener('click', () => {

    switches[1].classList.add("shadow");
    switches[0].classList.remove("shadow")

    button[1].classList.remove("green-shadow");
    button[0].classList.add("red-shadow")

    powerbutton()
    paragraph.classList.add("none")
})

power.addEventListener('click', () => {
    powerbutton()
})

function powerbutton() {
    if(button[1].classList.contains('green-shadow') && power.classList.contains("green-shadow") == false) {

        power.classList.add("green-shadow")
        paragraph.classList.add("none");
        welcome.classList.remove("none")
        screen.classList.add("blue")
    }
    else if(power.classList.contains("green-shadow")) {

        power.classList.remove("green-shadow")
        paragraph.classList.remove("none");
        welcome.classList.add("none")
        screen.classList.remove("blue") 
    }
}