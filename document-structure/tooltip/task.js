let a = document.querySelectorAll(".has-tooltip");
for(let i = 0; i< a.length; i++){
    a[i].href = "#"
    a[i].insertAdjacentHTML('afterend','<div class="tooltip" style="left: 0; top: 0"></div>')
    let b = document.querySelectorAll('.tooltip')
    b[i].textContent = a[i].title
    a[i].addEventListener('click',(e)=>{
        b[i].style.cssText = `left: ${e.x}px;`
        if(b[i].classList.contains('tooltip_active')){
            b[i].classList.remove('tooltip_active')
        }else{
            b[i].classList.add('tooltip_active')
        }
    })
}