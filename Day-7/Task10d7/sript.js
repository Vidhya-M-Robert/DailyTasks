const input = document.getElementById("inputid");
const addBtn = document.getElementById("addItem");
const list = document.getElementById("list");
const toggleBtn = document.getElementById("toggle")

addBtn.addEventListener("click",() => {
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
})
toggleBtn.addEventListener("click",()=>{
        if(list.style.display === "none"){
            list.style.display = "block";
        }
        else{
            list.style.display = "none";
        }
})
toggle.addEventListener("keypress",e => {
    console.log(e);
    if(e.shiftKey === true && e.key === "A"){
        list.style.display = "block";
    }
})