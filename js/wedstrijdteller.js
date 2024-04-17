inputTeams = document.getElementById('input-teams');

let game =
{
    team1Punten: 0,
    team2Punten: 1,
    serving:0,
    lastServe:0, // wie vorige service
    lastScored:0  
} 

inputTeam1.value = '...'; // testdata
inputTeam2.value = '...'; // testdata

function updateScreen(){
    // maak juiste button geel!
    if (game.serving == 1) {
        counterTeam1.classList.add('serving');
        counterTeam2.classList.remove('serving');
    } else {
        counterTeam2.classList.add('serving');
        counterTeam1.classList.remove('serving');
    }

    counterTeam1.innerText = game.team1Punten;
    counterTeam2.innerText = game.team2Punten;
}    

function start(event){
    console.log('You pressed start!');
    if (nameTeam1.innerText == '...' || nameTeam2.innerText == '...') {
        alert('Er mist een naam!');
        return;
    };
    //
    console.dir(servingTeam1);
    if (!servingTeam1.checked && !servingTeam2.checked) {
        alert('Wie moet er beginnen?');
        return;
    };

    // hide inputfields
    input_teams.style.display = 'none';
    // Activeer tellers
    counterTeam1.disabled = false;
    counterTeam2.disabled = false;

    game.serving = 2;
    if (servingTeam1.checked) {
        game.serving = 1;
    };

    updateScreen();

}
startButton.addEventListener('click',start);

function count(event){
    game.lastServe = game.serving;
    if (this.id == 'counterTeam1') {
        game.team1Punten +=1;
        game.serving = 1;
        game.lastScored = 1;
    } else {
        game.team2Punten +=1;
        game.serving = 2;
        game.lastScored = 2;
    }

    undoButton.disabled = false;
    updateScreen();
}
counterTeam1.addEventListener('click',count);
counterTeam2.addEventListener('click',count);

function displayNames(event){
    nameTeam1.innerText = inputTeam1.value;
    nameTeam2.innerText = inputTeam2.value;

}
inputTeam1.addEventListener('change',displayNames);
inputTeam2.addEventListener('change',displayNames);

function UndoLastPoint(event){
    undoButton.disabled = true;
    if (game.lastScored == 1) {
        game.team1Punten -=1;
        game.serving = 2;
    } else {
        game.team2Punten -=1;
        game.serving = 1;
    }
    updateScreen();
}
undoButton.addEventListener('click',UndoLastPoint);{
    undoButton.disabled = true;
    if (game.lastScored == 1) {
        game.team1Punten -=1;
        game.serving = 2;
    } else {
        game.team2Punten -=1;
        game.serving = 1;
    }
}

undoButton.disabled = true;
counterTeam1.disabled = true;
counterTeam2.disabled = true;