function footerplace(){
document.addEventListener("DOMContentLoaded", ()=> {
const footerplace = document.getElementById("footerplace")
footerplace.innerHTML= `
<a href="#">home page</a>
<a href="../public/about.html">about</a>
<a href="../public/Contactandhelp.html">help/contact</a>
<a href="../public/Sign-Up_Page.html">sign up</a>
<a href="../public/Log-in_Page.html">Log in</a>
<h1 class="footercopyrighth1">© כל הזכויות שמורות לסטארטאפיסטים שנה א'</h1>
`;
})
}
footerplace()