//Adicionando a cor do background em cada parágrafo

const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

//Aqui eu pego todos os estilos computados pelo browser
const estilosBody = getComputedStyle(document.body)
const backGroundColorBody = estilosBody.backgroundColor
console.log(backGroundColorBody)

for ( let p of ps){
    p.style.backgroundColor = backGroundColorBody;
    p.style.color = "#FFF"
}