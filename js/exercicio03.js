// Solicitando as informações ao usuário
let nome = prompt("Digite o seu nome:");
let idade = prompt("Digite a sua idade:");
let curso = prompt("Digite o nome do seu curso:");
let cidade = prompt("Digite a sua cidade:");

// Utilizando concatenação com o operador '+'
let apresentacaoConcat = "Olá, meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e estou cursando " + curso + ".";

console.log("--- Concatenação ---");
console.log(apresentacaoConcat);

// Utilizando Template String (crases e ${})
let apresentacaoTemplate = `Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`;

console.log("--- Template String ---");
console.log(apresentacaoTemplate);