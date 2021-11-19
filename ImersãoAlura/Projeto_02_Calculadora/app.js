//Declarção das variavéis
var PrimeiroNumero = parseInt(prompt("Digite o Primeiro valor: "))

var SegundoNumero = parseInt(prompt("Digite o segundo valor: "))

//Criar operações de escolha da calculadora
var operacao = prompt("Digite 1 para Adição, 2 para Subtração, 3 para Divisão e 4 para Multiplicação: ")

//operação de condição + Resultado
if (operacao == 1){
  var Resultado = PrimeiroNumero + SegundoNumero
  document.write("<h2>" + PrimeiroNumero + " + " + SegundoNumero + " = " + Resultado + "</h2>")
}else if (operacao == 2){
  var Resultado = PrimeiroNumero - SegundoNumero
  document.write("<h2>" + PrimeiroNumero + " - " + SegundoNumero + " = " + Resultado + "</h2>")
}else if (operacao == 3){
  var Resultado = PrimeiroNumero / SegundoNumero
  document.write("<h2>" + PrimeiroNumero + " / " + SegundoNumero + " = " + Resultado + "</h2>")
 }else if (operacao == 4){
  var Resultado = PrimeiroNumero * SegundoNumero
  document.write("<h2>" + PrimeiroNumero + " * " + SegundoNumero + " = " + Resultado + "</h2>")    
  }else{
    document.write("<h2>Opção Invalida!</h2/>")
  }

