const modal = document.getElementById("modal");
const close = document.getElementById("closeImg");
const btnIn = document.getElementById("btnFlex");
const content = document.getElementById("modalCont");
const head = document.getElementById("modalHead");


close.addEventListener("click", ()=>{
    modal.style.display = "none"
});
btnFlex.addEventListener("click",()=>{
    console.log("button Clicked");
    modal.style.display = "none"
});
window.addEventListener("click",(e)=>{
    if(e.target !== modal){
        modal.style.display = "none";
    }
});
window.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
});