//Qual o valor do seu intercambio?
var valorEmDolarTexto = prompt("Qual o valor do seu intercambio em dolar?")

//Converter a String em valor.
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

//Conversão de Dolar para Real.
var valorEmReal = valorEmDolarNumero * 5.50

//Fixando dois numeros decimais após a virgula.
var valorEmRealFixado = valorEmReal.toFixed(2)


//Alerta do Valor em Real.
alert (valorEmReal)