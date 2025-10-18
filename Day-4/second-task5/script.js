const input = document.getElementById("input");
const listItem = document.getElementById("listItems");

input.addEventListener("input", ()=>{
    let output = input.value
    listItem.textContent = `Hello ${output}`;
})