

window.onload = function() {
    let form = document.getElementsByTagName("form")[0];
    let input = document.getElementsByTagName("input")[0];
    let content;


    input.addEventListener("change",(event)=>{
        event.preventDefault();
        getData(event);
    });
    // form.addEventListener("formdata",(event)=>{

    // });

    form.addEventListener("submit",(event)=>{
        event.preventDefault();

        if (content != "undefined") {
            const element = document.createElement("p");
        
            element.innerText = content;
            element.style.textAlign = "start";

            document.getElementsByTagName("div")[3].appendChild(element);
        
        }else{
            alert("aucun contenu a afficher");
        }
        
    });


     async function getData(e){
        
        let input = e.target;

        console.log(input.files[0].text());

        console.log(input.files[0].type);

        if (input.files[0].type == 'text/plain') {

            content = await input.files[0].text();

            console.log(content);
        
        }else{
            alert("echec du chargenent du contenu");
        }
    }
}