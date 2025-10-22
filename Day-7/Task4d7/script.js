const input = document.getElementById("textt");

input.addEventListener("keypress", (e) =>{
    const keyName = e.key;
    const li =document.createElement('li')
    li.style.listStyle = "none";
    li.textContent = keyName;
    document.querySelector('.keyValue').appendChild(li)
})