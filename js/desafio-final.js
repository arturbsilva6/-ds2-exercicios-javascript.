
//  DECLARAÇÃO DAS FUNÇÕES

function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarSituacao(media) {
    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5 && media < 7) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}


let totalAlunos = 0;
let continuarCadastrando = true;

console.log("--- INICIANDO SISTEMA ACADÊMICO ---");

// Laço principal 
while (continuarCadastrando) {
    
    // Solicitando dados básicos
    let nome = prompt("Digite o nome do aluno:");
    let curso = prompt("Digite o nome do curso:");
    
    let nota1, nota2;
    let notasValidas = false;

    // Laço secundário
    while (!notasValidas) {
        let entrada1 = prompt("Digite a primeira nota (de 0 a 10):");
        let entrada2 = prompt("Digite a segunda nota (de 0 a 10):");
        
        // Convertendo e tratando a vírgula
        nota1 = Number(entrada1.replace(',', '.'));
        nota2 = Number(entrada2.replace(',', '.'));

        // Validação estrita
        if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
            alert("Erro: Notas inválidas! Certifique-se de digitar números entre 0 e 10. Tente novamente.");
        } else {
            notasValidas = true; 
        }
    }

    // Calculando e classificando usando as funções
    let mediaFinal = calcularMedia(nota1, nota2);
    let situacao = classificarSituacao(mediaFinal);

    // Exibindo a ficha completa do aluno
    console.log("\n--- FICHA DO ALUNO ---");
    console.log(`Nome: ${nome}`);
    console.log(`Curso: ${curso}`);
    console.log(`Notas: ${nota1} e ${nota2}`);
    console.log(`Média: ${mediaFinal.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
    console.log("----------------------");

    totalAlunos++;

    let resposta = prompt("Deseja cadastrar outro aluno? (Digite S para Sim ou qualquer outra coisa para Não)");
    
    if (resposta === null || resposta.toUpperCase() !== 'S') {
        continuarCadastrando = false; // Quebra o laço principal
    }
}

// 3. ENCERRAMENTO DO SISTEMA

console.log(`\nSISTEMA ENCERRADO.`);
console.log(`Quantidade total de alunos cadastrados nesta sessão: ${totalAlunos}`);