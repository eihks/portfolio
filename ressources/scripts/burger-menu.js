const burgerMenu = document.querySelector(".burger-menu");
const burgerIco = document.querySelector(".burger-menu-ico");
const closeBurgerIco = document.querySelector(".close-burger-ico")
const burgerMenuBtns = document.querySelectorAll(".burger-menu-btn a");
const logo = document.querySelector(".burger-menu-logo > a");
let activeBtn = undefined;

burgerIco.addEventListener("click", function(){
    burgerMenu.style.display = "block";
})

closeBurgerIco.addEventListener("click", function(){
    burgerMenu.style.display = "none";
})

logo.addEventListener("click", function(){
    buttons(logo);
});

burgerMenuBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
        buttons(btn);
    })
})


function buttons(btn){
        burgerMenu.style.display = "none";
        if(activeBtn != this && activeBtn != undefined){
            activeBtn.classList.remove("active-burger-menu-btn");
        }

        if(btn != logo){
            btn.classList.add("active-burger-menu-btn");
            activeBtn = btn;
        }  
}