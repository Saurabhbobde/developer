var page3 = document.querySelector("#page3")
var fixed = document.querySelector("#fixed-img")

page3.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
page3.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")

elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})