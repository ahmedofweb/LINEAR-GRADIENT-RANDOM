

let btn = document.querySelector("button");
let title = document.querySelector("h1");
let title2 = document.querySelector("h2")
// const randomBackground = Math.trunc(Math.random()*255)+1
// console.log(randomBackground)
const randomBackground = function(){
   const rdm = Math.trunc(Math.random()*255)+1
   return rdm
}
const randomDeg = function(){
    const rdmDeg = Math.trunc(Math.random() *360)+1
    return rdmDeg
}
console.log(randomDeg())

btn.onclick = function (){
    document.body.style.background = 
    `linear-gradient(${randomDeg()}deg, rgb(${randomBackground()}, 
    ${randomBackground()}, 
    ${randomBackground()}), rgb(${randomBackground()}, 
    ${randomBackground()}, 
    ${randomBackground()}))`;

    title.textContent="Linear Gradient"
    title2.textContent = 
    `( ${randomDeg()}deg , rgb(${randomBackground()}, 
    ${randomBackground()}, 
    ${randomBackground()}),
    rgb(${randomBackground()}, 
    ${randomBackground()}, 
    ${randomBackground()}))`;
}




