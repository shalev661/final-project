function footerplace(){
document.addEventListener("DOMContentLoaded", ()=> {
  fetch("../project/footer.html")
    .then((response)=> response.text())
    .then((data)=> {
      const footerplace = document.createElement("div")
      footerplace.innerHTML = data;
      document.body.appendChild(footerplace)
   })
})
}
footerplace()