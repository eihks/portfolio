function setProgressbar(){const e=document.querySelectorAll(".progress-bar > .progress");window.setTimeout(function(){e.forEach(function(e){let t=e.getAttribute("data-progress-percent");e.style.width=t+"%"})},1e3)}