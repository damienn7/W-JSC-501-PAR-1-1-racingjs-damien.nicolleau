
window.onload = function(){
    let storage = window.localStorage;
    let url = document.getElementsByTagName("a")[0].href;
    storage.setItem("ex12_img",url);

    let div = document.getElementsByTagName("div")[2];

    let element = document.createElement("img");
    element.src = storage.getItem("ex12_img");

    element.style.height = "200px";
    element.style.width = "510px";

    div.appendChild(element);
}