// Função para somar dois números
function somar(numero1, numero2) {
    return numero1 + numero2;
}

// Função para calcular a média entre duas notas
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Função para classificar a média (usando as regras do exercício 06)
function classificarMedia(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

// Função para criar uma mensagem personalizada
function criarSaudacao(nome) {
    return `Olá, ${nome}! O seu boletim já está disponível no sistema.`;
}

// Dados
let nomeAluno = "Artur";
let primeiraNota = 8.5;
let segundaNota = 6.0;

console.log("--- PROCESSANDO DADOS COM FUNÇÕES ---");

// Armazenando o resultado de cada função em uma variável
let mensagemSaudacao = criarSaudacao(nomeAluno);
let resultadoSoma = somar(primeiraNota, segundaNota);
let resultadoMedia = calcularMedia(primeiraNota, segundaNota);
let resultadoClassificacao = classificarMedia(resultadoMedia);

// Exibindo os valores das variáveis no console
console.log(mensagemSaudacao);
console.log(`A soma das notas é: ${resultadoSoma}`);
console.log(`A média final calculada é: ${resultadoMedia}`);
console.log(`Situação final do aluno: ${resultadoClassificacao}`);