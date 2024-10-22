document.getElementById("add-despesa-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    
    if (descricao && valor) {
        // Adiciona nova despesa à lista
        const despesaItem = document.createElement("li");
        despesaItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        despesaItem.innerHTML = `${descricao} - R$ ${valor}
            <span>
                <button class="btn btn-sm btn-warning" onclick="editDespesa(this)">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDespesa(this)">Excluir</button>
            </span>`;
        document.getElementById("despesas-list").appendChild(despesaItem);

        // Limpa os campos do formulário
        document.getElementById("descricao").value = "";
        document.getElementById("valor").value = "";

        alert("Despesa adicionada com sucesso!");
    }
});

function editDespesa(button) {
    const li = button.parentElement.parentElement;
    const descricaoValor = li.innerText.split(" - ");
    const descricao = descricaoValor[0];
    const valor = descricaoValor[1].replace("R$ ", "");

    const novaDescricao = prompt("Edite a descrição da despesa:", descricao);
    const novoValor = prompt("Edite o valor da despesa:", valor);

    if (novaDescricao && novoValor) {
        li.innerHTML = `${novaDescricao} - R$ ${novoValor}
            <span>
                <button class="btn btn-sm btn-warning" onclick="editDespesa(this)">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteDespesa(this)">Excluir</button>
            </span>`;
        alert("Despesa editada com sucesso!");
    }
}

function deleteDespesa(button) {
    if (confirm("Tem certeza que deseja excluir esta despesa?")) {
        const li = button.parentElement.parentElement;
        li.remove();
        alert("Despesa excluída com sucesso!");
    }
}
