const resultado = document.getElementById("resultado")
const botao = document.getElementById("mostra")

botao.addEventListener("click", function () {
    const Numero = document.getElementById("numero").value;
    const valor = Number(Numero);

    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");


        item.textContent = ` ${valor} x ${i} = ${valor * i}`;
        lista.appendChild(item);

    }

})