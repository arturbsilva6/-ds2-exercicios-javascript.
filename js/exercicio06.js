// Solicitando as informações ao usuário
let nome = prompt("Digite o nome do aluno:");
let entradaNota1 = prompt("Digite a primeira nota (de 0 a 10):");
let entradaNota2 = prompt("Digite a segunda nota (de 0 a 10):");

// Convertendo as entradas para número 
let nota1 = Number(entradaNota1.replace(',', '.'));
let nota2 = Number(entradaNota2.replace(',', '.'));

// Validação: as notas devem ser números e estar no intervalo de 0 a 10
if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log("Erro: Notas inválidas. Os valores devem ser numéricos e estar entre 0 e 10.");
} else {
    // Calculando a média
    let media = (nota1 + nota2) / 2;
    let situacao = "";

    // Classificando o resultado
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5 && media < 7) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    // Exibindo os resultados com formatação
    console.log("--- BOLETIM DO ALUNO ---");
    console.log(`Nome: ${nome}`);
    console.log(`Notas: ${nota1} e ${nota2}`);
   
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação final: ${situacao}`);
}