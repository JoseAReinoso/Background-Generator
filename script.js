var h3 = document. querySelector("h3");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var rButton = document.getElementById("Rbutton")

//setting Gradient (that beature color mix that gets generated =  background:linear-gradient(to right, red, yellow))
function setGradient (){
    body.style.background =`
    linear-gradient(to right, ${color1.value}, ${color2.value})
    `;
   //Showing our text on website with gradient
    h3.textContent = `background: ${body.style.background};`
    h3.style.fontSize ="1rem"
}
//Button to randomize colors
function randomGradient(){
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    body.style.background =`
    linear-gradient(to right, #${randomColor1}, #${randomColor2})
    `;
    h3.textContent = `background: ${body.style.background};`
    h3.style.fontSize ="1rem"
}

rButton.addEventListener("click",randomGradient)
color1.addEventListener("input",setGradient)
color2.addEventListener("input",setGradient)