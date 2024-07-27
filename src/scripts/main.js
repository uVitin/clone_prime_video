document.addEventListener('DOMContentLoaded', function() {
    const headerSection = document.querySelector('.hero__content');
    const alturaHeader = headerSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;
        
        if (posicaoAtual < alturaHeader) {            
            exibiElementosDoHeader();
        } else {
            ocultaElementosDoHeader();
        }
    })
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header__container');
    header.classList.add('--hidden')
}

function exibiElementosDoHeader() {
    const header = document.querySelector('.header__container');
    header.classList.remove('--hidden')
}

