const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const start = document.getElementById("start");
const x = document.getElementById("x");
const o = document.getElementById("o");
const table = document.getElementById("user_select");
const game = document.getElementById("game");
const restart = document.getElementById("restart");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const board = document.getElementById("board");
const pause_screen = document.getElementById("pause_screen"); 
const user = document.getElementById("p1");
const cpu = document.getElementById("p2");
var p1_score = 0;
var p2_score = 0;
var player1_peice = null;
var player2_peice = null;
var player1_turn = true;
var player2_turn = false;
var lst = [one, two, three, four, five, six, seven, eight, nine];
var winner = false;
var isPaused = false;
var draw = false;


function checkDraw(lst){
    let slots = 0;
    if (winner == false && draw == false){
        for(let i=0;i<lst.length;i++){
            if (lst[i].innerHTML != ""){
                slots++;
            }
        }
        if (slots == 9){
            window.alert("It's a draw!");
            draw = true;

        }
    }
}


function checkWinner(playerPiece,lst){
    if (winner == false && draw==false){
        if (lst[0].innerHTML == playerPiece && lst[1].innerHTML == playerPiece && lst[2].innerHTML == playerPiece ||
        lst[3].innerHTML == playerPiece && lst[4].innerHTML == playerPiece && lst[5].innerHTML == playerPiece || 
        lst[6].innerHTML == playerPiece && lst[7].innerHTML == playerPiece && lst[8].innerHTML == playerPiece ||
        lst[0].innerHTML == playerPiece && lst[3].innerHTML == playerPiece && lst[6].innerHTML == playerPiece || 
        lst[1].innerHTML == playerPiece && lst[4].innerHTML == playerPiece && lst[7].innerHTML == playerPiece ||
        lst[2].innerHTML == playerPiece && lst[5].innerHTML == playerPiece && lst[8].innerHTML == playerPiece || 
        lst[0].innerHTML == playerPiece && lst[4].innerHTML == playerPiece && lst[8].innerHTML == playerPiece || 
        lst[2].innerHTML == playerPiece && lst[4].innerHTML == playerPiece && lst[6].innerHTML == playerPiece){
           if (playerPiece == player1_peice){
                window.alert("Player 1 wins!");
                p1_score++;
                user.innerHTML = "User-" + p1_score;
           } 
           else{
                window.alert("CPU wins!");
                p2_score++;
                cpu.innerHTML = "CPU-" + p2_score;
           }
            winner = true;

        }
    }

}




function Submit_player1Peice(player1_peice, dom){
    if (dom.innerHTML == "" && winner == false && draw == false){
    dom.innerHTML = player1_peice;
    player1_turn = false;
    player2_turn = true;
    }
    
}

function submit_player2Peice(player2_peice, dom){
    if (dom.innerHTML == "" && winner == false && draw == false){
    dom.innerHTML = player2_peice;
    player1_turn = true;
    player2_turn = false;
    }
}


function restart_game(){
    for (let i=0;i<lst.length;i++){
        lst[i].innerHTML = "";
    }
    winner = false;
    player1_turn = true;
    player2_turn = false;
    table.style.display = "flex";
    player1_peice = null;
    player2_peice = null;
    draw = false;
    
    
}





start.addEventListener("click", (e)=>{
    restart_game();
    p1_score = 0;
     p2_score = 0;
    game.style.display = "flex";
    start.style.display = "none";
    restart.style.display = "flex";
    stop.style.display = "flex";
});


restart.addEventListener("click", (e)=>{
    restart_game();

});




stop.addEventListener("click", (e)=>{
    restart_game();
    game.style.display = "none";
    start.style.display = "flex";
    restart.style.display = "none";
    stop.style.display = "none";
    table.style.display = "none";
    user.innerHTML = "User-0";
    cpu.innerHTML = "CPU-0";

});



x.addEventListener("click", (e)=>{
    player1_peice = "x";
    player2_peice = "o";
    table.style.display = "none";
});


o.addEventListener("click", (e)=>{
    player1_peice = "o";
    player2_peice = "x";
    table.style.display = "none";

});




one.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, one);
    }
    else{
        submit_player2Peice(player2_peice,one);
    }

    one.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
    
});

two.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, two);
    }
    else{
        submit_player2Peice(player2_peice,two);
    }
    two.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

three.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, three);
    }
    else{
        submit_player2Peice(player2_peice,three);
    }
    
    three.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});


four.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, four);
    }
    else{
        submit_player2Peice(player2_peice,four);
    }
    
    four.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

five.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, five);
    }
    else{
        submit_player2Peice(player2_peice,five);
    }
    
    five.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

six.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, six);
    }
    else{
        submit_player2Peice(player2_peice,six);
    }
   
    six.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

seven.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, seven);
    }
    else{
        submit_player2Peice(player2_peice,seven);
    }
    seven.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

eight.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, eight);
    }
    else{
        submit_player2Peice(player2_peice,eight);
    }
    eight.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});

nine.addEventListener("click", (e)=>{
    e.preventDefault();
    if (player1_turn){
    Submit_player1Peice(player1_peice, nine);
    }
    else{
        submit_player2Peice(player2_peice,nine);
    }
    nine.style.fontSize = "3em";
    checkWinner(player1_peice,lst);
    checkWinner(player2_peice,lst);
    checkDraw(lst);
});