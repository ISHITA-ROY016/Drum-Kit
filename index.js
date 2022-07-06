//window.alert('1')

// document.querySelector("button").addEventListener("click", handleClick)
// passing the function as an input so that it can be called at a later time after addEventListner

function handleClick(btnclass) {

    switch (btnclass) {
        case "w":
            let audio1 = new Audio('sounds/tom-3.mp3')
            audio1.play()
            break;

        case "a":
            let audio2 = new Audio('sounds/tom-1.mp3')
            audio2.play()
            break;

        case "s":
            let audio3 = new Audio('sounds/snare.mp3')
            audio3.play()
            break;

        case "d":
            let audio4 = new Audio('sounds/crash.mp3')
            audio4.play()
            break;

        case "j":
            let audio5 = new Audio('sounds/kick-bass.mp3')
            audio5.play()
            break;

        case "k":
            let audio6 = new Audio('sounds/tom-2.mp3')
            audio6.play()
            break;

        case "l":
            let audio7 = new Audio('sounds/tom-4.mp3')
            audio7.play()
            break;

        default:
            break;
    }
}

var btn = document.querySelectorAll(".drum")
btn.forEach(b => {
    b.addEventListener('click', function () {
        var btnclass = this.id
        //console.log(btnclass)
        handleClick(btnclass)
        makeAnimation(btnclass)
    })
});

document.addEventListener('keydown', function (event) {
    //console.log(event.key)
    handleClick(event.key)
    makeAnimation(event.key)
})


function makeAnimation(currentKey) {
    var keynow = document.querySelector("." + currentKey)
    keynow.classList.add('pressed')
    setTimeout(function () {
        keynow.classList.remove('pressed')
    }, 150)
} 