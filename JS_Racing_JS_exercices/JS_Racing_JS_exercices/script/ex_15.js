
window.onload = function() {
    let span;
    const url = document.getElementsByTagName("a")[0].href;
    async function request(){
        let response = await fetch(url);
        return await response.json();
    }

    async function response(){
        let json = await request();
        try {
            window.localStorage.getItem("rate",json.bpi.EUR.rate_float); 
        } catch (error) {
            console.log(error);
            if(error){
                window.localStorage.setItem("rate",json.bpi.EUR.rate_float);
                window.localStorage.getItem("rate");
            }
        }

        if (window.localStorage.getItem("rate")>json.bpi.EUR.rate_float) {
            span = document.getElementsByTagName("span")[0];
            span.style.backgroundColor = "green";
        }else if(window.localStorage.getItem("rate")==json.bpi.EUR.rate_float){
            span = document.getElementsByTagName("span")[0];
            span.style.backgroundColor = "orange";
        }else{
            span = document.getElementsByTagName("span")[0];
            span.style.backgroundColor = "red";
        }
        console.log(window.localStorage.getItem("rate"));
        console.log(json.bpi.EUR.rate_float); 
        
        let intervalId = setInterval(function(){window.localStorage.removeItem("rate");
        window.localStorage.setItem("rate",json.bpi.EUR.rate_float)},1000);

        clearInterval(intervalId);
    }

    response();
    
}