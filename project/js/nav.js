document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("main-nav");
    const loggedIn = localStorage.getItem("loggedIn");
  
    if (nav) {
      if (loggedIn === "true") {
        nav.innerHTML = `
          <a href="../index.html">בית</a>
          <a href="./project/game.html" >🎮המשחק </a>
          <a href="./project/profile.html">פרופיל שחקן</a>
          <a href="#" onclick="logoutUser()">התנתק</a>
        `;
      } else {
        nav.innerHTML = `
          <a href="../index.html">בית</a>
          <a href="./project/game.html"> 🎮המשחק</a>
          <button id="special-btn" onclick="toggleLogin()">התחברות</button>
          <a href="./project/Sign-Up_Page.html">הרשמה</a>
        `;
      }
    }
  });
  