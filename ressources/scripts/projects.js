const projectsImg = document.querySelectorAll(".project-img");
let count= 1;

projectsImg.forEach(function(el){
    el.style.backgroundImage = "url('./images/projects/project" +count + ".png')"; 
    count++
})