

function header() {
  document.addEventListener("DOMContentLoaded", () => {
    const headerPlace = document.getElementById("headerplace");
    const header = document.createElement("header");
    header.style.direction = "rtl"
    header.style.display = "flex";
    header.style.justifyContent = "space-evenly";
    header.style.alignItems = "center";

    const logo = document.createElement("img");
    logo.src = ( window.location.href.endsWith("index.html")) ? "./public/img/img-header.jpg" : "./img/img-header.jpg";
    logo.alt = "Logo";
    logo.style.width = "182px";
    logo.style.height = "160px";

    const navContainer = document.createElement("nav");
    navContainer.id = "main-nav";
    
    header.appendChild(logo);
    header.appendChild(navContainer);
    headerPlace.appendChild(header);

    createNav();
  });
}

header();

function createNav() {
  const nav = document.getElementById("main-nav");
  const loggedIn = localStorage.getItem("loggedIn");

  if (!nav) return;

  if (loggedIn === "true") {
    nav.innerHTML = `
      <a class= "nav-a" href="/public/index.html">בית</a>
       <a class= "nav-a" href="/public/about.html">אודות</a>
      <a class = "game-btn nav-a" href="/public/game.html">🎮המשחק</a>
      <a  class= "nav-a" href="/public/contactandhelp.html">צור קשר</a>
      <a class= "nav-a" href="/public/profile.html">פרופיל שחקן</a>
      <a class= "nav-a" href="#" id="logout-link">התנתק</a>
    `;
  } else {
    nav.innerHTML = `
      <a class= "nav-a" href="/public/index.html">בית</a>
       <a class= "nav-a" href="/public/about.html">אודות</a>
      <a class= "nav-a" href="/public/game.html">🎮המשחק</a>
      <a class= "nav-a" href="/public/contactandhelp.html">צור קשר</a>
        <a class= "nav-a" href="/public/Sign-Up_Page.html">הרשמה</a>
      <a class= "nav-a" href="/public/Log-in_Page.html">התחברות</a>
    `;
  }

  // Handle logout event
  const logoutLink = document.getElementById("logout-link");
  if (logoutLink) {
    logoutLink.addEventListener("click", (e) => {
      e.preventDefault();
      logoutUser();
    });
  }

  // Handle game button (if exists)
  const playButton = document.getElementById("PlayButton");
  if (playButton) {
    playButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (loggedIn === "true") {
        window.location.href = "/public/game.html";
      } else {
        window.location.href = "/public/Log-in_Page.html";
      }
    });
  }
}


function logoutUser() {
  localStorage.setItem("loggedIn", "false");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("CurrentlyloggedIn");
  window.location.href = "/public/index.html";
}

