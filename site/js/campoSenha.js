

//"focus" é para quando a pessoa selecionar o campo senha
// "Blur" é apra quando a pessoa sair do campo, o classlist.remove remove o ativo

const campoSenha = document.querySelector("#senha");

const listaRequisitos = document.querySelector("#requisitos-senha");

campoSenha.addEventListener("focus", function () {
  listaRequisitos.classList.add("ativo");
});

// Para que a lista desapareça, o usuário precisa atender todos os requisistos da senha, caso contrario, a lista não desaparecer. 
// Caso queira que apenas sair do campo seja suficiente para que a lista de requisitos da senha desapareça, precisa retirar a linha do IF e deixar apenas o listaRequisitos...
campoSenha.addEventListener("blur", function () {
  if (senhaEhValida(campoSenha.value)) {
    listaRequisitos.classList.remove("ativo");
  }
});

function senhaEhValida(senha) {
  const temTamanho = senha.length >= 8;
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temEspecial = /[^A-Za-z0-9]/.test(senha);

  return (
    temTamanho &&
    temMaiuscula &&
    temMinuscula &&
    temNumero &&
    temEspecial
  );
}