//Função adicionar filme, serve para receber o link da da imagem.
function adicionarFilme() {
    //querySelector faz interação do mundo HTML para JS  
      var campoFilmeFavorito = document.querySelector('#filme')
    //Value, é para ser impresso somente o que o usuario digitar no campo.   
      var filmeFavorito = campoFilmeFavorito.value
    //.endsWith() para verificar se um texto termina com determinados caracteres.
      if (filmeFavorito.endsWith('.jpg')) {
        listarFilmesNaTela(filmeFavorito)
      }else {
        alert ("Imagem Inválida")
      }
    //value = "", serve para deixar o campo de digitação em branco após a ação.  
      campoFilmeFavorito.value = ""
    }
    
    function listarFilmesNaTela(filme) {
      var listarFilmes = document.querySelector('#listaFilmes')
      var elementoFilme = "<img src=" + filme + ">"
      listarFilmes.innerHTML = listarFilmes.innerHTML + elementoFilme
    }
    