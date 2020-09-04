const page = document.querySelector(".page");
const loadingScreen = document.querySelector(".loading-screen");

window.onload = function(){
    if(document.readyState == "complete" && allScriptsLoaded){
        particlesJS.load('particles-js', './ressources/assets/particles.json', function() {
            window.setTimeout(function(){
                page.style.visibility = "visible";
                loadingScreen.style.display = "none";
                window.scrollY = 0;
                const Writter = new Write();
                Writter.selectElements();
            }, 1500)
          });
    }
}