const botaoMobile = document.querySelector('.menu__mobile__botao');
const menuLinks = document.querySelector('.menu__mobile');
const closeMenu = document.querySelector('.menu__mobile__close')
const body = document.querySelector('body')

const exibeMenuMobile =  () => {
   menuLinks.style.display = "block";
   body.style.backgroundColor = "#494949ce";
   botaoMobile.style.display ="none";
   closeMenu.style.display = "block";
}

const fechaMenu = () => {
   menuLinks.style.display = "none";
   body.style.backgroundColor = "transparent";
   botaoMobile.style.display ="block";
   closeMenu.style.display = "none";
}

closeMenu.onclick = function () {
   fechaMenu()
}

botaoMobile.onclick = function () {
   exibeMenuMobile();
}