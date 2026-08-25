// Inicializando as variáveis 
let quantidade = 0;
let soma = 0;
let maior = null;
let menor = null;

console.log("Iniciando a captura de números...");

// Laço de repetição 
while (true) {
    let entrada = prompt("Digite um número (ou digite 0 para encerrar):");
    
    // Validando se o usuário cancelou, deixou em branco ou digitou letras
    if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada))) {
        alert("Entrada inválida! Por favor, digite apenas números.");
        continue; 
    }
    
    let numero = Number(entrada);

    // Condição de parada
    if (numero === 0) {
        break;
    }

    // Atualizando os dados 
    quantidade++; 
    soma += numero; 

    if (maior === null || numero > maior) {
        maior = numero;
    }
    if (menor === null || numero < menor) {
        menor = numero;
    }
}

// Exibindo os resultados 
console.log("--- RESULTADOS FINAIS ---");

if (quantidade === 0) {
    console.log("O programa foi encerrado. O primeiro valor digitado foi 0, então não há cálculos a serem feitos.");
} else {
    let media = soma / quantidade;
    
    console.log(`Quantidade de números digitados: ${quantidade}`);
    console.log(`Soma dos números: ${soma}`);
    console.log(`Média dos valores: ${media.toFixed(2)}`);
    console.log(`Maior número digitado: ${maior}`);
    console.log(`Menor número digitado: ${menor}`);
}