let textArea = document.getElementById('editor')
textArea.addEventListener('keyup',(e)=>{
    let words = textArea.value;
    if(words!=textArea.value){
        localStorage.removeItem('text')
    }else{
        localStorage.setItem('text', words)
    }
})
textArea.value = localStorage.getItem('text')