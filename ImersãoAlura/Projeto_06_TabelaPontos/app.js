var Lucas = {
    nome: "Lucas",
    vitorias: 6,
    empates: 7,
    derrotas: 4,
    pontos: 4
}

var Karla = {
    nome: "Karla",
    vitorias: 3,
    empates: 2,
    derrotas: 3,
    pontos: 9
}


Lucas.pontos = calculaPontos(Lucas)
Karla.pontos = calculaPontos(Karla)


function calculaPontos (jogador){
var pontos = (jogador.vitorias * 3) + jogador.empates
return pontos
}

var jogadores = [Lucas, Karla]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela (jogadores){
var html = ""
for (var i = 0; i < jogadores.length; i++){
  html += "<tr><td>" + jogadores[i].nome + "</td>"
   html += "<td>" + jogadores[i].vitorias + "</td>"
   html += "<td>" + jogadores[i].empates + "</td>"
   html += "<td>" + jogadores[i].derrotas + "</td>"
   html += "<td>" + jogadores[i].pontos + "</td>"    
  html += "<td><button onClick='adicionarVitoria(" + [i] +")'>Vitória</button></td>"
  html += "<td><button onClick='adicionarEmpate(" + [i] +")'>Empate</button></td>"
 html += " <td><button onClick='adicionarDerrota(" + [i] +")'>Derrota</button></td></tr>"
}
var tabelaJogadores = document.getElementById("tabelaJogadores")
tabelaJogadores.innerHTML = html  
}

function adicionarVitoria(i){
var jogador = jogadores[i]
jogador.vitorias++
jogador.pontos = calculaPontos(jogador)
exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
var jogador = jogadores[i]
jogador.empates++
jogador.pontos = calculaPontos(jogador)
exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
var jogador = jogadores[i]
jogador.derrotas++
exibirJogadoresNaTela(jogadores)
}

