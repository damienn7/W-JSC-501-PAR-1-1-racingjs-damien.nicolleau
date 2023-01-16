
window.onload = function(){
    function askingUser(){

        let name = window.prompt("What is your name ?");
    if (name=="") {
        do {
            name = window.prompt("What is your name ?");
        } while (name=="");
    }

    let confirm = window.confirm("Are you sure "+name+" is your name ?");  

    if(confirm==true)
    {
        window.alert("Hello "+name);
    }else{
        askingUser();
    }

    }

    askingUser();
}