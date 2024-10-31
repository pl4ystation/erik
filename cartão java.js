document.getElementById("creditForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obtendo os valores dos campos e garantindo que são numéricos
    const saldoInicial = parseFloat(document.getElementById("saldo").value) || 0;
    const faturaAtual = parseFloat(document.getElementById("fatura").value) || 0;
    const pagamentoRealizado = parseFloat(document.getElementById("pagamento").value) || 0;

    // Cálculos
    const saldoDisponivel = saldoInicial - (faturaAtual - pagamentoRealizado);
    const faltaPagar = faturaAtual - pagamentoRealizado;

    // Exibindo os resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Resultados:</h2>
        <p>Saldo disponível: R$ ${saldoDisponivel.toFixed(2)}</p>
        <p>Total da fatura: R$ ${faturaAtual.toFixed(2)}</p>
        <p>Valor já pago: R$ ${pagamentoRealizado.toFixed(2)}</p>
        <p>Falta pagar: R$ ${faltaPagar > 0 ? faltaPagar.toFixed(2) : 'R$ 0,00'}</p>
        <p>SE INSCREVE NO MEU CANAL OK??</p>
    `;
});
