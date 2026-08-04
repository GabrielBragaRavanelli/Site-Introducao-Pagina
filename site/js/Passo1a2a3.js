const bloco1 = document.querySelector(".bloco1");
const bloco2 = document.querySelector(".bloco2");
const bloco3 = document.querySelector(".bloco3");

const botaoProximo1 = document.querySelector("#botao-proximo-1");
const botaoVoltar2 = document.querySelector("#botao-voltar-2");
const botaoProximo2 = document.querySelector("#botao-proximo-2");
const botaoVoltar3 = document.querySelector("#botao-voltar-3");

function mostrarBloco(blocoEscolhido) {
  bloco1.style.display = "none";
  bloco2.style.display = "none";
  bloco3.style.display = "none";

  blocoEscolhido.style.display = "block";


// Quando o indivíduo avançar para o proximo passo, a página volta para o topo 
// top: 0 faz voltar para o otpo
// smooth é uma suavisação na hora da página ir apar o topo
// scrollTo() altera a posição da página
// window representa a janela do navegador
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Avança para o próximo bloco e esconde os outros blocos.
botaoProximo1.addEventListener("click", function () {
  mostrarBloco(bloco2);
});

botaoVoltar2.addEventListener("click", function () {
  mostrarBloco(bloco1);
});

botaoProximo2.addEventListener("click", function () {
  mostrarBloco(bloco3);
});

botaoVoltar3.addEventListener("click", function () {
  mostrarBloco(bloco2);
});
