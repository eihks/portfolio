const burgerMenu=document.querySelector(".burger-menu"),burgerIco=document.querySelector(".burger-menu-ico"),closeBurgerIco=document.querySelector(".close-burger-ico"),burgerMenuBtns=document.querySelectorAll(".burger-menu-btn a"),logo=document.querySelector(".burger-menu-logo > a");let activeBtn=void 0;function buttons(e){burgerMenu.style.display="none",activeBtn!=this&&null!=activeBtn&&activeBtn.classList.remove("active-burger-menu-btn"),e!=logo&&(e.classList.add("active-burger-menu-btn"),activeBtn=e)}burgerIco.addEventListener("click",function(){burgerMenu.style.display="block"}),closeBurgerIco.addEventListener("click",function(){burgerMenu.style.display="none"}),logo.addEventListener("click",function(){buttons(logo)}),burgerMenuBtns.forEach(function(e){e.addEventListener("click",function(){buttons(e)})});