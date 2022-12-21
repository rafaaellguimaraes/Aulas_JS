//Escreva uma função que recebe 2 números e retorne o maior deles

function maxNumber(a , b){
    if(a < b){
        return b
    }else{
        return a
    }
}

console.log(maxNumber(10, 15))


//Ou podemos fazer dessa forma
const maxNumber2 = (x, y) => x > y ? x : y
console.log(maxNumber2(50, 20))