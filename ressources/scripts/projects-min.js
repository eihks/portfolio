const projectsImg=document.querySelectorAll(".project-img");let count=1;projectsImg.forEach(function(c){c.style.backgroundImage="url('./images/projects/project"+count+".png')",count++});