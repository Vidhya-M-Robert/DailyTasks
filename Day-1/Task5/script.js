const label = document.getElementById("labelId");
const Increase = document.getElementById("increaseBtn");
const Decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");

let count = 0; 
Increase.onclick = function(){
    if(count < 10)
    count++;
    label.textContent = count;
    if(count === 0){
    document.body.style.backgroundColor = "Grey";
    }
    else if(count > 0){
    document.body.style.backgroundColor = "Green";
    }
}

Decrease.onclick = function (){
    if(count >-10)
    count--;
    label.textContent = count;
    if(count === 0){
    document.body.style.backgroundColor = "Grey";
    }
    else if(count < 0){
    document.body.style.backgroundColor = "Red";
    }
}

reset.onclick = function(){
    count = 0;
    label.textContent = count;
}
if(count === 0){
    document.body.style.backgroundColor = "Grey";
}
