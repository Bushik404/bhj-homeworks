let click = document.getElementById("cookie");
click.onclick = function clickMoment(){
let counter = document.getElementById("clicker__counter");
counter.textContent++;
if(click.width == 200){
click.width = 220;
} else {
click.width = 200;
}
}
function timeOnSite(){
let timer = document.getElementById("timer");
timer.textContent-=1;
}