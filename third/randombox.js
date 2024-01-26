const main = document.querySelector("#main");
var widthInp = document.querySelector("#width");
var heightInp = document.querySelector("#height");

const clam = (num , min , max) => Math.min(Math.max(num, min),max);

var btn = document.querySelector("button");
btn.addEventListener("click" , function(){
    const div = document.createElement("div");
    div.style.width = widthInp.value+ "px";
    div.style.height = heightInp.value+ "px";

    const left = Math.random()*main.offsetwidth;
    const top = Math.random()*main.offsetwidth;

    div.style.position = "absolute"

    const leftval = clam(left, 0 , main.offsetwidth-widthInp.value);
    const topval = clam(top, 0 , main.offsetheight-heightInp.value);

    div.style.left = leftval + "px"
    div.style.top = topval + "px"

    div.style.backgroundColor = "red"

    main.appendChild(div);
})