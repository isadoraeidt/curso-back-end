function mes(numero){
    if (numero == 1){
        numero = "janeiro";
    }
    if (numero == 2){
        numero = "fevereiro";
    }
    if (numero == 3){
        numero = "marco";
    }
    if (numero == 4){
        numero = "abril";
    }
    if (numero == 5){
        numero = "maio";
    }
    if (numero == 6){
        numero = "junho";
    }
    if (numero == 7){
        numero = "julho";
    }
    if (numero == 8){
        numero = "agosto";
    }
    if (numero == 9){
        numero = "setembro";
    }
    if (numero == 10){
        numero = "outubro";
    }
    if (numero == 11){
        numero = "novembro";
    }
    if (numero == 12){
        numero = "dezembro";
    }

    return(numero)
}

numero = prompt("digite um número de 1 a 12");
alert("O mês é " + mes(numero));