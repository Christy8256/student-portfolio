// =========================
// Christy Portfolio Website
// =========================

// Welcome Button
function showMessage() {
    alert("👋 Hello! Welcome to Christy Renishiya's Portfolio Website.");
}

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠ Please fill all the fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("⚠ Please enter a valid email address.");
            return;
        }

        alert("✅ Thank you, " + name + "!\n\nYour message has been submitted successfully.");

        contactForm.reset();

    });

}

// Smooth Scroll for Navigation
document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});

// Welcome Message
window.addEventListener("load", function(){

    console.log("Portfolio Website Loaded Successfully!");

});

// Scroll to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";
topButton.id = "topButton";

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#4CAF50";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

document.body.appendChild(topButton);

window.addEventListener("scroll", function(){

    if(window.scrollY > 250){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});