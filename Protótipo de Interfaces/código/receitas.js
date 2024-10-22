document.getElementById("add-receita-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const descricao = document.getElementById("descricao").value;
    const valor = document.getElementById("valor").value;
    
    if (descricao && valor) {
        // Adiciona nova receita à lista
        const receitaItem = document.createElement("li");
        receitaItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        receitaItem.innerHTML = `${descricao} - R$ ${valor}
            <span>
                <button class="btn btn-sm btn-warning" onclick="editReceita(this)">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteReceita(this)">Excluir</button>
            </span>`;
        document.getElementById("receitas-list").appendChild(receitaItem);

        // Limpa os campos do formulário
        document.getElementById("descricao").value = "";
        document.getElementById("valor").value = "";

        alert("Receita adicionada com sucesso!");
    }
});

function editReceita(button) {
    const li = button.parentElement.parentElement;
    const descricaoValor = li.innerText.split(" - ");
    const descricao = descricaoValor[0];
    const valor = descricaoValor[1].replace("R$ ", "");

    const novaDescricao = prompt("Edite a descrição da receita:", descricao);
    const novoValor = prompt("Edite o valor da receita:", valor);

    if (novaDescricao && novoValor) {
        li.innerHTML = `${novaDescricao} - R$ ${novoValor}
            <span>
                <button class="btn btn-sm btn-warning" onclick="editReceita(this)">Editar</button>
                <button class="btn btn-sm btn-danger" onclick="deleteReceita(this)">Excluir</button>
            </span>`;
        alert("Receita editada com sucesso!");
    }
}

function deleteReceita(button) {
    if (confirm("Tem certeza que deseja excluir esta receita?")) {
        const li = button.parentElement.parentElement;
        li.remove();
        alert("Receita excluída com sucesso!");
    }
}
