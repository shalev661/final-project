function header() {
  document.addEventListener("DOMContentLoaded", () => {
    const headerPlace = document.getElementById("headerplace");
    const img = document.createElement("img")
    img.src = "./public/img/img-header.jpg"
    img.alt = "..."
    const img2 = document.getElementById("img-get")
    img2.appendChild(img)
    headerPlace.innerHTML = `
          <a href="#">בית</a>
          <a href="../public/game.html">🎮המשחק</a>
          <a href="../public/about.html">אודות</a>
          <a href="../public/log-in_page.html">התחברות</a>
          <a href="../public/Sign-Up_Page.html">הרשמה</a>
          <a href="../public/Contactandhelp.html">צור קשר</a>
        `;
  })
}

header()    