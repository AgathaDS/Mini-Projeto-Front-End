document.addEventListener('DOMContentLoaded', function() {
    setInterval(todosInteresses, 1000);

    const buttonAdd = document.querySelector('.button-add');
    const buttonClear = document.querySelector('.button-clear');

    buttonAdd.addEventListener('click', adicionarInteresse);
    buttonClear.addEventListener('click', limparLista);

    obterNoticia();
});

function todosInteresses() {
    const listaInteresses = document.getElementById('interesses-lista');
    listaInteresses.innerHTML = ''; 
    const interessesJSON = localStorage.getItem('meus-interesses');
    if (interessesJSON) {
        const interesses = JSON.parse(interessesJSON);
        interesses.forEach(interesse => {
            const li = document.createElement('li');
            li.textContent = interesse;
            listaInteresses.appendChild(li);
        });
    }
}

function adicionarInteresse() {
    const inputInteresse = document.getElementById('input-interesse');
    const novoInteresse = inputInteresse.value.trim();

    if (novoInteresse) {
        let interesses = JSON.parse(localStorage.getItem('meus-interesses')) || [];
        interesses.push(novoInteresse);
        localStorage.setItem('meus-interesses', JSON.stringify(interesses));
        todosInteresses(); 
        inputInteresse.value = ''; 

        saveInteresseLocalStorage(novoInteresse)
    }
}

function limparLista() {
    localStorage.removeItem('meus-interesses');
    todosInteresses(); 
}

function obterNoticia() {
    fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        .then(response => response.json())
        .then(data => {
            const noticia = data.items[0];
            if (noticia) {
                const tituloNoticia = noticia.titulo;
                const elementoTitulo = document.querySelector('.title-news-today');
                elementoTitulo.textContent = tituloNoticia;
            }
        })
        .catch(error => {
            console.error('Erro ao obter a notícia:', error);
        });
}