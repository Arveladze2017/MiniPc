
let pcContainer = document.querySelector(".pcContainer")
let switches = document.querySelectorAll(".supply>div");
let button = document.querySelectorAll(".button")
let power = document.querySelector('.power>div')
let screen = document.querySelector(".screen")
let pressPowerBtn = document.querySelector(".screen>p")
let welcome = document.querySelector(".screen>h1")
let desktop = document.querySelector(".screen>div")
let calculator = document.querySelector('#id3')
let content = document.querySelector(".contentHere")

// ---------------------------FOR DA CALCULATOR-----------------------

let smallDisplay = document.querySelector('.smallDisplay')
let calDisplay = document.querySelector('.calDisplay')
let nums = document.querySelectorAll('.displayAdd')
let clear = document.querySelector('#clear')
let del = document.querySelector('#delete')
let equal = document.querySelector('#equals')

// ------------------------------------------------------------

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
        
        pressPowerBtn.classList.add('later');
        pressPowerBtn.classList.remove('none');
    }
})


switches[1].addEventListener('click', () => {

    switches[1].classList.add("shadow");
    switches[0].classList.remove("shadow")

    button[1].classList.remove("green-shadow");
    button[0].classList.add("red-shadow")

    powerbutton()
    pressPowerBtn.classList.add('none')
    pressPowerBtn.classList.remove("later")

    welcome.classList.add("none")
    welcome.classList.remove("later1")

    desktop.classList.add("none");
    desktop.classList.remove('desktop');
})

power.addEventListener('click', () => {
    powerbutton()
})

function powerbutton() {
    if(button[1].classList.contains('green-shadow') && power.classList.contains("green-shadow") == false) {

        power.classList.add("green-shadow")

        pressPowerBtn.classList.add('none')
        pressPowerBtn.classList.remove("later")

        welcome.classList.add("later1")
        welcome.classList.remove("none")

        desktop.classList.remove('none')
        desktop.classList.add("desktop")

        screen.classList.add("blue")
    }
    else if(power.classList.contains("green-shadow")) {

        power.classList.remove("green-shadow")

        pressPowerBtn.classList.add('later');
        pressPowerBtn.classList.remove('none');

        welcome.classList.add("none");
        welcome.classList.remove("later1");

        desktop.classList.add("none");
        desktop.classList.remove('desktop');

        content.classList.add("none")

        screen.classList.remove("blue") 
    }
}





calculator.addEventListener('click', () => {
    content.classList.remove("none")
})

// ---------------------------------------------cal again----------------------------------

let result = ""

nums.forEach(action => action.addEventListener('click', () => {
    if (calDisplay.classList.contains('black')) {
        calDisplay.classList.remove('black')
        smallDisplay.innerHTML = result
        calDisplay.innerHTML += action.innerHTML
    }
    else {
        calDisplay.innerHTML += action.innerHTML
    }
}))

clear.addEventListener('click', () => {
    smallDisplay.innerHTML = "" 
    calDisplay.innerHTML = ""
})
del.addEventListener('click', () => {
    calDisplay.classList.remove('black')
    calDisplay.innerHTML = calDisplay.innerHTML.slice(0,-1)
})

equal.addEventListener('click', () => {
    calDisplay.classList.add("black")
    calDisplay.innerHTML = eval(calDisplay.innerHTML)
    result = eval(calDisplay.innerHTML)
})