let all =  document.querySelectorAll(".menu__link");
for(let i = 0; i < all.length; i++){
    let element = all[i];
    element.onclick = function(){
        if(element.closest("li").querySelector("ul")!=null){
            element.href = "#";
            let tmp = document.querySelectorAll("ul");
            for(let j = 0;j<tmp.length; j++){
                tmp[j].classList.remove("menu_active");
            }
            element.closest("li").querySelector("ul").classList.add("menu_active");
        }

    }

}

