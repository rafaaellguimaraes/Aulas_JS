// For normal
const frutas = ["Pêra", "Maçã", "Uva"]
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//For in => lê os indeces ou chaves do objeto
for (let index in frutas){
    console.log(frutas[index])
}

//For in com objeto
const pessoa = {
    nome: 'Rafa',
    sobrenome: 'Guimarães',
    idade: 27
}

for(let key in pessoa){
    console.log(key, pessoa[key])
}