let redChat = document.querySelector(".chat-widget")
redChat.addEventListener('click',()=>{
    redChat.classList.add("chat-widget_active")
})
let today = new Date();
const messages = document.querySelector( '.chat-widget__messages' );
let a = document.querySelector(".chat-widget__input")
a.addEventListener('keydown',(e)=>{
    if(e.key === 'Enter'){
        if(document.getElementById('chat-widget__input').value === ""){
            return;
        }
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${today.getHours()}:${today.getMinutes()}</div>
            <div class="message__text">
            ${document.getElementById('chat-widget__input').value}
            </div>
          </div>
          <div class="message">
                <div class="message__time">${today.getHours()}:${today.getMinutes()}</div>
                <div class="message__text">Добрый день!</div>
            </div>`
          document.getElementById('chat-widget__input').value = '';
    }
})