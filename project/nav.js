document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const loggedIn = localStorage.getItem("loggedIn");
  
    if (nav) {
      if (loggedIn === "true") {
        nav.innerHTML = `
          <a href="index.html">בית</a>
          <a href="/game.html">The Game</a>
          <a href="about.html">אודות</a>
          <a href="profile.html">פרופיל</a>
          <a href="#" onclick="logoutUser()">התנתק</a>
        `;
      } else {
        nav.innerHTML = `
          <a href="index.html">בית</a>
          <a href="/game.html">The Game</a>
          <a href="about.html">אודות</a>
          <a href="login.html">התחברות</a>
        `;
      }
    }
  });
  