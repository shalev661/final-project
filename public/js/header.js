function header() {
  document.addEventListener("DOMContentLoaded", () => {
    const headerPlace = document.getElementById("headerplace")
    const img2 = document.getElementById("img-get")
    headerPlace.innerHTML = `
    <a id="title2" href="../public/index.html">VerbaGuard</a><br><br><br><br>
    <div id="a-header">
          <a href="#">בית</a>
          <a href="../public/game.html">🎮המשחק</a>
          <a href="../public/about.html">אודות</a>
          <a href="../public/log-in_page.html">התחברות</a>
          <a href="../public/Sign-Up_Page.html">הרשמה</a>
          <a href="../public/Contactandhelp.html">צור קשר</a>
          </div>
        `;
    const img = document.createElement("img")
    img.src = "../final-project2/public/img/img-header.jpg"
    img.alt = "..."
    img.style.width = "150px";
    img.style.height = "150px";
    img2.appendChild(img)
  })
}

header()