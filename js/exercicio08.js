// Solicitando o número ao usuário
let entrada = prompt("Digite um número inteiro para ver sua tabuada:");

// Convertendo a entrada para número
let numero = Number(entrada);

// 2. Validação
if (entrada === null || entrada.trim() === "" || isNaN(numero) || !Number.isInteger(numero)) {
    console.log("Erro: Você não informou um número inteiro válido.");
} else {
    console.log(`--- TABUADA DO ${numero} ---`);
    
    // 3. Laço de repetição 'for' para multiplicar de 1 até 10
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}