const sideNav = document.querySelector("nav")
const hamburger = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close-btn")
const scrollToTopButton = document.querySelector(".scroll-to-top-btn")

hamburger.addEventListener("click", () => {
   sideNav.classList.add("active")
})
closeBtn.addEventListener("click", () => {
   sideNav.classList.remove("active")
})
scrollToTopButton.addEventListener("click", () => {
   window.scrollTo(0,0)
})

window.addEventListener("scroll", () => {
   sideNav.classList.remove("active", scrollY > 20)
   scrollToTopButton.classList.toggle("active", scrollY > 500)
})