function inicio()
{

 const xsaladap = 5,  xtudop = 10, xgalinhap = 8;
 var tomate = 90, alface = 90, galinha = 90,  pao = 90,  queijo = 90, carne = 90 ;

 alert("LANCHONETE DO SENAI\n")
 alert("Preços:\nx-salada R$5\nx-tudo R$10\nx-galinha R$8")

  do{
    do{
      pedidocliente = prompt ("Qual lanche você gostaria de pedir? ");
    } while ((pedidocliente === "" || pedidocliente === null) && Nan(pedidocliente)){

  }

    do{
     carteiracliente = prompt ("Quantos reais você tem? ");
    } while ((carteiracliente === "" || carteiracliente === null) && isNan(carteiracliente));

    switch(pedidocliente){
    case "xsalada":
      alface -= 5 
      pao -= 5
      queijo -= 5 
      carne -= 5
      troco = carteiracliente - xsaladap
      alert(`O valor do seu pedido foi de ${xtudop}  \n Seu troco foi de R$ ${troco} \nQuantidade de ingredientes disponivel no estoque: Alface ${alface} Tomate ${tomate} Pao ${pao} Queijo ${queijo} Carne ${carne}`)
      break;

    case "xgalinha":
      tomate -= 5
      alface -= 5 
      pao -= 5
      queijo -= 5 
      galinha -= 5
      troco = carteiracliente - xgalinhap
      alert(`O valor do seu pedido foi de ${xtudop}  \n Seu troco foi de R$ ${troco} \nQuantidade de ingredientes disponivel no estoque: Alface ${alface} Tomate ${tomate} Pao ${pao} Queijo ${queijo} Galinha ${galinha}`)
      break;

    case "xtudo":
      tomate -= 5
      alface -= 5 
      pao -= 5
      queijo -= 5 
      galinha -= 5
      carne -= 5
      troco = carteiracliente - xtudop
      alert(`O valor do seu pedido foi de ${xtudop}  \n Seu troco foi de R$ ${troco} \nQuantidade de ingredientes disponivel no estoque: Alface ${alface} Tomate ${tomate} Pao ${pao} Queijo ${queijo} Galinha ${galinha} Carne ${carne}`)
      break; 

    default:
        alert("não entrou em nenhuma condição");
        break;
    }
     sairdosistema = prompt ("Você quer sair do sistema? ");
  } while (sairsistema === "não" )
  {
    do{
      pedidocliente = prompt ("Qual lanche você gostaria de pedir? ");
    } while ((pedidocliente === "" || pedidocliente === null) && Nan(pedidocliente)){
     pedidocliente = prompt ("Resposta invalida, qual lanche você gostaria de pedir? ")
    }

    do{
      carteiracliente = prompt ("Quantos reais você tem? ");
    } while ((carteiracliente === "" || carteiracliente === null) && isNan(carteiracliente));

  }
}
