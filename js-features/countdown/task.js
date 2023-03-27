function timeOnSite(){
    let timer = document.getElementById("timer");
    timer.textContent-=1;
    }
    
    const a = setInterval(timeOnSite,1000);
    setTimeout(() => {
    clearInterval(a);
    alert("Вы победили в конкурсе!");
    }, 59500);