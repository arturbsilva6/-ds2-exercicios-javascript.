// Solicitando as dados do usuário
let usuario = prompt("Digite o nome de usuário:");
let senha = prompt("Digite a senha:");

// Verificando se ambos os valores coincidem exatamente com o esperado
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}

/*
EXPLICAÇÃO:

Atribuição (=): 
   Um único sinal de igual não compara nada. Ele serve exclusivamente para GUARDAR um valor dentro de uma variável. 
   Exemplo: let nome = "Artur" (lê-se: a variável 'nome' RECEBE o valor "Artur").

Comparação (===): 
   Os três sinais de igual servem para PERGUNTAR ao JavaScript se duas coisas são idênticas. 
   Exemplo: 1234 === "1234" resultará em FALSO. Embora o valor visual seja o mesmo, um é do tipo Número e o outro é do tipo Texto (String). 
*/