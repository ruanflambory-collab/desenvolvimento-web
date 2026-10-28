let saldo = 1000;
const historico = [
    "Abertura da conta: R$ 1000.00"
];

// Elementos do DOM
const saldoAtualEl = document.getElementById("saldoAtual");
const operacaoEl = document.getElementById("operacao");
const valorEl = document.getElementById("valor");
const btnExecutarEl = document.getElementById("btnExecutar");
const resultadoEl = document.getElementById("resultado");

function atualizarSaldoTela() {
    saldoAtualEl.textContent = saldo.toFixed(2);
}

btnExecutarEl.addEventListener("click", function () {
    const operacao = operacaoEl.value;
    const valorDigitado = valorEl.value;
    const valor = Number(valorDigitado);

    switch (operacao) {
        case "consultar":
            resultadoEl.innerHTML = "<p>Seu saldo disponível é: <strong>R$ " + saldo.toFixed(2) + "</strong></p>";
            break;

        case "depositar":
            if (valorDigitado === "" || isNaN(valor) || !Number.isInteger(valor) || valor <= 0) {
                resultadoEl.innerHTML = "<p style='color: red;'>Erro: Informe um valor inteiro positivo maior que zero para depósito.</p>";
            } else {
                saldo += valor;
                historico.push("Depósito: +R$ " + valor.toFixed(2));
                atualizarSaldoTela();

                resultadoEl.innerHTML = 
                    "<p style='color: green;'>Depósito de R$ " + valor.toFixed(2) + " realizado com sucesso!</p>" +
                    "<p>Novo saldo: R$ " + saldo.toFixed(2) + "</p>";
            }
            break;

        case "sacar":
            if (valorDigitado === "" || isNaN(valor) || !Number.isInteger(valor) || valor <= 0) {
                resultadoEl.innerHTML = "<p style='color: red;'>Erro: O valor do saque deve ser um número inteiro maior que zero.</p>";
            } else if (valor % 10 !== 0) {
                resultadoEl.innerHTML = "<p style='color: red;'>Erro: O valor do saque deve ser múltiplo de 10.</p>";
            } else if (valor > saldo) {
                resultadoEl.innerHTML = "<p style='color: red;'>Erro: Saldo insuficiente para realizar a operação.</p>";
            } else {
                let restante = valor;
                let notas100 = 0;
                let notas50 = 0;
                let notas20 = 0;
                let notas10 = 0;

                while (restante >= 100) {
                    restante -= 100;
                    notas100++;
                }

                while (restante >= 50) {
                    restante -= 50;
                    notas50++;
                }

                while (restante >= 20) {
                    restante -= 20;
                    notas20++;
                }

                while (restante >= 10) {
                    restante -= 10;
                    notas10++;
                }

                saldo -= valor;
                historico.push("Saque: -R$ " + valor.toFixed(2));
                atualizarSaldoTela();

                let mensagemNotas = "<p style='color: green;'>Saque de R$ " + valor.toFixed(2) + " realizado com sucesso!</p>";
                mensagemNotas += "<p><strong>Notas entregues:</strong></p><ul>";

                if (notas100 > 0) mensagemNotas += "<li>" + notas100 + " nota(s) de R$ 100</li>";
                if (notas50 > 0) mensagemNotas += "<li>" + notas50 + " nota(s) de R$ 50</li>";
                if (notas20 > 0) mensagemNotas += "<li>" + notas20 + " nota(s) de R$ 20</li>";
                if (notas10 > 0) mensagemNotas += "<li>" + notas10 + " nota(s) de R$ 10</li>";

                mensagemNotas += "</ul>";

                const totalNotas = notas100 + notas50 + notas20 + notas10;
                mensagemNotas += "<p>Total de notas entregues: " + totalNotas + "</p>";

                mensagemNotas += "<p>Saldo restante: R$ " + saldo.toFixed(2) + "</p>";

                resultadoEl.innerHTML = mensagemNotas;
            }
            break;

        case "extrato":
            let htmlExtrato = "<h3>EXTRATO</h3><ol>";

          
            for (let i = 0; i < historico.length; i++) {
                htmlExtrato += "<li>" + historico[i] + "</li>";
            }

            htmlExtrato += "</ol>";
            htmlExtrato += "<p><strong>Saldo atual: R$ " + saldo.toFixed(2) + "</strong></p>";

            resultadoEl.innerHTML = htmlExtrato;
            break;

        default:
            resultadoEl.innerHTML = "<p style='color: red;'>Operação inválida.</p>";
            break;
    }

    valorEl.value = "";
});