//Escreva uma função que recebe um número e retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 == Buzz
//Numero é divisil por 3 e 5 = FizzBuzz
//Numero NÃO é divisivel por 3 e 5 = retorna o proprio numero
//Checar se o número é realmente um número = Retorne o proprio numero
//use a função com números de 0 a 100

function receivedNumber(number){
    if(typeof number !== 'number'){
        return NaN
    }
    if(number%3==0 && number%5==0){
        return "FizzBuzz"
    }
    if(number%3 == 0){
        return "Fizz"
    }
    if( number%5==0){
        return "Buzz"
    }
    if(number%3 !==0 && number%5 !==0){
        return number
    }
}
for (let i = 0; i <= 100; i++){
    console.log(i, receivedNumber(i))
}