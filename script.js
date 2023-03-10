var teamsArr = [];
var flag = 0;
var choosenQuestions = [];
var actualPoints = 0;

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
    for (i = 1; i < teamsArr.length +1; i++){
        document.getElementById("teambtnright"+i).toggleAttribute("hidden");
        document.getElementById("teambtnwrong"+i).toggleAttribute("hidden");
        document.getElementById("teamlabel"+i).innerHTML= teamsArr[i -1];
    }
    document.getElementById("inputteam").setAttribute("hidden","null");
    document.getElementById("inputteambtn").setAttribute("hidden","null");
    document.getElementById("inputteamdonebtn").toggleAttribute("hidden");
    document.getElementById("removeteambtn").toggleAttribute("hidden");
    document.getElementById("overlaytext").setAttribute("hidden","null");
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
    document.getElementById("field"+choosenField).style.backgroundColor = "#042503";
    if (choosenQuestions.includes(choosenField) == false){
        document.getElementById("overlay").toggleAttribute("hidden");
        choosenQuestions.push(choosenField);  
        document.getElementById("questions").src = "questions/"+choosenField+".html";  
        actualPoints = parseInt(choosenField.substring(1,4))    
    }
}

function toggleQuestionHidden(){
    document.getElementById("overlay").toggleAttribute("hidden");
}

function rightAnswer(teamIndex){
    let fuckJavaScript = parseInt(document.getElementById("points"+teamIndex).innerHTML);
    fuckJavaScript += parseInt(actualPoints);
    document.getElementById("points"+teamIndex).innerHTML = fuckJavaScript;
    document.getElementById("field"+choosenQuestions[choosenQuestions.length -1]).innerHTML = teamsArr[teamIndex -1] + " " + actualPoints;
    toggleQuestionHidden();
}

function wrongAnswer(teamIndex){
    document.getElementById("points"+teamIndex).innerHTML -= +actualPoints;
}

function nobodyKnows(){
    document.getElementById("field"+choosenQuestions[choosenQuestions.length -1]).innerHTML = "--- " + actualPoints;
    toggleQuestionHidden();
}