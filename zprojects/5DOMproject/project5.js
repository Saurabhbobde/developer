var arr = [
    {
        dp: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
        story: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww",
        story: "https://plus.unsplash.com/premium_photo-1664870883225-2ebd4bc3685b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWxzfGVufDB8fDB8fHww"
    },
    {
        dp: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
        story: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww"
    },
]


var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
storiyan.innerHTML = clutter

storiyan.addEventListener("click", function (dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
    },3000)
})

