const player1 = "x";
const player2 = "o";

var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
    if (gameOver) { return;}

    if (playTime == player1){

        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/x.png");
    } else {
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src", "imagens/o.png");
    }

}
function inicializarEspacos(){
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++){
        espacos[i].addEventListener("click", function(){
            if (gameOver) {return;}

            if(this.getElementsByClassName("img").length ==0){
                if(playTime == player1){
                    this.innerHTML = "<img src='imagens/x.png' border='0' height='45'>"
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                }else {
                    this.innerHTML = "<img src='imagens/o.png' border='0' height='45'>"
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizaMostrador();
            }
        })
    }
}