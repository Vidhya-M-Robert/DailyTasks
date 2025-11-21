const input = document.getElementById("inputt");
const pId = document.getElementById("pId");
let count =0;
input.addEventListener("input",(e)=>{
    count = 0;
    for(let i=0;i<input.value.length;i++){
        count++;
    }
    if(count > 20){
        pId.style.color = "red"
    }
    if(count < 20){
        pId.style.color = "black"
    }
    pId.innerText = ` Count : ${count}`;
})

// const input = document.getElementById("inputt");
// const pId = document.getElementById("pId");

// input.addEventListener("input", () => {
//     const count = input.value.length;

//     pId.innerText = count;

//     if (count > 20) {
//         pId.style.color = "red";
//     } else {
//         pId.style.color = "black";
//     }
// });
