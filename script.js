var teamsArr = [];
var flag = 0;
var choosenQuestions = [];

function addTeam(){
    let teamsInput = "";
    let temp = 0;
    const maxTeams = 4;
    document.getElementById("inputteambtn").focus();
    document.getElementById("inputteam").select();

    teamsInput = document.getElementById("inputteam").value;
    if (teamsArr.includes(teamsInput)) {
        alert("name already given!");
    }
    else if (teamsInput==""){
        alert("name can't be nothing");
    }   
    else {   
        teamsArr.push(teamsInput);        
        temp = teamsArr.length;
        document.getElementById("team"+temp).toggleAttribute("hidden");
        document.getElementById("points"+temp).toggleAttribute("hidden");
        document.getElementById("team"+temp).innerText=teamsInput;             
    }
    if (teamsArr.length >= maxTeams){
        document.getElementById("inputteam").setAttribute("hidden","null");
        document.getElementById("inputteambtn").setAttribute("hidden","null");
        flag = 1;
    }
    if (temp == 1 && flag == 0){
        document.getElementById("removeteambtn").removeAttribute("hidden");
        document.getElementById("inputteamdonebtn").toggleAttribute("hidden");
        flag = 1;
    }
}

function addTeamDone(){
    document.getElementById("inputteam").setAttribute("hidden","null");
    document.getElementById("inputteambtn").setAttribute("hidden","null");
    document.getElementById("inputteamdonebtn").toggleAttribute("hidden");
    document.getElementById("removeteambtn").toggleAttribute("hidden");

    for (let i = 1; i < teamsArr.length; i++){
        document.getElementById("teambtn"+i).toggleAttribute("hidden");
        document.getElementById("teambtnright"+i).toggleAttribute("hidden");
        document.getElementById("teambtnwrong"+i).toggleAttribute("hidden");
    }
}

function removeTeam(){
    let temp = 0
    temp = teamsArr.length
    document.getElementById("team"+temp).toggleAttribute("hidden");
    document.getElementById("points"+temp).toggleAttribute("hidden");
    document.getElementById("inputteam").removeAttribute("hidden");
    document.getElementById("inputteambtn").removeAttribute("hidden");
    
    teamsArr.pop();
    temp = teamsArr.length
    if (temp == 0 && flag == 1){
        document.getElementById("removeteambtn").setAttribute("hidden","null");
        document.getElementById("inputteamdonebtn").toggleAttribute("hidden");
        flag = 0
    }
}

function openQuestion(choosenField){
    document.getElementById("field"+choosenField).style.backgroundColor = "#878a87";
    if (choosenQuestions.includes(choosenField) == false){
        document.getElementById("overlay").toggleAttribute("hidden");
        document.getElementById("q"+choosenField).toggleAttribute("hidden");
        choosenQuestions.push(choosenField);
    }  
}

function toggleQuestionHidden(){
    document.getElementById("overlay").toggleAttribute("hidden");
    document.getElementById("q"+choosenQuestions[choosenQuestions.length -1]).toggleAttribute("hidden");
}