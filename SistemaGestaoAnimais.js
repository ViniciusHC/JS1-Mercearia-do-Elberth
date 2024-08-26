main();

function calcularIdadeHumana(idadeAnimal, tipoAnimal){
    switch (tipoAnimal.toLowerCase()) {
        case "cachorro":
            if (idadeAnimal <= 2) {
                return idadeAnimal * 11;
            } else {
                return 22 + ((idadeAnimal - 2) * 5);
            }
        
        case "gato":
            if (idadeAnimal <= 2) {
                return idadeAnimal * 12;
            } else {
                return 24 + ((idadeAnimal - 2) * 4);
            }
            
        default:
            if (idadeAnimal <= 2) {
                return idadeAnimal * 10;
            } else {
                return 20 + ((idadeAnimal - 2) * 5);
            }
    }
}

function determinarEstagioVida(idadeHumana){
    if (idadeHumana < 10) {
        return "Filhote";
    } else if (idadeHumana >= 10 && idadeHumana < 20) {
        return "Jovem";
    } else if (idadeHumana >= 20 && idadeHumana < 50) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

function precisaDeCuidadosEspeciais(idadeHumana){
    return idadeHumana < 5 || idadeHumana > 40;
}

function sugerirCuidados(estagioVida){
    switch (estagioVida) {
        case "Filhote":
            return "Cuidados sugeridos: Vacinação, alimentação balanceada, socialização.";

        case "Jovem":
            return "Cuidados sugeridos: Exercícios regulares, check-ups anuais, nutrição adequada.";
        
        case "Adulto":
            return "Cuidados sugeridos: Exercícios regulares, controle de peso, exames de saúde.";
            
        case "Idoso":
            return "Cuidados sugeridos: Check-ups frequentes, dieta especial, monitoramento de saúde.";
            
        default:
            return "Cuidados sugeridos: Informação não disponível.";
    }
}

function main() {
    alert("Bem-vindo ao sistema de gestão de animais!");

    const nomeAnimal = prompt("Digite o nome do animal: ");
    const tipoAnimal = prompt("Digite o tipo do animal (cachorro, gato etc): ");
    const idadeAnimal = parseInt(prompt("Digite a idade do animal em anos: "));

    let idadeHumana = calcularIdadeHumana(idadeAnimal, tipoAnimal);
    let estagioVida = determinarEstagioVida(idadeHumana);
    let cuidadosEspeciais = precisaDeCuidadosEspeciais(idadeHumana);
    let sugestaoCuidados = sugerirCuidados(estagioVida);
    
    alert("A idade do animal " + nomeAnimal + " em anos humanos é: " + idadeHumana + 
          "\nEstágio de vida do animal: " + estagioVida + 
          "\nCuidados especiais necessários: " + (cuidadosEspeciais ? "Sim" : "Não") +
          "\nSugestão de cuidados: " + sugestaoCuidados);
}
