const menu = document.querySelector(".hamburger")
const sliding = document.querySelector(".links")

menu.onclick = function(){
    sliding.classList.toggle("slider")
}