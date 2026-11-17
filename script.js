
// LET'S TALK POPUP

const talkModal = document.getElementById("talkModal");
const closeModal = document.getElementById("closeModal");

// Open popup
document.querySelector(".nav-button").addEventListener("click", function(event) {
    event.preventDefault();
    talkModal.classList.add("active");
});

// Close popup
closeModal.addEventListener("click", function() {
    talkModal.classList.remove("active");
});

// Close when clicking outside
talkModal.addEventListener("click", function(event) {
    if (event.target === talkModal) {
        talkModal.classList.remove("active");
    }
});

// Send form details to WhatsApp
document.getElementById("talkForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("talkName").value.trim();
    const email = document.getElementById("talkEmail").value.trim();
    const service = document.getElementById("talkService").value;
    const message = document.getElementById("talkMessage").value.trim();

    const whatsappMessage =
        `Hello Binayak!\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n` +
        `Project Details: ${message}`;

    const whatsappURL =
        "https://wa.me/9779748426428?text=" +
        encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    talkModal.classList.remove("active");
    this.reset();
});
