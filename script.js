var teamsArr = [];


function addTeam(){
    let teamsInput = "";
    var temp = "";
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
        document.getElementById("inputteamdonebtn").setAttribute("hidden","null");
    }
}

function addTeamDone(){
    document.getElementById("inputteam").setAttribute("hidden","null");
    document.getElementById("inputteambtn").setAttribute("hidden","null");
    document.getElementById("inputteamdonebtn").setAttribute("hidden","null");
}

function removeTeam(){
    
}