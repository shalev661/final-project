function header(){
  document.addEventListener("DOMContentLoaded", () => {
    const headerPlace = document.getElementById("headerplace");
    const title = document.getElementById("title")
    headerPlace.innerHTML = `
          <a href="#">בית</a>
          <a href="./project/game.html"> 🎮המשחק</a>
          <a href="./project/about.html">אודות</a>
          <a href="./project/log-in_age.html">התחברות</a>
          <a href="./project/Sign-Up_Page.html">הרשמה</a>
          <a href="./project/Contactandhelp.html">צור קשר</a>
        `;
      }
)}

header()