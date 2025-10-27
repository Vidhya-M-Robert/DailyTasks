const listItem = document.querySelectorAll("#li");

window.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.key === "a") {
    listItem.forEach((li) => {
         if(li.style.display === "none"){
             li.style.display = "block"; 
         }
         else{
            li.style.display = "none";
         }
    });
}
});
