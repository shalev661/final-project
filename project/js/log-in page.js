let timesClicked = 0;

function toggleLogin() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("hidden");
}

function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const captcha = document.getElementById("captcha");
  const captchaContainer = document.getElementById("captcha-container");
  const message = document.getElementById("message");

  const correctUsername = "sigma";
  const correctPassword = "123";

  if (captchaContainer.style.display === "block" && !captcha.checked) {
    message.textContent = "Please confirm you are not a robot.";
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    message.style.color = "green";
    message.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = ".//index.html"; // redirect to main page
    }, 1000);
  } else {
    timesClicked++;
    message.style.color = "#d9534f";
    message.textContent = "Invalid username or password.";
    if (timesClicked >= 2) {
      captchaContainer.style.display = "block";
    }
  }
}
