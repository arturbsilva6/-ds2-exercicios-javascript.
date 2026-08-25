// Declaração das variáveis

const nome = "Ana Souza"; 
let idade = 25;
const cidade = "São Paulo";
const estaMatriculado = true; 
const notaAvaliacao = 8.5;

//Exibindo cada valor no console

console.log("--- VALORES DAS VARIÁVEIS ---");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("Matriculado:", estaMatriculado);
console.log("Nota da Avaliação:", notaAvaliacao);

// Exibindo o tipo de cada variável usando typeof
console.log("\n--- TIPOS DAS VARIÁVEIS ---");
console.log("Tipo do nome:", typeof nome);
console.log("Tipo da idade:", typeof idade);
console.log("Tipo da cidade:", typeof cidade);
console.log("Tipo de estaMatriculado:", typeof estaMatriculado);
console.log("Tipo da notaAvaliacao:", typeof notaAvaliacao);

/* 
EXPLICAÇÃO

- 'let' utilizado para a 'idade' porque é um valor que muda. Se o programa continuasse rodando ou o aluno fizesse aniversário, nós poderíamos reatribuir um novo valor para a idade (ex: idade = 26).
- 'const' (constante) foi utilizado para o 'nome', 'cidade', 'estaMatriculado' e 'notaAvaliacao' porque, no contexto deste script, são dados fixos que não devem sofrer alterações acidentais ao longo da execução do código. Usar 'const' sempre que possível é uma boa prática para evitar bugs e manter o código seguro.
*/