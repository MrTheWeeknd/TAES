// Função chamada ao enviar o formulário de login
function redirecionar() {
  // Redireciona para a homepage
  window.location.href = 'home.html';
}

// Adiciona um listener para o evento de envio do formulário
document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Impede o envio padrão do formulário
          redirecionar(); // Chama a função de redirecionamento
      });
  }
});
