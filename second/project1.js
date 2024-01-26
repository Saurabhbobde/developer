var box = document.querySelector("#box")
var btn = document.querySelector("button")
var btn2 = document.querySelector("button")

btn.addEventListener("click",function(){
    var a1 = Math.floor(Math.random()*10)
    var a2 = Math.floor(Math.random()*10)
    var a3 = Math.floor(Math.random()*10)
    var a4 = Math.floor(Math.random()*10)
    console.log(a1,a2,a3,a4)

    box.style.fontSize = "40px"
    box.style.fontWeight = "600"
    box.style.padding = "10px 30px"
    box.innerHTML = `${a1} ${a2} ${a3}  ${a4}`
    
})

