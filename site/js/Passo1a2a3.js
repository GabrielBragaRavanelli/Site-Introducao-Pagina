const passo1 = document.querySelector("#passo1-indicador");
const passo2 = document.querySelector("#passo2-indicador");
const passo3 = document.querySelector("#passo3-indicador");

function mudarIndicador(numero){

    passo1.classList.remove("ativo");
    passo2.classList.remove("ativo");
    passo3.classList.remove("ativo");

    if(numero === 1){
        passo1.classList.add("ativo");
    }

    if(numero === 2){
        passo2.classList.add("ativo");
    }

    if(numero === 3){
        passo3.classList.add("ativo");
    }

}