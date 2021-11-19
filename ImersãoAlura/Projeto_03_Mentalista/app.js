var NumeroSecreto = parseInt(Math.random()*10)
var Tentativas = 3

while (Tentativas > 0){
  var chute = parseInt(prompt("Digite um número de 0 até 10"))
  if (chute == NumeroSecreto){
    alert("Parabéns, Você acertou!")
    break
  }else if (chute > NumeroSecreto){
    alert("O numero secreto é menor!")
  }else if (chute < NumeroSecreto){
    alert("O numero secreto é maior")
  }
  Tentativas = Tentativas -1
}

if (chute != NumeroSecreto){
  alert("Suas tentativas acabaram, o numero secreto era:  " + NumeroSecreto)
}