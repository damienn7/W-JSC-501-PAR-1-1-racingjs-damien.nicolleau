

window.onload = function () {
    const div = document.getElementsByTagName("div")[2];
    let intervalID;
    // equivalent avec query selector
    //const footer = document.querySelector('footer div');

    let element = document.createElement("img");
    element.src = window.localStorage.getItem("ex12_img");
    element.style.width = "100%";
    element.id = "img";
    div.appendChild(element);

    const img = document.getElementById("img");


    div.addEventListener("mouseover", () => {
        //while (hundred>0) {
        //console.log(newwidth + "px");
        intervalID = setInterval(function(){
            img.style.width = img.width * 0.95 + "px";
        }, 1000);
    
        //}
    });

    div.addEventListener("mouseout", () => {
        img.style.width = "100%";
        clearInterval(intervalID);
    });

    img.addEventListener("click", () => {
        try {
            window.localStorage.removeItem("ex12_img");
        } catch (error) {
            console.log(error);
        }
        //permet de rafraichir une page
        location.reload();
    });
};