const botao = document.getElementById("pedido")
const aplicar = document.getElementById("aparecer")

botao.addEventListener("click", function(){

    const lan= document.getElementById("lan").value;

    switch(lan){
        case "1":
         aparecer.textContent = "Suco de uva"
         break;


        case "2":
         aparecer.textContent ="x- tudo"
         break;

        case "3":
          aparecer.textContent ="Batata ao molho"
          break;
        case "4":
         aparecer.textContent = "Coca Zero "  
         break;
         default:
            aparecer.textContent ="Invalido"
    }
})