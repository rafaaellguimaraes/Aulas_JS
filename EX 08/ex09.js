//Escreva uma função chamada ePaisagem que recebe 2 argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura){
    if(largura > altura){
        return "true"
    }else{
        return "A foto não esta no formato paisagem"
    }
}
console.log(ePaisagem(1080, 608))

//Ou fazemos dessa forma
const isPaisagem = (larg, alt) => larg > alt ? true : false
console.log(isPaisagem(1080,608))