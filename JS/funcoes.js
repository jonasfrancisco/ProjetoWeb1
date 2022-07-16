function cadastrarEmail(){
   var enderecoEmail = document.getElementById("emailInput").value;
   alert("E-mail Cadastrado:  " + enderecoEmail);

}

function adicionarAvaliacao(){
   var texto = document.getElementById("textoAv").value;

   var lista = document.getElementById("avaliacaoLista");

   var novoItem = document.createElement("p");

   var novoTexto = document.createTextNode(texto);

   lista.appendChild(novoItem);
   novoItem.appendChild(novoTexto);

}

function limpar(){
   document.getElementById("textoAv").value="";
}



function mensagem(){
   prompt("Deixe sua mensagem ");
}

function valorDiarias(){
         alert("Localização:  Campos do Jordão"+"\n" + "Acomodação para até 10 pessoas"+"\n"+
                "Valor diária até 5 pessoas: R$ 300,00"+"\n" + "Valor diária acima de 5 pessoas: R$ 600,00 " );
}



function calculaData(){
   var quantAdultos =document.getElementById("numAdultos").value;
   var quantCriancas =document.getElementById("numCriancas").value;

  
   var dataInicial = new Date(document.getElementById("check-in").value); 
   var dataFinal = new Date(document.getElementById("check-out").value);
   var resultado;

  var dif = Math.abs(dataFinal-dataInicial);
  dias = dif/(1000 * 3600 * 24)

  if(quantAdultos>5){
   resultado = dias * 600;
  }
  else{
   resultado = dias * 300;
  }

  confirm("Datas Disponíveis");
   alert( "Diárias : "+dias +'\n'+
          "Adultos : "+quantAdultos+'\n'+
          "Crianças: " +quantCriancas+'\n' +
          "Total diárias: R$ "+resultado +",00");  
}