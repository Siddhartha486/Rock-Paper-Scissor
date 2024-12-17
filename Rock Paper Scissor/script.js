let rock = document.getElementById("one")
let paper = document.getElementById("two")
let scissor = document.getElementById("three")
let comp = document.querySelector(".c-count")
let you = document.querySelector(".y-count")
let message=document.querySelector(".message")
let newgame=document.querySelector(".new-game")
let c_counter = 0
let y_counter = 0


// const rand = () => Math.ceil(-1 + (Math.random() * 3))
function rand() {
    return Math.ceil((-1 + (Math.random() * 3)))
}

                        // FOR ROCK

rock.addEventListener("click", () => {
    console.log("HOLA");

    if ( rand() === 1) {
        c_counter++
        message.innerHTML="You Lost! Paper beats Rock"
        message.style.backgroundColor="red"
        comp.innerHTML = `${c_counter}`

    }
    else if (rand() === 2) {
        y_counter++
        message.innerHTML="You Won! Rock beats Scissor"
        message.style.backgroundColor="green"
        you.innerHTML = `${y_counter}`
    }
    else {
        message.innerHTML="Its a Draw"
        message.style.backgroundColor="Black"
    }
})


//                          ...FOR PAPER


paper.addEventListener("click", () => {
    console.log("HOLA");

    if ( rand() === 2) {
        c_counter++
        message.innerHTML="You Lost! Scissor beats Paper"
        message.style.backgroundColor="red"
        comp.innerHTML = `${c_counter}`

    }
    else if (rand() === 0) {
        y_counter++
        message.innerHTML="You Won! Paper beats Rock"
        message.style.backgroundColor="green"
        you.innerHTML = `${y_counter}`
    }
    else {
        message.innerHTML="Its a Draw"
        message.style.backgroundColor="Black"
    }
})





                            // FOR SCISSOR


scissor.addEventListener("click", () => {
    console.log("HOLA");

    if ( rand() === 0) {
        c_counter++
        message.innerHTML="You Lost! Rock beats Scissor"
        message.style.backgroundColor="red"
        comp.innerHTML = `${c_counter}`

    }
    else if (rand() === 1) {
        y_counter++
        message.innerHTML="You Won! Scissor beats Paper"
        message.style.backgroundColor="green"
        you.innerHTML = `${y_counter}`
    }
    else {
        message.innerHTML="Its a Draw"
        message.style.backgroundColor="Black"
    }
})


newgame.addEventListener("click", ()=>{
    c_counter=0
    y_counter=0
    message.innerHTML="Pick Your Move"
    message.style.backgroundColor="Black"
    you.innerHTML="0"
    comp.innerHTML="0"
})

