const input = document.getElementById("inputid");
const addBtn = document.getElementById("addItem");
const list = document.getElementById("list");


addBtn.addEventListener("click",() => {
    const li = document.createElement("li");
    li.style.listStyleType = "none";
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
})

