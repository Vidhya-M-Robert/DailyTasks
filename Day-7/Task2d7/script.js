const input = document.getElementById("textt");
const listItems = document.getElementById("textShow");
const toggleBtn = document.getElementById("Btn");



input.addEventListener("keypress",e => {
    if(e.key === "Enter"){
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.textContent = input.value;
    listItems.appendChild(li);
    input.value = "";
    }
})
toggleBtn.addEventListener("click",()=>{
        if(listItems.style.display === "none"){
            listItems.style.display = "block";
        }
        else{
            listItems.style.display = "none";
        }
})