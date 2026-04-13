const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggleBtn");
const eyeIcon = document.getElementById("eyeIcon");
const eyeOffIcon = document.getElementById("eyeOffIcon");
const form = document.getElementById("loginForm");

toggleBtn.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("You are signed in!");
    form.reset();
});
