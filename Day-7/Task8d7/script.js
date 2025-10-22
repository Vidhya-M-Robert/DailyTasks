const img1 = document.getElementById("like1");
const img2 = document.getElementById("like2")
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click",()=>{
        if(img1.style.display === "none"){
            img1.style.display = "block";
            img2.style.display = "none";
        }
        else{
            img1.style.display = "none";
            img2.style.display = "block";
        }
})