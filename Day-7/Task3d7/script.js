const borderClr = document.getElementById("borderColor");

borderClr.addEventListener("dblclick", (e) =>{
    const random = randomBorder();
    borderClr.style.borderColor = random;
})

function randomBorder(){
    const firstValue = Math.floor(Math.random()*10);
    const secondValue = Math.floor(Math.random()*10);
    const ThirdValue = Math.floor(Math.random()*10);
    return `#${firstValue}${secondValue}${ThirdValue}`;
}