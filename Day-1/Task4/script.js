const button = document.getElementById("btn");
const input = document.getElementById("input");
const listItem = document.getElementById("list")

button.addEventListener("click",() => {
    const li = document.createElement("li");
    li.textContent = input.value;
    listItem.appendChild(li);
    li.addEventListener("click", ()=>{
        li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
        
    })
})