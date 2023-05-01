var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var extras = document.querySelector(".extras")

menuIcon.onclick = function()
{
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
    container.classList.toggle("extries")
}