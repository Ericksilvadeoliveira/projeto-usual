var paginaInicial = document.querySelector('.pag-inicial');
var trocaPaginas = document.querySelector('.troca-paginas');
var explorar = document.querySelector('.explorar');
var explorarContent = document.querySelector('.explorar-content');

paginaInicial.addEventListener('click', function() {
    if(trocaPaginas.style.display === 'block') {
        trocaPaginas.style.display = 'none';
    }else {
        trocaPaginas.style.display = 'block';
        explorarContent.style.display = 'none';
    }
});

explorar.addEventListener('click', function() {
    if(explorarContent.style.display === 'block') {
        explorarContent.style.display = 'none';
    }else {
        explorarContent.style.display = 'block';
        trocaPaginas.style.display = 'none';
    }
});

