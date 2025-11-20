var input = document.getElementById("inputt");
var paraId = document.getElementById("pId");
var count = 0;
input.addEventListener("input", function (e) {
    count = 0;
    for (var i = 0; i < input.value.length; i++) {
        count++;
    }
    if (count > 20) {
        paraId.style.color = "red";
    }
    if (count < 20) {
        paraId.style.color = "black";
    }
    paraId.innerText = " Count : ".concat(count);
});
