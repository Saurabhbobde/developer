var arr = ["circle", "rect", "tri", "hex", "pent", "star", "bevel"]
var box = document.querySelector("#box")
var btn = document.querySelector("button")

btn.addEventListener("click", function () {
    var a = Math.floor(Math.random() * arr.length)
    console.log(arr[a])
    box.classList.toggle(arr[a])
})