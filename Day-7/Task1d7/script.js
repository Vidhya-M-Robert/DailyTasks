const hover = document.getElementById("colorBox");

hover.addEventListener('mouseover', (e) =>{
    // const random = randomColor();
    hover.style.backgroundColor = randomColor();
})
hover.addEventListener('mouseout',(e) => {
    hover.style.backgroundColor = "white";
})
function randomColor(){
    const firstValue = Math.floor(Math.random()*10);
    console.log(firstValue);
    const secondValue = Math.floor(Math.random()*10);
    console.log(secondValue);
    const ThirdValue = Math.floor(Math.random()*10);
    console.log(ThirdValue);
    return `#${firstValue}${secondValue}${ThirdValue}`;
}

