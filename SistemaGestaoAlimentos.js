main();

function calcularTotal(preco, quantidade){
    return preco * quantidade;
}

function verificarDesconto(total){
    const LIMITE_DESCONTO = 50.0;
    
    return total >= LIMITE_DESCONTO;
}

function aplicarDesconto(total, ganhouDesconto){
    const PERCENTUAL_DESCONTO = 0.1;

    return ganhouDesconto ? total * (1 - PERCENTUAL_DESCONTO) : total;
}

function avaliarQualidade(total){
    return total >= 100.0 ? "Excelente" : total >= 50.0 ? "Boa" : "Regular";
}

function processarAlimento(nome, preco, quantidade){
    let total = calcularTotal(preco, quantidade);
    let ganhouDesconto = verificarDesconto(total);
    let totalComDesconto = aplicarDesconto(total, ganhouDesconto);
    let qualidade = avaliarQualidade(total);

    alert("\nNome do alimento: " + nome + 
          "\nTotal: R$" + total + 
          "\nTotal com desconto: R$" + totalComDesconto +
          "\nDesconto aplicado: " + (ganhouDesconto ? "Sim" : "Não") +
          "\nQualidade do alimento: " + qualidade);
}

function main() {
    alert("Bem-vindo ao sistema de gestão de alimentos!");

    let nomeAlimento;
    let precoPorUnidade;
    let quantidade;

    nomeAlimento = prompt("Digite o nome alimento: ");
    precoPorUnidade = parseFloat(prompt("Digite o preço por unidade do primeiro alimento: "));
    quantidade = parseInt(prompt("Digite a quantidade de unidades compradas do primeiro alimento: "));
    processarAlimento(nomeAlimento, precoPorUnidade, quantidade);

/*     
    nomeAlimento = prompt("Digite o nome alimento: ");
    precoPorUnidade = parseFloat(prompt("Digite o preço por unidade do primeiro alimento: "));
    quantidade = parseInt(prompt("Digite a quantidade de unidades compradas do primeiro alimento: "));
    processarAlimento(nomeAlimento, precoPorUnidade, quantidade);
 */}