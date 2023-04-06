function visibility (){
    let reveal = document.querySelector(".reveal");
    let {top, bottom} =  reveal.getBoundingClientRect()
        if(top > window.innerHeight|| bottom < 0){
            if(reveal.classList.contains("reveal_active")){
            reveal.classList.remove("reveal_active")
            }
        }else{
        reveal.classList.add("reveal_active");
        }
        
    }
    window.addEventListener('scroll',()=>{
        setInterval(visibility(),1000)
    })