// gsap.from("#page1 #box",{
//     scale:0,
//     rotate:360,
//     duration:1,
//     delay:1
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     rotate:360,
//     duration:1,
//     delay:1,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         scrub:5,
//         pin:true
//     }
// })





gsap.to("#page2 img", {
    width:"80%",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin:true
    }
})