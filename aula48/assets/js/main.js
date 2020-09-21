const elementos = [
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto:'Frase 2'},
    {tag:'section', texto:'Frase 4'},
    {tag:'footer', texto:'Frase 3'},
];

const section = document.querySelector('.container');
const div = document.createElement('div');

elementos.forEach(element => {
    let tag = document.createElement(element.tag);
    let text = document.createTextNode(element.texto);
    tag.appendChild(text);

    div.appendChild(tag);
});

section.appendChild(div);