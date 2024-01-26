var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var clutter = 0;

btn.addEventListener("click",function(){
    if (clutter == 0 ){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        clutter = 1
    }
    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        clutter = 0
    }
})