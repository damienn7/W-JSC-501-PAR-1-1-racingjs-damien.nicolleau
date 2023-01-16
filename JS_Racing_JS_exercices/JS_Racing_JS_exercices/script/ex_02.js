
window.onload = function(){
    var count=0;
    const div=document.getElementsByTagName("div")[2];
    function countclick(){
        count++;
        div.innerHTML = count;
    };    
    div.addEventListener("click", countclick);
};


