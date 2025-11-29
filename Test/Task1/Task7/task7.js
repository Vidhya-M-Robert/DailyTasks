function validateHTMLstr(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.includes("<div>") && str.includes("</div>") && (str.includes("<span>") && str.includes("</span>"))) {
            return true;
        }
    }
}
console.log(validateHTMLstr("<div><span>Hello</span></div>"));
