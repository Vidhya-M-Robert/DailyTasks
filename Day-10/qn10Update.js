function longestCommonPrefix(arr){
    if(arr.length === 0) return "";
    let prefix = arr[0];
    for(let i = 1; i<arr.length;i++){
        while(!arr[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
            if(prefix === "") return "";
        }
    }
    return prefix
}
console.log(JSON.stringify(longestCommonPrefix(['flower','flow','flight'])));
console.log(JSON.stringify(longestCommonPrefix(['dog','racecar','car'])));
console.log(JSON.stringify(longestCommonPrefix([])));


// const listItems=document.querySelectorAll(".list_item")
// const billamount=document.getElementById("list")
// const container=document.getElementById("container")
// listItems.forEach(lists=>{
//     lists.addEventListener("mouseenter",()=>{
//         let div=document.createElement("div")
//         div.style.backgroundColor="black"
//         div.style.color="white"
//         div.textContent=lists.textContent
//         div.style.padding="10px"
//         container.appendChild(div)
//           lists.addEventListener("mouseleave",()=>{
//         container.removeChild(div)
//     })
//     })
// })