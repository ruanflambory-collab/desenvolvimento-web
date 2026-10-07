const botao = document.getElementById("verificar")
const resultado = document.getElementById("resultado")

botao.addEventListener("click", function (){
    const dia = document.getElementById("dia").value;

    switch(dia){
        case "1":
            resultado.textContent = "Segunda-Feira"
            break;
        case "2":
            resultado.textContent ="Terça- feira"
            break;
        case "3":
            resultado.textContent = "Quarta-Feira"
            break;
        case "4":
            resultado.textContent = "Quinta- Feira"
            break;
        case "5":
            resultado.textContent = "Sexta-Feira"
            break;
        default:
            resultado.textContent = "Selecione um numero correto"                    
    }
}

)