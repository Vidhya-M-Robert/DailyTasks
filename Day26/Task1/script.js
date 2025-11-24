const close = document.getElementById("closeImg");
const main = document.getElementById("mainCls");
const button = document.getElementById("dummyBtn");
// const oneNoti = document.getElementById("mainCls3");

// button.addEventListener("click", ()=>{
//     oneNoti.style.display = "block"
// })

close.addEventListener("click", ()=>{
    main.style.display = "none"
});

button.addEventListener("click", ()=>{
    main.style.display = "block"
})

function AutoClose(){
    interval = setInterval(() => {
        main.style.display = "none";
    },5000);
}
AutoClose()