function verificacao(resposta){
    if (resposta === false)
    {
        resposta = true
        
    }
    if (resposta === true)
    {
        resposta = false
        
    }
    
    return(resposta)
}

function number(sinal){
    if (sinal <0){
        sinal * (-1)
    }
    else{
        sinal * (-1)
    }
    return(sinal)
}

resposta = prompt("Escolha true, false: ");
sinal = prompt ("Escolha um numero positivo ou negativo: ");
alert("resultado " + verificacao(resposta) + ", " + number(sinal))