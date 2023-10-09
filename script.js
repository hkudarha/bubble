function makebubble(){
        var clutter ="";
    for(var i = 1; i<=112; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runtimer(){
  var timerint =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer; 
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over</h1>`;
        }
    },1000);
}

var  hitrn = 0;
function hit(){
    hitrn =Math.floor(Math.random()*10);
    document.querySelector("#hitno").textContent = hitrn;
}

var score =0;
function incrScore(){
    score += 10;
    document.querySelector("#scoreno").textContent =score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        incrScore();
        makebubble();
        hit();
    }
});


makebubble();
runtimer();
hit();

