const scrollCont = document.getElementById("scroll-container");
const progressBar = document.getElementById("progressBar");

scrollCont.addEventListener("scroll",()=> {
    const scrollTop = scrollCont.scrollTop;
    const scrollHeight = 
    scrollCont.scrollHeight - scrollCont.clientHeight;
    const progress = (scrollTop / scrollHeight) *100;
    progressBar.style.width = progress + "%"
});