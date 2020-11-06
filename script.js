//pulling h3 to then insert css generated on it
var h3 = document. querySelector("h3");
//pulling input 1 to then add an event listener to then call setGreadient function
var color1 = document.querySelector(".color1")
//pulling input 2 to then add an event listener to then call setGreadient function
var color2 = document.querySelector(".color2")
//pulling whole body ID here to have color reflected on the whole body
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
//function to randomize colors
function randomGradient(){
    //these variables are ramdomizing css colors
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