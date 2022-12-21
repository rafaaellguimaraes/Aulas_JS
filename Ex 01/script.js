let numero = Number(prompt('Digite um número'));
let num_title = document.getElementById('num-title');
let text = document.getElementById('text');



num_title.innerHTML = numero;
text.innerHTML = `<p>Sua raiz quadrada é: ${numero ** (1/2)}</p>`;
text.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
text.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}</p>`
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}</p>`
text.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`
text.innerHTML += `<p>${numero} é par: ${numero % 2 == 0}</p>`