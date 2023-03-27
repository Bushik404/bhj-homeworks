let right = document.getElementsByClassName("slider__arrow slider__arrow_next");
let left = document.getElementsByClassName("slider__arrow slider__arrow_prev");
let mass = document.querySelectorAll(".slider__item");
console.log(left, right);
right[0].onclick = function(){
    for(let i = 0; i < mass.length; i++){
        if(mass[i].classList.contains("slider__item_active")){
            if(i+1 === mass.length){
                mass[0].classList.add("slider__item_active");
            }
            mass[i].classList.remove("slider__item_active");
            mass[i+1].classList.add("slider__item_active");
            break;
        }
    }
}
left[0].onclick = function(){
    for(let i = mass.length-1; i > -1; i--){
        if(mass[i].classList.contains("slider__item_active")){
            if((i-1) === -1){
                mass[i].classList.remove("slider__item_active");
                mass[mass.length-1].classList.add("slider__item_active"); 
            }
                mass[i].classList.remove("slider__item_active");
                mass[i-1].classList.add("slider__item_active");
            break;
        }
    }
}