document.getElementById("gerar-relatorio-btn").addEventListener("click", function() {
    const anoSelecionado = document.getElementById("ano-selecionado").value;
    if (anoSelecionado !== "Selecione o ano") {
        document.getElementById("relatorio-anual").innerHTML = `
            <div class="col-md-10 offset-md-1">
                <h2 class="text-center">Relatório de ${anoSelecionado}</h2>
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total de Receitas: 
                        <span class="badge bg-success">R$ 50.000</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total de Despesas:
                        <span class="badge bg-danger">R$ 30.000</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Balanço:
                        <span class="badge bg-primary">R$ 20.000</span>
                    </li>
                </ul>
            </div>`;
    } else {
        alert("Por favor, selecione um ano.");
    }
});
