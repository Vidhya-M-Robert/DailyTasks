const Windowheight = document.getElementById("height");
const Windowwidth = document.getElementById("width");

function windowSize(){
    Windowheight.textContent = "Height => " + window.innerHeight + "px";
    Windowwidth.textContent = "Width => " +window.innerWidth+ "px";
}
windowSize();

window.addEventListener("resize",windowSize);
// window.onresize = windowSize;