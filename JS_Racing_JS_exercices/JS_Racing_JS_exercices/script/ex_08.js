

window.onload = function(){
    canvas = document.getElementsByTagName("canvas");
 
    canvas[0].style.backgroundColor = "orange";
    canvas[1].style.backgroundColor = "orange";
    canvas[2].style.backgroundColor = "orange";
    canvas[3].style.backgroundColor = "orange";
    canvas[4].style.backgroundColor = "olive";
    canvas[5].style.backgroundColor = "olive";
    canvas[6].style.backgroundColor = "olive";
    canvas[7].style.backgroundColor = "purple";
    canvas[8].style.backgroundColor = "purple";
    canvas[9].style.backgroundColor = "purple";
    canvas[10].style.backgroundColor = "purple";
    canvas[11].style.backgroundColor = "black";


    for(let i = 0; i < canvas.length;i++){
        canvas[i].style.pointerEvents = "none";
    }
    
    /*
    for(let i = 0; i < canvas.length;i++){

        canvas[i].style.pointerEvents = "none";
        
        let canvasCSS = window.getComputedStyle(canvas[i],null);
        let bgProperty = canvasCSS.getPropertyValue("background-color");
        let prevcanv = canvas[i];
        i++;
        canvas[i].style.pointerEvents = "none";
        let nextcanv = canvas[i];
        let canvasCSS1 = window.getComputedStyle(canvas[i],null);
        let bgProperty1 = canvasCSS1.getPropertyValue("background-color");

        if(bgProperty == bgProperty1){
           i++;
        }
        
        if(bgProperty != bgProperty1){
           nextcanv.style.backgroundColor = bgProperty;
           prevcanv.style.backgroundColor = bgProperty1;
           i++;
        }
        
    }
    */


};