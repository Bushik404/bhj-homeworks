let input = document.getElementById("task__input")
let begin = document.getElementById("tasks__list")
input.addEventListener('keydown',(e)=>{
    if(e.key === "Enter"){
       if(input.value === ""){
        return;
       }
        begin.insertAdjacentHTML("afterbegin",'<div class="task"></div>');
        let task = document.querySelector(".task")
        task.insertAdjacentHTML("afterbegin", '<div class="task__title"></div>');
        task.insertAdjacentHTML("beforeend",'<a href="#" class="task__remove">&times;</a>');
        document.querySelector(".task__title").textContent = input.value;
        input.value = "";
        let cross = document.querySelector(".task__remove")
        cross.addEventListener('click',()=>{
        task.remove()
    })
}
})