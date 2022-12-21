//Quando uma string, ou vetor é iterável a gente pode pegar direto o valor ao invez do indice
const nome = 'Rafael Guimarães'

for (let value of nome){
    console.log(value)
}

//For clássico - Geralmente com iteráveis (array ou strings)
//For in - Retorna o índice ou chave (strings, array ou objetos)
//For of - retorna o valor em si (iteráveis, arrays ou strings)