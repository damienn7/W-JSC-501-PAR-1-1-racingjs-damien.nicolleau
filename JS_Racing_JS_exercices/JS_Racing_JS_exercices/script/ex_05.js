
window.onload = function(){

    let count = 16 ;
    let plus = document.getElementsByTagName("button")[0];
    let minus = document.getElementsByTagName("button")[1];
    
    plus.addEventListener("click",increase);
    
    function increase(){
        count++;
        document.body.style.fontSize = count + "px";
        
    }

    minus.addEventListener("click",decrease);
    
    function decrease(){
        count--;
        document.body.style.fontSize = count + "px";
    }

    let background = document.getElementsByTagName("select")[0];

    background.addEventListener("click",()=>{
        background.addEventListener("change",()=>{
            switch(background.value){
                case "#1abc9c":
                    document.body.style.background = background.value;
                    break;
                case "#f1c40f":
                    document.body.style.background = background.value;
                    break;
                case "#d35400":
                    document.body.style.background = background.value;
                    break;
                case "#e74c3c":
                    document.body.style.background = background.value;
                    break;
                case "#40d47e":
                    document.body.style.background = background.value;
                    break;
                case "#3498db":
                    document.body.style.background = background.value;
                    break;
                default :
                    break;
            }
        });
    });

};