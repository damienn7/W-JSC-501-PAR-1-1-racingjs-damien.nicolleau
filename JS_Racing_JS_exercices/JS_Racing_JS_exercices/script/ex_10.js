
window.onload = function(){
    let submit = document.getElementsByTagName("button")[0];
    let input = document.getElementsByTagName("input")[0];
    submit.addEventListener("click",display);

    async function request(){
        let baseUrl = "https://apicarto.ign.fr/api/codes-postaux/communes/";
        if (submit.innerText != "" || submit.innerText != null) {
            try {
                let response = await fetch(baseUrl+input.value);
                return await response.json();
            } catch (error) {
                alert("Veuillez saisir un code postal valide [ex. : 44400]");
                console.log("error");
            }
        }
    }

    async function display(){
        let json = await request();
        let divToAppend = document.getElementsByTagName("div")[2];
        let element = document.createElement("p");
        
        element.innerHTML = json[0].nomCommune+", "+json[0].libelleAcheminement;


        try {
            document.getElementsByTagName("p")[2].remove();
        } catch (error) {
            console.log(error);
        }
        
        divToAppend.appendChild(element);


    }
}