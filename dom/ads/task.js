let all = document.querySelectorAll(".rotator__case")
let counter = 0;
    setInterval(()=>{
    if(counter != 0){
        console.log(counter)
        all[counter].classList.add("rotator__case_active")
        all[counter].previousElementSibling.classList.remove("rotator__case_active")
        if(counter === all.length-1){
            counter = 0;
            return
        }
        counter++;
    } else if(counter === 0){
        all[all.length-1].classList.remove("rotator__case_active")
        all[counter].classList.add("rotator__case_active")
        counter++;
    }
},1000)
