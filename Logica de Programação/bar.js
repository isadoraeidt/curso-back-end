function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    for (let i = 1; i > 0; i -- ) {
        alert(`Aguarde ${i} segundos...`);
        await sleep (i * 100);
    }
    alert("Obrigada! Volte sempre");

}

let pilsen = 50
let ipa = 50 

function callcprecochoppp(litros){
    var preco = litros * 30;
    return (preco)
};

function bar(){
    alert("Seja bem vindo ao bar!\nhoje temos chopp ipa e pilsen tamanho e m, custando R$9 e R$15")

    do{
      var copo = prompt("qual o copo voce quer?")
    } while ((copo != 'P')&&(copo != "p") && (copo != "M" ) && (copo != 'm'))

    switch (copo) {
        case ("P" && 'p'):
            litros = 0.3
            break;
        case ("M" && "m"):
            litros = 0.5
            break;
    }
    do{
        var chopp = prompt ("qual o tipo de chopp?\nplisen ou ipa?")
    } while ((chopp != "pilsen") && (chopp != "ipa"))

    switch (chopp) {
        case "pilsen":
            pilsen = pilsen - litros
            console.log(pilsen)
            break;
        case "ipa":
            ipa = ipa - litros 
            console.log(ipa)
            break;
    }

    if (pilsen >= litros || ipa >= litros) {
        alert ("o total foi de R$" + callcprecochoppp(litros));
    do
    {
        var dinheiro = prompt ("insira o dinheiro: ");  
    } while(!/^[0-9]+$/.test(dinheiro))
        var troco = callcprecochoppp (litros) - dinheiro;

        while (troco < 0) {
            var troco1 = troco * (-1)
            alert ("esse é o seu troco R$" +troco1)
        }
        
        alert ("obrigada ja vamos abastecer seu copo! ")

        demo()
    }

    else{
        alert ("infelizmente nao temos mais chopp")
    }
}

bar()