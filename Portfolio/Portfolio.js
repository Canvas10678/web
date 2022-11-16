var navbar = document.querySelector("navbar");
window.addEventListener("scroll",function() {
    navbar.classList.toggle("sticky",this.window.scrollY > 0);
});
