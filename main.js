
let pcContainer = document.querySelector(".pcContainer")
let switches = document.querySelectorAll(".supply>div");
let button = document.querySelectorAll(".button")
let power = document.querySelector('.power>div')
let screen = document.querySelector(".screen")
let pressPowerBtn = document.querySelector(".screen>p")
let welcome = document.querySelector(".screen>h1")
let desktop = document.querySelector(".screen>div")
let calculator = document.querySelector('#id3')
let games = document.querySelector("#id1")
let info = document.querySelector("#id2")
let rgbGame = document.querySelector(".rgbGame")
let solarMaket = document.querySelector(".solarMaket")
let fbiWanted = document.querySelector(".fbiWanted")
let fbiCards = document.querySelector(".fbiCards")

let closes = document.querySelectorAll(".close")

let content = document.querySelector(".contentHere")
let inContents = document.querySelectorAll(".contentHere > div")
let menuKey = document.querySelector(".bottom>div")
let shutDown = document.querySelector(".shutDown")
let getMiniPC = document.querySelectorAll(".getMiniPC")
let folderOn = document.querySelectorAll(".folderOn")



let h1 = document.querySelector("#h1");
let divs = document.querySelectorAll(".container>div")
let mode = document.querySelector('.mode')
let newColors = document.querySelector(".newColors")
let easy = document.querySelector('#easy')
let hard = document.querySelector('#hard')
let header = document.querySelector('header')
let span = document.querySelector('span')

// Here goes On/Off switches. Can be seen on the top of viewport!----------------------------------------

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


// Dis is turn on button on Pc Case-----------------------------------------
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
        inContents.forEach(action => action.classList.add("none"))

        screen.classList.remove("blue") 
    }
}



menuKey.addEventListener('click', () => {
    if(shutDown.classList.contains('none') == true){
        shutDown.classList.remove("none")
    }
    else if (shutDown.classList.contains('none') == false){
        shutDown.classList.add("none")
    }
})
shutDown.addEventListener('click', () => {
    powerbutton()
    shutDown.classList.add("none")
})

getMiniPC.forEach(toDo => toDo.addEventListener('click', () => {
    content.classList.add("none")
    inContents.forEach(action => action.classList.add("none"))
    })
)


// ---------------------------FOR DA CALCULATOR-----------------------

let smallDisplay = document.querySelector('.smallDisplay')
let calDisplay = document.querySelector('.calDisplay')
let nums = document.querySelectorAll('.displayAdd')
let clear = document.querySelector('#clear')
let del = document.querySelector('#delete')
let equal = document.querySelector('#equals')



calculator.addEventListener('click', () => {

    if(content.classList.contains('none') == true){
        content.classList.remove("none")
        inContents[0].classList.remove("none")
    }
    else if (content.classList.contains('none')== false) {
        content.classList.add("none")
        inContents.forEach(action => action.classList.add("none"))
    }
})



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
    smallDisplay.innerHTML = "";
    console.log(calDisplay.innerHTML)

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


// In Folders --------------------------------------------------------

games.addEventListener('click', () => {
    folderOn[0].classList.remove("none")
})
info.addEventListener('click', () => {
    folderOn[1].classList.remove("none")
})

closes.forEach(action => {
    action.addEventListener('click', () => {
        folderOn.forEach(action => action.classList.add("none"))
    })
})



// for Da rgbGame-----------------------------------------------------------

rgbGame.addEventListener("click", () => {
    if(content.classList.contains('none') == true){
        content.classList.remove("none")
        inContents[1].classList.remove("none")
    }
    else if (content.classList.contains('none')== false) {
        content.classList.add("none")
        inContents.forEach(action => action.classList.add("none"))
    }
})



function rgbgenerator() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
}
let targetColor = rgbgenerator();







h1.innerHTML = targetColor
mode.innerHTML = 'hard'

let randomNum = Math.round(Math.random() * 5);
for (let i = 0; i < 6; i ++) {

    if (randomNum == i){
        divs[i].style.backgroundColor = targetColor;
    }
    else {
        divs[i].style.backgroundColor = rgbgenerator()
    }
}






