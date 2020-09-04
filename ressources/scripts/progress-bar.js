function setProgressbar(){
    const bars = document.querySelectorAll(".progress-bar > .progress");

    window.setTimeout(setWidth, 1000);
    
    function setWidth(){
        bars.forEach(function(bar){
            let barPercent = bar.getAttribute("data-progress-percent");
            bar.style.width = barPercent + "%";
        });
    }
}