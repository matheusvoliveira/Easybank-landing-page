var ul = document.getElementById('ulOne')
var image = document.getElementById('hamburguer')
function click1(){
    ul.style.display = 'block'
    var close = image.src = "./images/icon-close.svg"
}
function menu(){
    ul.style.display = 'none'
    var close = image.src = "./images/icon-hamburger.svg"
}
