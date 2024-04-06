
// Funcionalidade do botão de pesquisa
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o campo de pesquisa e o botão de pesquisa pelo ID
    const campoPesquisa = document.getElementById('campo-pesquisa');
    const btnPesquisar = document.getElementById('btn-pesquisar');

    // Evento para o clique no botão
    btnPesquisar.addEventListener('click', function(event) {
        // Evita o comportamento padrão de envio do formulário
        event.preventDefault();

        // Valor digitado no campo de pesquisa
        const palavraPesquisada = campoPesquisa.value.trim();

        // Verifica se a palavra pesquisada não está vazia
        if (palavraPesquisada !== '') {
            // Seleciona todos os elementos de texto
            const elementosTexto = document.querySelectorAll('.content p');

            // Percorre todos os elementos de texto para procurar e marcar a palavra pesquisada
            elementosTexto.forEach(function(elemento) {
                const texto = elemento.innerText;
                const textoMarcado = texto.replace(new RegExp(palavraPesquisada, 'gi'), '<mark>$&</mark>');
                elemento.innerHTML = textoMarcado;
            });
        } else {
            // Exibe um alerta se o campo de pesquisa estiver vazio
            alert('Digite uma palavra para pesquisar.');
        }
    });
});