function givingColors() {
    let targetColor = rgbgenerator();
    h1.innerHTML = targetColor
    header.style.backgroundColor = '#337bb6'
    span.innerHTML = ''
    if(mode.innerHTML == 'hard'){
        let randomNum = Math.round(Math.random() * 5);
        divs[0].classList.remove('none1');
        divs[1].classList.remove('none1');
        divs[2].classList.remove('none1');
        divs[3].classList.remove('none1');
        divs[4].classList.remove('none1');
        divs[5].classList.remove('none1');
        for (let i = 0; i < 6; i ++) {

            if (randomNum == i){
                divs[i].style.backgroundColor = targetColor;
            }
            else {
                divs[i].style.backgroundColor = rgbgenerator()
            }
        }
    }
    else if (mode.innerHTML == 'easy'){
        let randomNum = Math.round(Math.random() * 2);
        divs[0].classList.remove('none1');
        divs[1].classList.remove('none1');
        divs[2].classList.remove('none1');
        divs[3].classList.add('none1');
        divs[4].classList.add('none1');
        divs[5].classList.add('none1');
        for (let i = 0; i < 3; i ++) {

            if (randomNum == i) {
                divs[i].style.backgroundColor = targetColor;
            }
            else {
                divs[i].style.backgroundColor = rgbgenerator()
            }
        }
    }
}
newColors.addEventListener('click', () => {
    givingColors();
    newColors.innerHTML = 'NEW COLORS'
})


easy.addEventListener('click', () => {
    header.style.backgroundColor = '#337bb6'
    mode.innerHTML = 'easy';
    givingColors()
})

hard.addEventListener('click', () => {
    header.style.backgroundColor = '#337bb6'
    mode.innerHTML = 'hard';
    givingColors()
})



divs.forEach(div => div.addEventListener('click', () => {
    if(mode.innerHTML == 'hard' && div.style.backgroundColor == h1.innerHTML) {
        newColors.innerHTML = 'PLAY AGAIN';
        header.style.backgroundColor = h1.innerHTML;
        span.innerHTML = 'CORRECT!'
        divs.forEach(remove => {
            remove.classList.remove('none1');
            remove.style.backgroundColor = h1.innerHTML;
        })
    }
    else if (mode.innerHTML == 'easy' && div.style.backgroundColor == h1.innerHTML) {
        newColors.innerHTML = 'play again';
        header.style.backgroundColor = h1.innerHTML;
        span.innerHTML = 'CORRECT!'
        for(let i = 0; i<3 ; i++) {
            divs[i].classList.remove('none1');
            divs[i].style.backgroundColor = h1.innerHTML;
            console.log(divs[i])
        }
    }
    else {
        div.classList.add("none1")
        span.innerHTML = 'INCORRECT!'
    }
}))

// for Da solar Maket--------------------------------------------------------------------------


solarMaket.addEventListener("click", () => {
    if(content.classList.contains('none') == true){
        content.classList.remove("none")
        inContents[2].classList.remove("none")
    }
    else if (content.classList.contains('none')== false) {
        content.classList.add("none")
        inContents.forEach(action => action.classList.add("none"))
    }
})

// for Da FBI wanted------------------------------------------------------------------

let urlOfApi = `https://api.fbi.gov/wanted/v1/list`
fetch(urlOfApi).then(actions => actions.json()).then( actions => cardsAdder(actions.items))


function cardsAdder(action) {

    fbiWanted.addEventListener("click", () => {
        if(content.classList.contains('none') == true){
            content.classList.remove("none")
            inContents[3].classList.remove("none")
    
            if (fbiCards.innerHTML == "") {
                action.forEach(action => {
                    fbiCards.innerHTML += `
                    <div>
                        <img src="${action.images[0].large}">
                        <h3>${action.title}</h3>
                        <p>${action.subjects}</p>
                        <p>${action.sex}</P>
                        <i>${action.remarks}</i>
                    </div>
                `
                })
            }
            else if (fbiCards.innerHTML != ""){
                console.log("asd")
            }
        }
        else if (content.classList.contains('none')== false) {
            content.classList.add("none")
            inContents.forEach(action => action.classList.add("none"))
        }
    })
}
