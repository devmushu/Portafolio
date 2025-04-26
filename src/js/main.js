let body = document.querySelector("body")
let themeIcon = document.getElementById("dark")
const loader = document.getElementById("loader")

window.addEventListener("DOMContentLoaded", () => {
    showLoader();
})

window.addEventListener("load", () => {
    setTimeout(() => {

        hideLoader();
        ScrollReveal().reveal('.scroll-img');
        ScrollReveal().reveal('#animado');
    }, 1998)

})

const showLoader = () => {
    loader.classList.add("show_loader")

}
const hideLoader = () => {
    loader.classList.remove("show_loader")
    const app = document.getElementById("app")
    app.classList.add("view-app")

}