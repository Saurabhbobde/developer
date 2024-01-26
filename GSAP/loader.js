var grow = 0
var tl = gsap.timeline()
var growth = document.querySelector("#loader h1 span")
var hariline = document.querySelector("#hariline")
var int = setInterval(function (){
    if(grow < 100){
        grow++
        growth.innerHTML= grow
        hariline.style.width = grow+"%"
    }else{
        growth.innerHTML = 100
        hariline.style.width= 100+"%"
        tl.to("#loader ",{
            opacity:0,
            // delay:0.7,
            // duration: .5
        })
        tl.to("#hariline ",{
            opacity:0,
            // duration: .2
        })
        tl.to("#grow ",{
            opacity:0,
            // duration: .2
        })
        tl.to("#overlay ",{
            top:"-100%",
            duration:.9
        })
        clearInterval(int)
    }
},40)





























// gsap.to("#page2 h1", {
//     right:"108vw",
//     scrollTrigger: {
//         trigger: "#page2",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 1,
//         pin:true
//     }
// })