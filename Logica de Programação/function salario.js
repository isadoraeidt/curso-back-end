function salario( horas, valor){
    var total = horas * valor;
    return(total)
};
horas = prompt("quantas horas você trabalha?");
valor = prompt ("quanto você recebe por hora?");

alert("o seu salario foi de " + salario(horas, valor));