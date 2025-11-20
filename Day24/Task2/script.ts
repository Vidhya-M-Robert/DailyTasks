const imgg = document.getElementById("clsImg") as HTMLDivElement;
const nextbtn = document.getElementById("btn1") as HTMLButtonElement;
const prevbtn = document.getElementById("btn2") as HTMLButtonElement;

const imgUrl: string[] = [
    "car1.jpeg",
    "car2.jpeg",
    "caar3.jpeg",
    "car4.jpeg",
    "car5.jpeg",
    "car7.jpeg"
]
let first: number= 0;
const image = document.createElement('img');
image.style.width = "100%";
image.style.height = "100%";
image.style.objectFit = "cover";
function displayImg(){
image.src = imgUrl[first];
imgg.appendChild(image);
}
displayImg();
nextbtn.addEventListener("click",() =>{
    if(first <imgUrl.length-1){
        first++;
    }
    else{
        first = 0;
    }
    image.src = imgUrl[first];
});
prevbtn.addEventListener("click",() => {
    if(first >0){
        first--;
    }
    else{
        first = imgUrl.length-1
    }
    image.src = imgUrl[first];
});
setInterval(()=>{
    if(first <imgUrl.length-1){
        first++;
    }
    else{
        first = 0;
    }
    image.src = imgUrl[first];
},3000);