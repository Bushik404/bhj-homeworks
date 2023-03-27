let element = document.getElementById('modal_main');
let elementShow = document.getElementById("modal_success");
element.classList.add("modal_active");
element.childNodes[1].childNodes[1].onclick = function(){
    element.classList.remove("modal_active");
}
element.childNodes[1].childNodes[3].onclick = function(){
    elementShow.classList.add("modal_active");
    element.classList.remove("modal_active");
}
elementShow.childNodes[1].childNodes[1].onclick = function(){
    elementShow.classList.remove("modal_active")
}

