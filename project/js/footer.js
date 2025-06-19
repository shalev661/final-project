function footerplace(){
document.addEventListener("DOMContentLoaded", ()=> {
const footerplace = document.getElementById("footerplace")
footerplace.innerHTML= `
<a href="#">home page</a>
<a href="project/about.html">about</a>
<a href="./project/Contactandhelp.html">help/contact</a>
<a href="./project/Sign-Up_Page.html">sign up</a>
<a href="../project/Log-in Page.html">Log in</a>
<h1 class="footercopyrighth1">© כל הזכויות שמורות לסטארטאפיסטים שנה א'</h1>
`;
})
}
footerplace()