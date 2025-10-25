const scroller = document.getElementById("scroll");
const prgrsBar = document.getElementById("progressBar");
scroller.addEventListener("scroll", () => {
  const scrollTop = scroller.scrollTop;
  const scrollHeight =
    scroller.scrollHeight - scroller.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  prgrsBar.style.width = progress + "%";
});