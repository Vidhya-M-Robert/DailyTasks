const hover = document.getElementById("colorBox");

hover.addEventListener('mouseover', (e) =>{
    const random = randomColor();
    hover.style.backgroundColor = random;
})
hover.addEventListener('mouseout',(e) => {
    hover.style.backgroundColor = "white";
})
function randomColor(){
    const firstValue = Math.floor(Math.random()*10);
    const secondValue = Math.floor(Math.random()*10);
    const ThirdValue = Math.floor(Math.random()*10);
    return `#${firstValue}${secondValue}${ThirdValue}`;
}