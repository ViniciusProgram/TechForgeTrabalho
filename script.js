// Seleciona o input e o menu móvel
var toggle = document.getElementById('toggle');
var navMobile = document.querySelector('.nav-mobile');

// Função para controlar o menu móvel
function controlarMenuMobile() {
    // Verifica se a largura da tela é menor ou igual a 768px
    if (window.innerWidth <= 768) {
        // Adiciona um ouvinte de evento para o input
        toggle.addEventListener('change', function() {
            console.log('Toggle alterado!');
            // Verifica se o input está marcado (checked)
            if (toggle.checked) {
                // Se estiver marcado, exibe o menu móvel
                navMobile.style.display = 'block';
            } else {
                // Se não estiver marcado, oculta o menu móvel
                navMobile.style.display = 'none';
            }
        });
    } else {
        // Se a largura da tela for maior que 768px, mantém o menu móvel oculto
        navMobile.style.display = 'none';
    }
}

// Chama a função para controlar o menu móvel quando a página é carregada
controlarMenuMobile();

// Adiciona um ouvinte de evento para verificar a largura da tela sempre que houver uma alteração
window.addEventListener('resize', controlarMenuMobile);
