var box = document.querySelector("#box")

growx = 0
growy = 0

document.addEventListener("keydown", function (dets) {
    if (dets.key == "ArrowRight") {
        growx += 10
        console.log(growx)
        box.style.left = growx + "px"
    }
    else if(dets.key == "ArrowLeft"){
        growx -= 10
        box.style.left = growx +"px"
        console.log(growx)
    }

    else if(dets.key == "ArrowDown"){
        growy += 10
        console.log(growy)
        box.style.top = growy +"px"
    }
    else if(dets.key == "ArrowUp"){
        growy -= 10
        console.log(growy)
        box.style.top = growy +"px"
    }
})










