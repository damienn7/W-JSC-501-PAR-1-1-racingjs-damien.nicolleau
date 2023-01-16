

window.onload = function(){
    async function getSchools(){
        let url = "https://data.education.gouv.fr/api/records/1.0/search/?dataset=fr-en-annuaire-education&q=&start=0&rows=25&facet=nom_etablissement&facet=nom_commune&facet=mail";
        try {
            let result = await fetch(url);
            return await result.json();
        } catch (error) {
            console.log(error);
        }
    }

    async function displaySchools(){
        let json = await getSchools();
        let htm = "";
        let schools = json["records"];
        console.log(schools);
        
        schools.forEach(school => {
            console.log(school.fields.nom_commune);
            htm += school.fields.nom_commune+" - "+school.fields.nom_etablissement+" - "+school.fields.mail+"<br>";
        });

        element = document.createElement("p");
        element.innerHTML = htm;
        document.getElementsByTagName("div")[2].appendChild(element);

        document.getElementsByTagName("div")[2].style.textAlign = "start";
        document.getElementsByTagName("div")[2].style.overflowWrap = "break-word";
    }

    displaySchools();
}