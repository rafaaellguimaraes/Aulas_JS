const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

//seleciona o container, sempre prega o primeiro elemento
const container = document.querySelector('.container');

//cria uma div
const div = document.createElement('div');

//Percorre todo o array de elementos e cria o elemento
for (let i = 0; i < elementos.length; i++){
    const { tag, texto } = elementos[i];
    let createTag = document.createElement(tag);
    createTag.innerText = texto;
    div.appendChild(createTag);
}
container.appendChild(div)