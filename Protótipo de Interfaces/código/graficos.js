// Obter o contexto dos elementos canvas
const ctxReceitas = document.getElementById('graficoReceitas').getContext('2d');
const ctxDespesas = document.getElementById('graficoDespesas').getContext('2d');

// Gráfico de Receitas
const graficoReceitas = new Chart(ctxReceitas, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Receitas (R$)',
            data: [5000, 7000, 8000, 6000, 9000, 11000],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valor (R$)'
                }
            }
        }
    }
});

// Gráfico de Despesas
const graficoDespesas = new Chart(ctxDespesas, {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Despesas (R$)',
            data: [3000, 4000, 3500, 5000, 4500, 6000],
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Valor (R$)'
                }
            }
        }
    }
});
