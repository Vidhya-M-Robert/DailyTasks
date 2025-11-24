const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    openBtn.style.display = "block";   //hamburger btn is openBtn
    openBtn.style.display = "none"; 
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    openBtn.style.display = "block";  
});
const accordions = document.querySelectorAll(".accordion-btn");

accordions.forEach(btn => {
    btn.addEventListener("click", () => {
        accordions.forEach(otherBtn => {       //another loop that runs through all accordion buttons again.
            if(otherBtn !== btn){              //if the button we are checking is NOT the one the user clicked, then close its content 
                otherBtn.nextElementSibling.style.maxHeight = null;
                // otherBtn.nextElementSibling refers to the <div class="accordion-content"> right below the button.
            }
        });

        const content = btn.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
        // scrollheight => full height of the hidden content
    });
});