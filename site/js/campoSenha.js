

//"focus" é para quando a pessoa selecionar o campo senha
// "Blur" é apra quando a pessoa sair do campo, o classlist.remove remove o ativo

const campoSenha = document.querySelector("#senha");

const listaRequisitos =
  document.querySelector("#requisitos-senha");

campoSenha.addEventListener("focus", function () {
  listaRequisitos.classList.add("ativo");
});

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