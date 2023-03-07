function game(){
  let escolha_pc
  let escolha_user, resposta

  do{
    do{
      alert("Pedra, papel ou tesoura.\n")
        escolha_user = parseInt(prompt("Você vai jogar\nPapel: digite 1\nPedra: digite 2\nTesoura: digite 3? "))
        //3 = tesoura, 1 = papel, 2 = pedra
        escolha_pc = Math.floor(Math.random() * 3);
    }while(!/^[1-3]+$/.test(escolha_user))

        switch(escolha_user){
            case 3:
                if(escolha_pc==3){
                    alert("Empate, o computador jogou tesoura.")
                }

                else if(escolha_pc==1){
                    alert("Você venceu, o computador jogou papel.")
                }

                else if(escolha_pc==2){
                    alert("Você perdeu, o computador jogou pedra")
                }
                break;

            case 2:
                if(escolha_pc==3){
                    alert("Você venceu, o computador jogou tesoura.")
                }
    
                else if(escolha_pc==1){
                    alert("Você perdeu ;-;, o computador jogou papel.")
                }
    
                else if(escolha_pc==2){
                    alert("Empate, o computador jogou pedra")
                }
                break;

            case 1:
                if(escolha_pc==3){
                    alert("Você perdeu -;, o computador jogou tesoura.")
                }
    
                else if(escolha_pc==1){
                    alert("Empate, o computador jogou papel.")
                }
        
                else if(escolha_pc==2){
                    alert("Você venceu, o computador jogou pedra")
                }
                break;
        }
    resposta = prompt("\nDeseja continuar? Sim ou Não? ")
  }while(resposta == "Sim" || resposta == "sim" || resposta == "SIM" )
}

game();