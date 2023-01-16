

window.onload = function(){
    window.addEventListener("keydown", (event)=>{
        
        let div = document.getElementsByTagName("div")[2];
        
        div.style.overflowWrap = "break-word";
        
        if(event.keyCode >= 49 && event.keyCode <= 90){
            div.innerHTML += event.key;
        }

    });
}