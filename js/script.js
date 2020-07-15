var colorPadrao="rgb(100, 100, 100)";
    document.getElementById("quadrado").style.backgroundColor=colorPadrao;


function executaCor () {
    var vermelho= document.getElementById ("rangeVermelho").value;
    document.getElementById("vermelho").value=vermelho;

    var verde= document.getElementById ("rangeVerde").value;
    document.getElementById("verde").value=verde;

    var azul= document.getElementById ("rangeAzul").value;
    document.getElementById("azul").value=azul;

    var soma = "rgb("+vermelho+","+verde+","+azul+")";
    document.getElementById("quadrado").style.backgroundColor= soma;
}