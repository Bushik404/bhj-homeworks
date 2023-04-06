let fontSize = document.querySelectorAll(".font-size")
for(let i = 0; i< fontSize.length; i++){
    let element = fontSize[i];
    element.onclick = function (){
        element.href = "#";
        document.querySelector(".font-size_active").classList.remove("font-size_active");
        element.classList.add("font-size_active");
        let main = document.getElementById("book")
        if(element.getAttribute('data-size') == "small"){
            main.classList.remove("font-size_big");
            main.classList.add("book")
            document.getElementById("book").classList.add("font-size_small")
        }else if(element.getAttribute('data-size') == "big"){
            main.classList.remove("font-size_small");
            main.classList.add("book")
            document.getElementById("book").classList.add("font-size_big")
        }else{
            main.classList.remove("font-size_small");
            main.classList.remove("font-size_big");
        }
    }
}
