


let Nota1 = document.querySelector("#Nota1");
let Nota2 = document.querySelector("#Nota2");
let Nota3 = document.querySelector("#Nota3");

const formulario = document.querySelector("#formulario");
const resultadofinal = document.querySelector("#resultado_final");
let mediaAluno = document.querySelector("#media");

const idadee1 = document.querySelector("#idadee");
const idade1 = document.querySelector("#idade1");
const nome = document.querySelector("#nome");
const nomeExibicao = document.querySelector("#nomeExibicao");

const nota1Resultado = document.querySelector("#nota1Resultado");
const nota2Resultado = document.querySelector("#nota2Resultado");
const nota3Resultado = document.querySelector("#nota3Resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const idade = Number(idade1.value);

    const Nota1valor = Number(Nota1.value);
    const Nota2valor = Number(Nota2.value);
    const Nota3valor = Number(Nota3.value);

    const media = (Nota1valor + Nota2valor + Nota3valor) / 3;

    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    nomeExibicao.textContent = "Nome do aluno: " + nome.value;
    idadee1.textContent = "Idade: " + idade;

    nota1Resultado.textContent = "Nota 1: " + Nota1valor;
    nota2Resultado.textContent = "Nota 2: " + Nota2valor;
    nota3Resultado.textContent = "Nota 3: " + Nota3valor;

    mediaAluno.textContent = "Média final: " + media.toFixed(2);
    resultadofinal.textContent = "Situação final: " + situacao;

    resultadofinal.classList.remove("aprovado", "recuperacao", "reprovado");

    if (media >= 7) {
        resultadofinal.classList.add("aprovado");
    } else if (media >= 5) {
        resultadofinal.classList.add("recuperacao");
    } else {
        resultadofinal.classList.add("reprovado");
    }
});

formulario.addEventListener("reset", function () {
    nomeExibicao.textContent = "";
    idadee1.textContent = "";

    nota1Resultado.textContent = "";
    nota2Resultado.textContent = "";
    nota3Resultado.textContent = "";

    mediaAluno.textContent = "";
    resultadofinal.textContent = "";

    resultadofinal.classList.remove("aprovado", "recuperacao", "reprovado");
});

