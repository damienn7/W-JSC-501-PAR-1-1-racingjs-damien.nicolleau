

window.onload = function () {
    const url = document.getElementsByTagName("a")[0].href;
    const btn = document.getElementsByTagName("button")[0];
    let htm = "";
    let txt;
    let line;

    async function request() {
        let response = await fetch(url);
        return await response.json();
    }


    async function response() {
        let json = await request();
        console.log(json);

        //let array = JSON.Parse(json);

        htm += "[";
        json.forEach(element => {
            line = element.body.replaceAll('\n','');
            htm += "\n\t{\n\t\t\"userId\": \"" + element.userId + "\",\n\t\t\"id\": \"" + element.id + "\",\n\t\t\"title\": \"" + element.title + "\",\n\t\t\"body\": \"" + line + "\"\n\t},";
        });
        htm += "\n]";

        txt = htm.substring(0,htm.length-3);

        txt += "\n]";

        console.log(txt);

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
        element.setAttribute('download', "response.txt");

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }

    btn.addEventListener("click",()=>{
        response();
    });
};