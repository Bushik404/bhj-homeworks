let a = document.querySelectorAll(".has-tooltip");
for(let i = 0; i< a.length; i++){
a[i].addEventListener('click',()=>{
    if(document.querySelectorAll('.tooltip')=== null || document.querySelectorAll('.tooltip').length!= a.length){
        a[i].href = "#"
        a[i].insertAdjacentHTML('afterend','<div class="tooltip" data-position= "bottom"></div>')
        let b = document.querySelectorAll('.tooltip')
        b[i].classList.add("tooltip_active")
        b[i].textContent = a[i].title
    }else{
        b[i].classList.remove('tooltip_active')
        // console.log(1)
    }
})
}