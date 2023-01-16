

window.onload = function () {

    let bool = false;
    let canvas = document.getElementsByTagName("canvas")[0];
    let body = document.body;
    let divDrag = document.getElementsByTagName("div")[2];
    let divCoordinates = document.getElementsByTagName("div")[3];

    canvas.setAttribute("draggable", "true");

    /* events fired on the draggable target */

    canvas.addEventListener("drag", (event) => {

        function update(e) {
            let array = setCoords(e, "offset");
            //let array = setCoords(e, "client");
            //let array = setCoords(e, "screen");
            //let array = setCoords(e, "page");
            return array;
        }

        //divDrag.addEventListener("mouseenter", update, false);
        //body.addEventListener("mousemove", update, false);
        //divDrag.addEventListener("mouseleave", update, false);

        function setCoords(e, type) {
            let canvas = document.getElementsByTagName("canvas")[0];
            canvas.setAttribute("draggable", "true");
            const idX = `${type}X`;
            const idY = `${type}Y`;

            canvas.style.visibility = "hidden";
            divCoordinates.innerText = "New coordinates => {x:" + e[idX] + ",y:" + e[idY] + "}";

            let array = { "x": e[idX], "y": e[idX] };

            //x = e.clientX - rect.left;
            //y = e.clientY - rect.top;

            return array;
        }


        // select | help | importer un fichier mysql 

        update(event);








    });

if(bool==false){
    divDrag.addEventListener("drop", (event) => {
        function update(e) {
            let array = setCoords(e, "offset");
            //let array = setCoords(e, "client");
            //let array = setCoords(e, "screen");
            //let array = setCoords(e, "page");
            return array;
        }

        //divDrag.addEventListener("mouseenter", update, false);
        //body.addEventListener("mousemove", update, false);
        //divDrag.addEventListener("mouseleave", update, false);

        function setCoords(e, type) {
            const idX = `${type}X`;
            const idY = `${type}Y`;
            canvas.style.position = "absolute";
            //canvas.style.zIndex = "1000";
            console.log(divDrag);
            divDrag.style.position = "relative";
            divDrag.style.width = "698px";
            divDrag.style.height = "70.39px";
            //divDrag.style.zIndex = "100";
            let canvasCSS = window.getComputedStyle(canvas, null);
            let leftProperty = canvasCSS.getPropertyValue("left");
            let topProperty = canvasCSS.getPropertyValue("top");
            let prevPosX = leftProperty;
            let prevPosY = topProperty;

            //698 - 70.39

            let canva = document.getElementsByTagName("canvas")[0];
            canva.setAttribute("draggable", "true");
            canva.style.left = e[idX] - 10 + "px";
            canva.style.top = e[idY] - 10 + "px";
            canvas.style.visibility = "visible";
            canva.style.position = "absolute";
            canvas.style.margin = "0 5";
            console.log(parseInt(prevPosX));
            console.log(parseInt(prevPosY));
        }

        update(event);
    });
}else{
    
    canvas.style.left = "";
    canvas.style.top = "";
    //canvas.style.position = "";
    canvas.style.visibility = "visible";
    //event.preventDefault();

}

    canvas.addEventListener("dragstart", (event) => {
        // store a ref. on the dragged elem
        canvas.style.opacity = "0.5";
    });

    canvas.addEventListener("dragend", (event) => {
        canvas.style.opacity = "1";

        if(bool==true){

                canvas.style.left = "";
                canvas.style.top = "";
                //canvas.style.position = "";
                canvas.style.visibility = "visible";
                //event.preventDefault();
            
            
        }


    });

    /* events fired on the drop targets */

    divDrag.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
        //set les limites de la divite parente du canvas 
        //math.min - math.max
        bool = false;
    }, false);


    divDrag.addEventListener("dragenter", (event) => {
        // highlight potential drop target when the draggable element enters it
        divDrag.style.backgroundColor = "#2F4F4F";
        bool = false
    });


    divDrag.addEventListener("dragleave", (event) => {
        // reset background of potential drop target when the draggable element leaves it
        event.preventDefault();
        divDrag.style.backgroundColor = "white";
        bool = true;
    });





    //console.log(array["x"]);


}