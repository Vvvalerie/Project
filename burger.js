let burgerMenu=document.querySelector(".burger_menu");
let burgerIcon=document.querySelector(".burger_icon");
let burgerNav=document.querySelector(".burger_nav");
burgerIcon.addEventListener("click",function(){
    burgerNav.classList.toggle("active");
});