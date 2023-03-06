function number(numero1, numero2, numero3){

    if (numero1 >= numero2 && numero1 <= numero3 ){
        numero1 = "true"
        numero2 = "true"
        numero3 = "true"
    }
    else{
        numero1 = "false"
        numero2 = "false"
        numero3 = "false"
    }
    return(numero1, numero2, numero3)
}

let numero1 =  prompt("diaga um numero: ")

let numero2 = prompt("diaga um numero: ") 

let numero3 = prompt("diaga um numero: ")

alert(number(numero1, numero2, numero3))