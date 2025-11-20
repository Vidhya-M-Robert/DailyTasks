var imgg = document.getElementById("clsImg");
var nextbtn = document.getElementById("btn1");
var prevbtn = document.getElementById("btn2");
var imgUrl = [
    "car1.jpeg",
    "car2.jpeg",
    "caar3.jpeg",
    "car4.jpeg",
    "car5.jpeg",
    "car7.jpeg"
];
var first = 0;
var image = document.createElement('img');
image.style.width = "100%";
image.style.height = "100%";
image.style.objectFit = "cover";
function displayImg() {
    image.src = imgUrl[first];
    imgg.appendChild(image);
}
displayImg();
nextbtn.addEventListener("click", function () {
    if (first < imgUrl.length - 1) {
        first++;
    }
    else {
        first = 0;
    }
    image.src = imgUrl[first];
});
prevbtn.addEventListener("click", function () {
    if (first > 0) {
        first--;
    }
    else {
        first = imgUrl.length - 1;
    }
    image.src = imgUrl[first];
});
setInterval(function () {
    if (first < imgUrl.length - 1) {
        first++;
    }
    else {
        first = 0;
    }
    image.src = imgUrl[first];
}, 3000);
