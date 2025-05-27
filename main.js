const menu = document.getElementById("menu")
const navLink = document.getElementById("nav")
const closeBtn = document.querySelector(".close")

menu.addEventListener("click", ()=>{
  navLink.style.right = 0
  
})
closeBtn.addEventListener("click", ()=>{
  console.log("close")
  navLink.style.right = "-200px"
})
