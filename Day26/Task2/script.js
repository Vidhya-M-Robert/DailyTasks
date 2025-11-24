const fistTab = document.getElementById("eachCls");
const secTab = document.getElementById("eachCls1");
const thirdTab = document.getElementById("eachCls2");
const dis1 = document.getElementById("blockDis");
const dis2 = document.getElementById("blockDis2");
const dis3 = document.getElementById("blockDis3");
fistTab.style.borderBottomColor = "red";

fistTab.addEventListener("click", ()=>{
    dis1.style.display = "block"
    dis2.style.display = "none"
    dis3.style.display = "none"
    fistTab.style.borderBottomColor = "red";
    secTab.style.borderBottomColor = "white";
    thirdTab.style.borderBottomColor = "white";

});

secTab.addEventListener("click", ()=>{
    dis1.style.display = "none"
    dis2.style.display = "block"
    dis3.style.display = "none"
    fistTab.style.borderBottomColor = "white";
    secTab.style.borderBottomColor = "red";
    thirdTab.style.borderBottomColor = "white";
});

thirdTab.addEventListener("click", ()=>{
    dis1.style.display = "none"
    dis2.style.display = "none"
    dis3.style.display = "block"
    fistTab.style.borderBottomColor = "white";
    secTab.style.borderBottomColor = "white";
    thirdTab.style.borderBottomColor = "red";
});