document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        error.innerText = "All fields are required!";
        return;
    }

    if (!email.match(emailPattern)) {
        error.innerText = "Please enter a valid email!";
        return;
    }

    error.style.color = "green";
    error.innerText = "Form submitted successfully!";
});