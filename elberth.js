function main() {
  alert("Bem-vindo ao sistema de gestão de alunos!");
  
  let nome = prompt("Digite o nome do aluno: ");
  let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
  let nota2 = parseFloat(prompt("Digite a nota da segunda prova: "));

  let media = calcularMedia(nota1, nota2);
  let status = verificarStatus(media);

  alert("A média do aluno " + nome + " é: " + media + "\nStatus do aluno: " + status);
}

function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}

function verificarStatus(media) {
  if (media >= 7.0) {
    return "Aprovado";
  } else if (media >= 4.0 && media < 7.0) {
    return "Em recuperação";
  } else {
    return "Reprovado";
  }
}

main();