// MEU PRIMEIRO APP AEHOOOOOO
function App() {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    const pessoas = [];

    function registraPessoa (event) {
        event.preventDefault(); // previne submit
        const nome = form.querySelector(`.nome`);
        const sobrenome = form.querySelector(`.sobrenome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);
        

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p><strong>Registro número ${pessoas.length}<strong></p>`;
        resultado.innerHTML += `<p>Nome: ${pessoas[pessoas.length - 1].nome}</p>`;
        resultado.innerHTML += `<p>Sobrenome: ${pessoas[pessoas.length - 1].sobrenome}</p>`;
        resultado.innerHTML += `<p>Peso: ${pessoas[pessoas.length - 1].peso}</p>`;
        resultado.innerHTML += `<p>Altura: ${pessoas[pessoas.length - 1].altura}</p>`;


    };

    form.addEventListener(`submit`, registraPessoa);
}

App();
