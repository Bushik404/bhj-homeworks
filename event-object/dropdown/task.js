let addClass = document.querySelector(".dropdown__list")
let drop = document.querySelector(".dropdown__value")
function onClick(){
    if(document.querySelector(".dropdown__list_active")=== null){
        addClass.classList.add("dropdown__list_active");
    }else{
        addClass.classList.remove("dropdown__list_active");
    }
}
drop.addEventListener('click',onClick)
function change(input){
    console.log(input);
    drop.textContent = input;
    addClass.classList.remove("dropdown__list_active");
}
let a = document.querySelectorAll(".dropdown__link")
for(let i = 0; i < a.length; i++){
    a[i].href = "#";
    a[i].addEventListener('click',change.bind(null, a[i].textContent),false);
    }

