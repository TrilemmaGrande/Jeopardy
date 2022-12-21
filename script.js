var teamsArr = [];
var flag = 0;

function addTeam(){
    let teamsInput = "";
    let temp = 0;
    const maxTeams = 4;
    document.getElementById("inputteambtn").focus();
    document.getElementById("inputteam").select();

    teamsInput = document.getElementById("inputteam").value;
    if (teamsArr.includes(teamsInput)) {
        alert("name already given!")
    }
    else if (teamsInput==""){
        alert("name can't be nothing")
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
        flag = 1
    }
    if (temp == 1 && flag == 0){
        document.getElementById("removeteambtn").removeAttribute("hidden");
        flag = 1
    }
}

function addTeamDone(){
    document.getElementById("inputteam").setAttribute("hidden","null");
    document.getElementById("inputteambtn").setAttribute("hidden","null");
    document.getElementById("inputteamdonebtn").setAttribute("hidden","null");
    document.getElementById("removeteambtn").setAttribute("hidden","null");
}

function removeTeam(){
    let temp = 0
    temp = teamsArr.length
    document.getElementById("team"+temp).toggleAttribute("hidden");
    document.getElementById("points"+temp).toggleAttribute("hidden");
    teamsArr.pop();
    temp = teamsArr.length
    if (temp == 0 && flag == 1){
        document.getElementById("removeteambtn").setAttribute("hidden","null");
        flag = 0
    }
}