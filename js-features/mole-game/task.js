let kill = document.getElementById("dead");
let lose = document.getElementById("lost")
for(let i = 1; i < 10; i++){
let click = document.getElementById(`hole${i}`);
click.onclick = function(){
if(click.classList.value === "hole hole_has-mole" ){
kill.textContent++;
if(kill.textContent >= 10){
alert("Вы победили)");
kill.textContent = 0;
lose.textContent = 0;
}
} else {
lose.textContent++;
if(lose.textContent >= 5){
kill.textContent = 0;
lose.textContent = 0;
alert("Вы проиграли(");
}
}
}
}