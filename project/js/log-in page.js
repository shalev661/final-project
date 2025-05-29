let timesclicked = 0;

function toggleLogin() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("hidden");
}

function login() {
        event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const captcha = document.getElementById("captcha");
  const captchaContainer = document.getElementById("captcha-container");

  const correctUsername = "sigma";
  const correctPassword = "123";

  if (captchaContainer.style.display === "block" && !captcha.checked) {
    message.textContent = "Please confirm you are not a robot.";
    return;
  }

  if (username === correctUsername && password === correctPassword) {
    message.textContent = "Login successful!";
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  } else {
    timesclicked++;
    message.textContent = "Invalid username or password.";
    if (timesclicked >= 2) {
      captchaContainer.style.display = "block";
    }
  }
}

