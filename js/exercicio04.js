// Solicitando a idade ao usuário
let idadeString = prompt("Digite a sua idade:");

// Mostrando o valor original retornado pelo prompt
console.log("Valor original recebido:", idadeString);

// Mostrando o tipo desse valor
console.log("Tipo do valor original:", typeof idadeString);

// Convertendo o valor de texto (string) para número (number)
// Nota: Também poderíamos usar parseInt(idadeString) ou parseFloat(idadeString)
let idadeNumero = Number(idadeString);

// Realizando corretamente a soma
let idadeFutura = idadeNumero + 5;

// Exibindo o resultado final
console.log(`Você tem ${idadeNumero} anos. Daqui a cinco anos, você terá ${idadeFutura} anos.`);