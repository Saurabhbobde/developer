var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page2",
        scroll:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:1,
        pin:true
    }
});

tl.to("#page2 #outer",{
    scale: 1,
    duration: .5,
    rotate:360
})
tl.to("#page2 #iner1",{
    scale: 1,
    rotate:360,
    duration: .5
})
tl.to("#page2 #iner2",{
    scale: 1,
    duration: .5,
    rotate:360
})