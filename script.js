const sideNav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close-btn")

hamburger.addEventListener("click", () => {
   sideNav.classList.add("active")
})
closeBtn.addEventListener("click", () => {
   sideNav.classList.remove("active")
})

window.addEventListener("scroll", () => {
   sideNav.classList.remove("active", scrollY > 20)
})