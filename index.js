let identifier = 0;
let cont = 0;

function newButtons(){
    
    $("#list").on("click",".checked",function(e){
        e.preventDefault();
        let currentID = $(this).attr("id").substr(5);
        let currentClass = $("#description"+currentID).attr("class");
        cont ++;
        if(identifier%2 !=0 || (identifier%2 == 0 && (identifier == cont || cont%identifier == 0))){
            if(currentClass == "normal"){
                $("#description"+currentID).attr("class","tachado");
            }
            else{
                $("#description"+currentID).attr("class","normal");
            }
        }
    });
    
    $("#list").on("click", ".deleted", function(e){
        e.preventDefault();
        let currentID = $(this).attr("id").substr(6);
        $("#nextItem"+ currentID).remove();
    });
}

function addItem(item){
    $("#list").append(`
        <li id = "nextItem${identifier}">
            <p class="normal" id="description${identifier}">
                ${item}
            </p>
            <button id ="check${identifier}" class = "checked"> Check </button>
            <button id ="delete${identifier}" class = "deleted"> Delete </button>
        </li>  
    `
    );
    newButtons();
}

function subButton(){
    $("#submitButton").on("click", function(e){
        e.preventDefault();
        let item = $("#intext").val();
        if($("#intext").val()=="")
        {
            alert("You must submit item for shopping list")
        }
        else{
            $("#intext").val("");
            identifier ++;
            addItem(item);
            let cont = 0;
        }
    });
}

function init(){
    subButton();
}

init();