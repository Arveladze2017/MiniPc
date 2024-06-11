

let switches = document.querySelectorAll(".supply>div");
let button = document.querySelectorAll(".button")
let power = document.querySelector('.power>div')
let screen = document.querySelector(".screen")


switches[0].addEventListener('click', () => {
    if(button[1].classList.contains('green-shadow') == false) {
        switches[0].classList.add("shadow");
        switches[1].classList.remove("shadow")

        setTimeout(() => {
            button[0].classList.remove("red-shadow");
            // button[1].classList.add("green-shadow")
        },700);
        // button[0].classList.remove("red-shadow");
        button[1].classList.add("green-shadow")
        
        screen.innerHTML = "<p class='later'>Press power button on Case to start!</p>"
    }
})


switches[1].addEventListener('click', () => {

    switches[1].classList.add("shadow");
    switches[0].classList.remove("shadow")

    button[1].classList.remove("green-shadow");
    button[0].classList.add("red-shadow")

    powerbutton()
    screen.innerHTML = ""
})

power.addEventListener('click', () => {
    powerbutton()
})

function powerbutton() {
    if(button[1].classList.contains('green-shadow') && power.classList.contains("green-shadow") == false) {

        power.classList.add("green-shadow")
        screen.innerHTML = `<h1 class='later1'>WELCOME!</h1>`
                            // <div class='asd'>
                            //     <div class='gameFolder'></div>
                            //     <span>GAMES</span>
                            // </div>
        screen.classList.add("blue")
    }
    else if(power.classList.contains("green-shadow")) {

        power.classList.remove("green-shadow")
        screen.innerHTML = "<p class='later'>Press power button on Case to start!</p>"
        screen.classList.remove("blue") 
    }
}