

window.onload = function(){
    let canvas = document.getElementsByTagName("canvas")[0];
    let draw = canvas.getContext("2d");
    let pausebtn = document.getElementsByTagName("button")[0];
    let stopbtn = document.getElementsByTagName("button")[1];
    let mutebtn = document.getElementsByTagName("button")[2];
    let audio = new Audio("./triangle.ogg");
    let mutebool = false;

    draw.beginPath();
    draw.moveTo(6,6);
    draw.lineTo(14,10);
    draw.lineTo(6,14);
    draw.closePath();
    draw.fillStyle = "white";
    draw.fill();

    canvas.addEventListener("click",playMusic);

    function playMusic(){
        audio.play();
    }

    pausebtn.addEventListener("click",pauseMusic);

    function pauseMusic(){
        audio.pause();
    }

    stopbtn.addEventListener("click",stopMusic);

    function stopMusic(){
        audio.pause();
        audio.currentTime = 0.0;
    }

    mutebtn.addEventListener("click",muteMusic);

    function muteMusic(){
        if(mutebool==false){
            audio.muted = true;
            mutebool=true;
        }else{
            audio.muted = false;
            mutebool=false;
        }
    }
    
};