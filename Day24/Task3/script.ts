const input = document.getElementById("inputt") as HTMLInputElement;
const paraId = document.getElementById("pId") as HTMLParagraphElement;
let count: number =0;
input.addEventListener("input",(e)=>{
    count = 0;
    for(let i=0;i<input.value.length;i++){
        count++;
    }
    if(count > 20){
        paraId.style.color = "red"
    }
    if(count < 20){
        paraId.style.color = "black"
    }
    paraId.innerText = `Count : ${count}`;
})