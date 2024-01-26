var btn = document.querySelector("button")
var istatus = document.querySelector("h5")

var flag = 0

btn.addEventListener("click", function () {
    if (flag == 0) {
    istatus.innerHTML = "Request Sending..."
    istatus.style.color = "yellow"
    btn.innerHTML = "Sending..."
    flag = 1
        setTimeout(function(){

            istatus.innerHTML = "Friend"
            istatus.style.color = "green"
            btn.innerHTML = "Remove Friend"
            flag = 1
        },2000)
    } else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
})