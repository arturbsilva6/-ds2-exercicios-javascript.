// Solicitando a idade ao usuário
let entrada = prompt("Digite a sua idade:");

// Validação de dados 

if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada)) || Number(entrada) < 0) {
    console.log("Idade inválida");
} else {
    let idade = Number(entrada);

if (idade < 16) {
        console.log("Não pode votar");
    } else if (idade === 16 || idade === 17) {
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatório");
    }
}