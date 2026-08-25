// Definindoas variaveis 
const usuarioCorreto = "admin";
const senhaCorreta = "1234";
const maxTentativas = 3;

console.log("--- TELA DE LOGIN ---");

// Estrutura de repetição 
for (let tentativa = 1; tentativa <= maxTentativas; tentativa++) {
    
    // Solicitando os dados
    let usuario = prompt(`Digite o usuário (Tentativa ${tentativa} de 3):`);
    let senha = prompt(`Digite a senha (Tentativa ${tentativa} de 3):`);

    // Estrutura condicional 
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        console.log("Acesso permitido");
        break;
    } else {
        
        let tentativasRestantes = maxTentativas - tentativa;

        if (tentativasRestantes > 0) {
            console.log(`Credenciais incorretas. Você ainda tem ${tentativasRestantes} tentativa(s).`);
            alert(`Credenciais incorretas. Você ainda tem ${tentativasRestantes} tentativa(s).`);
        } else {
            console.log("Acesso bloqueado");
            alert("Acesso bloqueado. Número máximo de tentativas atingido.");
        }
    }
}