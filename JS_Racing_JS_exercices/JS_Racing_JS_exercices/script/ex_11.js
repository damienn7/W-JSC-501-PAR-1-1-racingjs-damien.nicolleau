

window.onload = function () {
    let container = document.getElementsByTagName("div")[2];
    let textOnSetCookie = "This website use cookies, click OK to accept it. ";
    let textOnDeleteCookie = "This website use cookies, click DELETE to delete it. ";


    if (document.getElementsByTagName("a")[0].innerHTML == "OK") {
        document.getElementsByTagName("a")[0].id = "add";
    } 

    if(document.getElementsByTagName("a")[0].innerHTML == "DELETE"){
        document.getElementsByTagName("a")[0].id = "remove";
    }

        document.getElementById("add").addEventListener("click",()=>{
                setCookie();
        });

    function setCookie() {
        try {
            document.getElementsByTagName("a")[0].remove();
        } catch (error) {
            console.log(error);
        }

        container.innerHTML = "";

        let element = document.createElement("a");
        let text = document.createTextNode(textOnDeleteCookie);
        element.href = "#";
        element.innerHTML = "DELETE";
        element.id = "remove";
        container.appendChild(text);
        container.appendChild(element);

        let date = new Date();
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
        const expires = date.toUTCString();

        console.log(expires);
        
        document.cookie= "wac=red;"+expires+";path=http://127.0.0.1:5500/ex_11.html#" ;
        
        let cookie = document.cookie;
        console.log(cookie);

        try {
            document.getElementById("remove").addEventListener("click",deleteCookie);
        } catch (error) {
            console.log(error);
        } 

    }


    function deleteCookie(){
        try {
            document.getElementsByTagName("a")[0].remove();
        } catch (error) {
            console.log(error);
        }
        
        container.innerHTML = "";
        
        let element = document.createElement("a");
        let text = document.createTextNode(textOnSetCookie);
        element.href = "#";
        element.id = "add";
        element.innerHTML = "OK";
        container.appendChild(text);
        container.appendChild(element);

        document.cookie = "wac=;"+"Thu, 01 Jan 1970 00:00:00 UTC"+";path=http://127.0.0.1:5500/ex_11.html#" ;

        let cookie = document.cookie;
        console.log(cookie);

        try {
            document.getElementById("add").addEventListener("click",setCookie);
        } catch (error) {
            console.log(error);
        } 
    }

    
}