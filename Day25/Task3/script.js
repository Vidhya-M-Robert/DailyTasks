const prods = document.querySelectorAll(".mainSub");
const cross = document.querySelector(".crossImg");
const sideBar = document.querySelector(".parCls");
const neww = document.querySelector(".neww");
neww.style.display = "block";
sideBar.style.display = "none";

cross.addEventListener("click", ()=>{
   sideBar.style.display = sideBar.style.display === "block" ? "none": "block";

})
neww.addEventListener("click", ()=>{
    sideBar.style.display = "block";
})
prods.forEach((prod) =>{
    prod.addEventListener("click",()=>{
        const subCont = prod.querySelector(".subCont");
        subCont.style.display = subCont.style.display === "block" ? "none":"block";
    })
})
