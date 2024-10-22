document.getElementById("logout-btn").addEventListener("click", function() {
    if (confirm("Você tem certeza que deseja sair?")) {
        window.location.href = "index.html"; // Redireciona para a página de login
    }
});
