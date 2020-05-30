// 37 esquerda
// 38 cima 
// 39 direita
// 40 baixo 


var distancia = 100;

$("#campo").keydown(function(evento){ 

    if (evento.which == 38) {
        $("#cachorro").css("margin-top", distancia);
          distancia = distancia - 10 ; 
    }

    if (evento.which == 39) {
        $("#cachorro").css("margin-left", distancia);
          distancia = distancia + 10 ;
    }

    if (evento.which == 40) {
        $("#cachorro").css("margin-top", distancia);
          distancia = distancia + 10 ;
    }

    if (evento.which == 37) {
        $("#cachorro").css("margin-left", distancia);
          distancia = distancia - 10 ;
    }

});

